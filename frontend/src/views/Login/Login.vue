<template>
    <div class="auth-page">

        <div class="form">
            <h1>Sign in</h1>
            <router-link :to="{ name: 'register' }">Need an acсount?</router-link>
            <form @submit.prevent="onSubmit">
                <label for="email">
                    <input type="email" id="email" name="email" placeholder="Email">
                </label>
                <label for="password">
                    <input type="password" name="password" id="password" placeholder="Password">
                </label>
                <button v-bind:disabled="isSubmitting">Sign in</button>
            </form>
        </div>

    </div>
</template>


<script>

import styles from '../Register/Register.css';

export default {
    name: 'McvLogin',
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
            console.log(this.$store.state.auth.isSubmiting)
            this.$store.commit('registerStart')
        },
    },
}

</script>