const humps = require("humps")
const uuid = require("uuid")
const _ = require("lodash")
const bcrypt = require("bcryptjs")
const { ValidationError } = require("../lib/errors")
const { generateJWTforUser } = require("../lib/utils")
const db = require("../lib/db")

module.exports = {
  async get(ctx) {
    const user = generateJWTforUser(ctx.state.user)

    ctx.body = { user }
  },

  async post(ctx) {
    const { body } = ctx.request
    let { user = {} } = body
    const opts = { abortEarly: false, context: { validatePassword: true } }

    user.id = uuid()

    user = await ctx.app.schemas.user.validate(user, opts)

    user.password = await bcrypt.hash(user.password, 10)

    await db("users").insert(humps.decamelizeKeys(user))

    user = generateJWTforUser(user)

    ctx.body = { user: _.omit(user, ["password"]) }
  },

  async put(ctx) {
    const { body } = ctx.request
    let { user: fields = {} } = body
    const opts = { abortEarly: false, context: { validatePassword: false } }

    if (fields.password) {
      opts.context.validatePassword = true
    }

    let user = Object.assign({}, ctx.state.user, fields)
    user = await ctx.app.schemas.user.validate(user, opts)

    if (fields.password) {
      user.password = await bcrypt.hash(user.password, 10)
    }

    user.updatedAt = new Date().toISOString()

    await db("users")
      .where({ id: user.id })
      .update(humps.decamelizeKeys(user))

    user = generateJWTforUser(user)

    ctx.body = { user: _.omit(user, ["password"]) }
  },

  async login(ctx) {
    const { body } = ctx.request;
  
    if (!body.user || (!body.user.email && !body.user.password)) {
      ctx.throw(422, new ValidationError(["Email and password fields are required"], "", "emptyFields"));
      return;
    }
  
    if (!body.user.email) {
      ctx.throw(422, new ValidationError(["Email is required"], "", "emptyEmail"));
      return;
    }
  
    if (!body.user.password) {
      ctx.throw(422, new ValidationError(["Password is required"], "", "emptyPassword"));
      return;
    }
  
    let user = await db("users").first().where({ email: body.user.email });
  
    ctx.assert(
      user,
      401,
      new ValidationError(["Invalid email or password"], "", "invalidCredentials")
    );
  
    const isValid = await bcrypt.compare(body.user.password, user.password);
  
    ctx.assert(
      isValid,
      401,
      new ValidationError(["Invalid email or password"], "", "invalidCredentials")
    );
  
    user = generateJWTforUser(user);
    ctx.body = { user: _.omit(user, ["password"]) };
  }

}
