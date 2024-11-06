<template>
    <div class="container">
        <nav>
            <router-link :to="{ name: 'home' }" class="nav-logo">
                MediumClone
            </router-link>
            <ul>
                <li>
                    <router-link :to="{ name: 'home' }" active-class="active" exact class="nav-link">
                        Home
                    </router-link>
                </li>
                <template v-if="isLoggedIn">
                    <li>
                        <router-link :to="{ name: 'home' }" active-class="active" class="nav-link">
                            <img src="/article.svg" alt="article" width="20" height="20">
                            New Article
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'home' }" active-class="active" class="nav-link">
                            <img src="/settings.svg" alt="settings" width="20" height="20">
                            Settings
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'home', params: { slug: currentUser.name } }" class="nav-link nav-profile">
                            <img :src="currentUser.image ? currentUser.image : '/def-avtr.png'" alt="avatar" width="30"
                                height="30" />
                            {{ currentUser.username }}
                        </router-link>
                    </li>
                </template>
                <template v-if="!isLoggedIn">
                    <li>
                        <router-link :to="{ name: 'login' }" active-class="active" class="nav-link">
                            Sign In
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'register' }" active-class="active" class="nav-link">
                            Sign Up
                        </router-link>
                    </li>
                </template>
            </ul>
        </nav>
    </div>
</template>

<script>

import style from './style.css'

import { mapState } from 'vuex';
export default {
    name: 'McvTopbar',
    computed: {
        ...mapState({
            currentUser: state => state.auth.currentUser,
            isLoggedIn: state => state.auth.isLoggedIn
        }),

        $style() {
            return style;
        }
    }
}
</script>