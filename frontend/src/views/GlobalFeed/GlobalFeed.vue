<template>
    <div class="container">
        <div class="home-page">

            <div class="home-content">
                <mcv-feed :api-url="apiUrl" />
            </div>

            <div class="home-tags">
                POPULAR TAGS
            </div>
            
        </div>

    </div>
</template>


<script>
import McvFeed from '@/components/Feed/Feed.vue'
import styles from './GlobalFeed.css'
export default {
    name: 'McvGlobalFeed',
    components: {
        McvFeed
    },
    data() {
        return {
            apiUrl: '/articles'
        }
    },
    computed: {
        $style() {
            return styles;
        }
    }
}

</script>