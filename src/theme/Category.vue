<template>
    <transition-group name="fade" tag="div" class="columns">
      <div class="column is-one-third" v-for="post in posts" :key="post.id">
        <post :link="post.link">
          <h3 slot="title"> {{ post.title }} </h3>
          <span slot="title"> {{ post.content }} </span>
        </post>
      </div>
    </transition-group>
</template>

<script>
import Post from './Post.vue'
export default {
  components: {
    Post
  },
  data () {
    return {
      id: this.$route.params.id,
      postsFrontEnd: [
        {
          id: 1,
          title: 'PWA Stats',
          content:
            'A community-driven list of stats and news related to Progressive Web Apps',
          link: 'https://www.pwastats.com/'
        },
        {
          id: 2,
          title: 'A Comprehensive Guide To HTTP/2 Server Push',
          content:
            'No longer is HTTP/2 a feature we pine for. It has arrived, and with it comes server push!',
          link:
            'https://www.smashingmagazine.com/2017/04/guide-http2-server-push/'
        },
        {
          id: 3,
          title: 'So what’s this GraphQL thing I keep hearing about?',
          content:
            'Why now is the perfect time to learn what exactly this GraphQL thing you keep hearing about really is.',
          link:
            'https://medium.freecodecamp.com/so-whats-this-graphql-thing-i-keep-hearing-about-baf4d36c20cf'
        }
      ],
      postsMobile: [
        {
          id: 4,
          title: 'State of The Mobile Gap Between Native and Web',
          content:
            'Clearly PhoneGap, and Cordova are still required today in the mobile world, but when is it really needed? Did the web ever catch up?',
          link: 'https://remysharp.com/2016/05/28/state-of-the-gap'
        },
        {
          id: 5,
          title: 'Learning JavaScript Design Patterns',
          content:
            'Design patterns are reusable solutions to commonly occurring problems in software design.',
          link:
            'https://addyosmani.com/resources/essentialjsdesignpatterns/book/'
        },
        {
          id: 6,
          title: 'The Power of Custom Directives in Vue',
          content:
            'The beautiful thing about Vue is that it\'s incredibly feature-rich.',
          link: 'https://css-tricks.com/power-custom-directives-vue/'
        }
      ],
      posts: []
    }
  },
  methods: {
    loadPosts () {
      if (this.id === 'front-end') {
        this.posts = this.postsFrontEnd
      } else {
        this.posts = this.postsMobile
      }
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
