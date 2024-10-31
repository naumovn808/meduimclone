<template>
    <div class="auth-page">
        <div class="container page">
            <div class="row">
                <div class="div">
                    <h1>Sign Up</h1>
                    <p>
                        <!-- <router-link :to="{ name: 'login' }">Need an acсount</router-link> -->
                    </p>
                    <form @submit.prevent="onSubmit">
                        <label for="name">
                            <input type="text" name="name" id="name" placeholder="UserName">
                        </label>
                        <label for="email">
                            <input type="email" id="email" name="email" placeholder="Email">
                        </label>
                        <label for="password">
                            <input type="password" name="password" id="password" placeholder="UserName">
                        </label>
                        <button>Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

export default {
    name: 'McvRegister',
    methods: {
        onSubmit() {
            console.log('submited form');
        }
    }
}

</script>