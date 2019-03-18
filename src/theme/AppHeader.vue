<template>
  <nav class="navbar has-shadow">
    <div class="container">
      <router-link class="navbar-item" to="/" exact>
        <img src="http://bit.ly/vue-img" alt="Vue SPA">
      </router-link>
      <router-link class="navbar-item is-tab" :to="{ name: 'category', params: { id: 'front-end' } }">Front-End</router-link>
      <router-link class="navbar-item is-tab" :to="{ name: 'category', params: { id: 'mobile' } }">Mobile</router-link>
      <router-link class="navbar-item is-tab" to="/login">
        <span v-if="isAuthenticated">Logout</span>
        <span v-else>Login</span>
      </router-link>
    </div>
  </nav>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['isAuthenticated'])
  }
}
</script>
