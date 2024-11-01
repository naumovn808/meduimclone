<template>
    <div class="auth-page">

        <div :class="$style.form">
            <h1>Sign Up</h1>
            <p>
                <!-- <router-link :to="{ name: 'login' }">Need an acсount</router-link> -->
                <span>Need an acсount</span>
            </p>
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
                <button>Sign Up</button>
            </form>
            <button @click="increaseCounter">Increase counter</button>
            {{ count }}
        </div>

    </div>
</template>


<script>

import styles from './Register.module.css';

export default {
    name: 'McvRegister',
    computed: {
        count() {
            return this.$store.state.count
        },
        $style() {
            return styles;
        }
    },
    methods: {
        onSubmit() {
            console.log('submited form');
        },
        increaseCounter() {
            console.log('counter');
            this.$store.commit('increment')
        }
    },
}

</script>