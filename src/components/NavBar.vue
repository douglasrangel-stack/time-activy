<template>
    <header>
        <div class="logo"><img src="../assets/logo-color.png" alt="logo"></div>
        <nav class="itens-link mt-5">
            <ul>
                <li>
                    <router-link to="/" class="link">
                        <i class="fas fa-tasks"></i>
                        Atividades
                    </router-link>
                </li>
                <li>
                    <router-link to="/projetos" class="link">
                        <i class="fas fa-project-diagram"></i>
                        Projetos
                    </router-link>
                </li>
            </ul>
        </nav>
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

.itens-link li {
    margin: 8px 0;
}
.link {
    color: #222;
    font-weight: 600;
    transition: all ease-in-out 0.3s;
    i {
        color: #f15727;
    }
}
.link:hover {
    color: #27d9df;
}
.link.router-link-active {
    color: #27d9df;
}

@media only screen and (max-width: 768px) {
    header {
        padding: 2.5rem;
        height: auto;
    }
}

</style>