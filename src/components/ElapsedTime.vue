<template>
    <div>
        <section>
            <strong>{{timeCalculate}}</strong>
        </section>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: 'ElapsedTime',
        props: {
            timeSecond: {
                type: Number,
                default: 0
            }
        },
        computed:{
            timeCalculate() : string {
                return new Date(this.timeSecond * 1000).toISOString().substr(11,8)
            }
        },
    });
</script>