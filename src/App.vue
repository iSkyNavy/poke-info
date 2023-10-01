<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
    <nav class="navbar navbar-light bg-light px-3">
      <div class="container">
        <RouterLink class="navbar-brand" to="/">
          <img src="@/assets/logo.svg" alt="logo" width="30" height="24">
          PokeInfo
        </RouterLink>
        <div>
          <RouterLink class="btn btn-outline-primary mx-2" to="/">Home</RouterLink>
          <RouterLink class="btn btn-outline-primary" to="/pokemons">Pokemons</RouterLink>
        </div>
      </div>
    </nav>
    <div class="container">
      <RouterView />
    </div>
</template>
