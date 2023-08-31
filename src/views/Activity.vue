<template>
    <FormFields @save="saveActivity"/>
    <div class="space">
        <div class="lista">
        <NotFoundVue v-if="activities.length === 0" text="Nenhuma atividade cadastrada!" />
        <ActivityRow v-for="(activity, index) in activities" :key="index" :activity="activity"/>
        </div>
    </div>
</template>
  
<script lang="ts">
  import { defineComponent } from 'vue';
  import FormFields from '../components/FormFields.vue'
  import ActivityRow from '../components/ActivityRow.vue';
  import IActivity from '../interfaces/IActivity'
  import NotFoundVue from '../components/NotFound.vue';
  
  export default defineComponent({
    name: 'Activity',
    components: {
      FormFields,
      ActivityRow,
      NotFoundVue
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
  