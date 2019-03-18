<template>
    <div class="columns">
      <div class="column is-one-third" v-for="post in posts" :key="post.id">
        <post :link="post.link">
          <h3 slot="title" v-html="post.title.rendered"> </h3>
          <span slot="title" v-html="post.excerpt.rendered"> </span>
        </post>
      </div>
    </div>
</template>

<script>
import Post from './Post.vue'
import appService from '../app.service.js'
export default {
  components: {
    Post
  },
  data () {
    return {
      id: this.$route.params.id,
      posts: []
    }
  },
  methods: {
    loadPosts () {
      let categoryId = 2
      if (this.id === 'mobile') {
        categoryId = 11
      }
      appService.getPosts(categoryId).then(data => {
        this.posts = data
      })
    }
  },
  watch: {
    '$route' (to, from) {
      this.id = to.params.id
      this.loadPosts()
    }
  },
  created () {
    this.loadPosts()
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
