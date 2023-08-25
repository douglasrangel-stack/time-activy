<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <SideBar/>
    </div>
    <div class="column is-three-quarter">
      <FormFields/>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideBar from './components/SideBar.vue' ;
import FormFields from './components/FormFields.vue'

export default defineComponent({
  name: 'App',
  components: {
    SideBar,
    FormFields
  }
});
</script>

<style>
  img {
    max-width: 100%;
  }
</style>
