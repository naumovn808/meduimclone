<template>
    <div>
        <div v-if="isLoading"></div>
        <div v-if="error">Something had happening</div>
        <div v-if="feed">
            <div class="article-preview" v-for="(article, index) in feed.articles" :key="index">
                <div class="article-meta">
                    <router-link :to="{ name: 'userProfile', params: { slug: article.author.username } }">
                        <img :src="article.author.image" @error="handleImageError" alt="Author image" width="20"
                            height="20" />
                    </router-link>
                    <div class="info">
                        <router-link :to="{ name: 'userProfile', params: { slug: article.author.username } }"
                            class="author">
                            {{ article.author.username }}
                        </router-link>
                        <span class="date">{{ article.createdAt }}</span>
                    </div>
                    <div class="add-to-favorites">
                        ADD TO FAVORITES
                    </div>
                </div>
                <router-link :to="{ name: 'article', params: { slug: article.slug } }" class="preview-link">
                    <h1>{{ article.title }}</h1>
                    <p>{{ article.description }}</p>
                    <span>Read more...</span>
                    <b>TAG LIST</b>
                </router-link>
            </div>
            <mcv-pagination :total="feed.articlesCount" :limit="limit" :currentPage="currentPage" :url="url" />
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { actionsTypes } from '@/store/modules/feed';
import style from "./Feed.css";
import McvPagination from '@/components/Pagination/Pagination.vue';
import { limit } from '@/helpers/vars.js';
import queryString from 'query-string';

export default {
    name: 'McvFeed',
    data() {
        return {
            limit,
            url: '/'
        }
    },
    components: {
        McvPagination
    },
    props: {
        apiUrl: {
            type: String,
            required: true
        }
    },
    computed: {
        ...mapState({
            isLoading: state => state.feed.isLoading,
            feed: state => state.feed.data,
            error: state => state.feed.error
        }),
        currentPage() {
            return parseInt(this.$route.query.page || '1')
        },
        baseUrl() {
            return this.$route.path
        },
        $style() {
            return style;
        },
        offset() {
            return this.currentPage * limit - limit
        }
    },
    watch: {
        currentPage() {
            this.fetchFeed()
        }
    },
    mounted() {
        this.fetchFeed()
    },
    methods: {
        handleImageError(event) {
            event.target.src = '/def-user.png'
        },
        fetchFeed() {
            const parsedUrl = queryString.parseUrl(this.apiUrl);
            const stringifiedParams = queryString.stringify({
                limit,
                offset: this.offset,
                ...parsedUrl.query
            })
            const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`
            this.$store.dispatch(actionsTypes.getFeed, { apiUrl: apiUrlWithParams })
        }
    }

}
</script>