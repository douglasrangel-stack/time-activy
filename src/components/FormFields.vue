<template>
    <div class="space">
        <div class="box">
            <div class="columns">
                <div class="column is-8" role="form" arial-label="Formulário para criação de uma nova tarefa">
                    <input 
                        type="text" 
                        class="input" 
                        placeholder="Qual tarefa você deseja iniciar?"
                        v-model="inputActivity"
                    >
                </div>
                <div class="column">
                    <div class="is-flex is-align-items-center is-justify-content-space-between">
                        <ElapsedTime :timeSecond="timeSecond" />
                        <Button icon="fas fa-play" text="play" @click="initialTime" :disabled="!isActivy" />
                        <Button icon="fas fa-stop" text="stop" @click="finalizeTime" :disabled="isActivy" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import ElapsedTime from './ElapsedTime.vue';
    import Button from './Button.vue';

    export default defineComponent({
        name: 'FormFields',
        emits: ['save'],
        components: {
            ElapsedTime,
            Button
        },
        data() {
            return {
                timeSecond: 0,
                time: 0,
                isActivy: true,
                inputActivity: '',
            }
        },
        methods: {
            initialTime() {
                this.time = setInterval(()=>{
                    this.timeSecond += 1;
                    this.isActivy = false;
                }, 1000);
            },
            finalizeTime() {
                clearInterval(this.time);
                this.isActivy = true;
                this.finalizeActivy(this.timeSecond);
                this.timeSecond = 0;
            },
            finalizeActivy(time: number) :void {
                this.$emit('save', {
                    timeActivity: time,
                    descriptionActivity: this.inputActivity
                })
                this.inputActivity = '';
            }
        }
    });
</script>

<style scoped>
    .space {
        padding: 1rem;
    }
</style>