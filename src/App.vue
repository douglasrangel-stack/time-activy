<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <NavBar/>
    </div>
    <div class="column is-three-quarter">
      <FormFields @save="saveActivity"/>
      <div class="space">
        <div class="lista">
          <ActivityRow v-for="(activity, index) in activities" :key="index" :activity="activity"/>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from './components/NavBar.vue'
import FormFields from './components/FormFields.vue'
import ActivityRow from './components/ActivityRow.vue';
import IActivity from './interfaces/IActivity'

export default defineComponent({
  name: 'App',
  components: {
    NavBar,
    FormFields,
    ActivityRow
  },
  data() {
    return {
      activities: [] as IActivity[]
    }
  },
  methods: {
    saveActivity( activity: IActivity) {
      this.activities.push(activity);
      this.activities.reverse();
    }
  }
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
