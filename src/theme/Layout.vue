<template>
  <div>
    <app-header></app-header>
    <section class='main-section section'>
      <div class="container content">
        <transition name="fade">
          <router-view></router-view>
        </transition>
      </div>
    </section>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './AppHeader.vue'
import AppFooter from './AppFooter.vue'

export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style lang='scss'>
$primary: #287ab1;
@import '~bulma';

.columns {
  flex-wrap: wrap;
}
</style>
