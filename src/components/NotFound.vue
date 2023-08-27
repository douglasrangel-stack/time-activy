<template>
    <div class="box has-text-weight-bold">
        <div class="columns">
            <div class="column">
                {{ text }}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'NotFound',
        props: {
            text: {
                type: String,
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