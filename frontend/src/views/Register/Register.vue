<template>
    <div class="auth-page">

        <div :class="$style.form">
            <h1>Sign up</h1>
            <router-link :to="{ name: 'login' }">Have an acсount?</router-link>
            <form @submit.prevent="onSubmit">
                <label for="name">
                    <input type="text" name="name" id="name" placeholder="UserName">
                </label>
                <label for="email">
                    <input type="email" id="email" name="email" placeholder="Email">
                </label>
                <label for="password">
                    <input type="password" name="password" id="password" placeholder="Password">
                </label>
                <button v-bind:disabled="isSubmitting">Sign Up</button>
            </form>
        </div>

    </div>
</template>


<script>

import styles from './Register.module.css';

export default {
    name: 'McvRegister',
    computed: {
        isSubmitting() {
            return this.$store.state.auth.isSubmiting
        },
        $style() {
            return styles;
        }
    },
    methods: {
        onSubmit() {
            this.$store.dispatch('register');
        },
    },
}

</script>