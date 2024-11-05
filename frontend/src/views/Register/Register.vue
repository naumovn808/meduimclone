<template>
    <div class="auth-page">
        <div class="form">
            <h1>Sign up</h1>
            <router-link :to="{ name: 'login' }">Have an account?</router-link>
            <form @submit.prevent="onSubmit">
                <label for="name">
                    <input type="text" name="name" id="name" placeholder="UserName" v-model="username"
                        :class="{ 'input-error': hasError('username') }">
                    <span v-if="hasError('username')">{{ getErrorMessage('username') }}</span>
                </label>
                <label for="email">
                    <input type="email" id="email" name="email" placeholder="Email" v-model="email"
                        :class="{ 'input-error': hasError('email') }">
                    <span v-if="hasError('email')">{{ getErrorMessage('email') }}</span>
                </label>
                <label for="password">
                    <input type="password" name="password" id="password" placeholder="Password" v-model="password"
                        :class="{ 'input-error': hasError('password') }">
                    <span v-if="hasError('password')">{{ getErrorMessage('password') }}</span>
                </label>
                <button :disabled="isSubmitting">Sign Up</button>
            </form>
        </div>
    </div>
</template>

<script>
import styles from './Register.css';
import { actionsTypes } from '@/store/modules/auth';

export default {
    name: 'McvRegister',
    data() {
        return {
            email: '',
            password: '',
            username: ''
        };
    },
    computed: {
        isSubmitting() {
            return this.$store.state.auth.isSubmitting;
        },
        $style() {
            return styles;
        },
        validationErrors() {
            return this.$store.state.auth.validationErrors;
        }
    },
    methods: {
        onSubmit() {
            this.$store
                .dispatch(actionsTypes.register, {
                    email: this.email,
                    username: this.username,
                    password: this.password
                })
                .then(() => {
                    this.$router.push({ name: 'home' })
                })
        },
        hasError(field) {
            return this.validationErrors && this.validationErrors[field];
        },
        getErrorMessage(field) {
            return this.hasError(field) ? this.validationErrors[field].join(' ') : '';
        }
    }
};
</script>
