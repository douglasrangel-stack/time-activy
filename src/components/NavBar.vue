<template>
    <header>
        <div class="logo"><img src="../assets/logo-color.png" alt="logo"></div>
    </header>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: 'NavBar'
    });
</script>

<style scoped lang="scss">

header {
    padding: 1rem;
    background: #fafafa;
    width: 100%;
    height: 100vh;
    .logo {
        text-align: center;
        img {
            width: 12rem;
        }
    }
    
}

@media only screen and (max-width: 768px) {
    header {
        padding: 2.5rem;
        height: auto;
    }
}

</style>