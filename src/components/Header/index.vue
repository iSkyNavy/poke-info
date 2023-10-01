
<script setup>

</script>
<template>
    <nav class="navbar navbar-light bg-light px-3">
        <div class="container">
        <RouterLink class="navbar-brand" to="/">
            <img src="@/assets/logo-poke-info.svg" alt="logo" width="30" height="30">
            
        </RouterLink>
        <div>
            <RouterLink class="btn btn-outline-primary mx-2" to="/">Home</RouterLink>
            <RouterLink class="btn btn-outline-primary" to="/pokemons">Pokemons</RouterLink>
        </div>
        </div>
    </nav>
</template>

<style  scoped>
    .navbar {
        height: 60px;
    }
</style>