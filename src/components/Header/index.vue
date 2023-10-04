
<script setup>

</script>
<template>
    <nav class="navbar navbar-light bg-light">
        <div class="container">
            <RouterLink class="navbar-brand" to="/">
                <img src="@/assets/logo-poke-info.svg" alt="logo" width="30" height="30">
                
            </RouterLink>
            <div class="d-flex gap-2">
                <RouterLink class="btn btn-outline-primary" to="/">Home</RouterLink>
                <RouterLink class="btn btn-outline-primary" to="/pokemons">Pokemons</RouterLink>
                <RouterLink class="btn btn-outline-primary" to="/favorites">Favorites</RouterLink>
            </div>
        </div>
    </nav>
</template>

<style  scoped>
    .navbar {
        height: 60px;
    }
</style>