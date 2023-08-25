<template>
    <button class="button"  :disabled="disabled">
        <span class="icon">
            <i :class="icon"></i>
        </span>
        <span>{{ text }}</span>
    </button>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: 'ElapsedTime',
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            icon: {
                type: String,
                required: true
            },
            text: {
                type: String,
                required: true
            }
        },
    });
</script>