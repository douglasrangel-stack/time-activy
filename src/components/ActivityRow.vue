<template>
    <div class="box has-text-weight-bold">
        <div class="columns">
            <div class="column is-7">
                {{ activity.descriptionActivity }}
            </div>
            <div class="column">
                <ElapsedTime :timeSecond="activity.timeActivity" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, PropType } from 'vue';
    import ElapsedTime from './ElapsedTime.vue';
    import IActivity from '@/interfaces/IActivity';

    export default defineComponent({
        name: 'ActivityRow',
        components: {
            ElapsedTime
        },
        props: {
            activity: {
                type: Object as PropType<IActivity>,
                required: true
            }
        },
    });
</script>

<style scoped>
    .box {
        background: #fff4cb;
    }
</style>