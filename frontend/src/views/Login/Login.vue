<template>
    <div class="auth-page">

        <div class="form">
            <h1>Sign in</h1>
            <router-link :to="{ name: 'register' }">Need an acсount?</router-link>
            <form @submit.prevent="onSubmit">
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
                <button v-bind:disabled="isSubmitting">Sign in</button>
            </form>
        </div>

    </div>
</template>


<script>
import styles from '../Register/Register.css';
import { actionsTypes } from '@/store/modules/auth';

export default {
    name: 'McvLogin',
    data() {
        return {
            email: '',
            password: '',
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
                .dispatch(actionsTypes.login, {
                    email: this.email,
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