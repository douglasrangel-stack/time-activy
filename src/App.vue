<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <NavBar/>
    </div>
    <div class="column is-three-quarter">
      <router-view></router-view>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from './components/NavBar.vue'

export default defineComponent({
  name: 'App',
  components: {
    NavBar,
  },
});
</script>

<style>
  img {
    max-width: 100%;
  }
  .space {
      padding: 1rem;
  }
</style>
