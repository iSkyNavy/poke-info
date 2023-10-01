<script setup>
</script>

<template>
  <main class="container d-flex flex-column justify-content-center gap-2">
    <h1 class="h1 text-center font-weight-bold display-4">Poke Info</h1>
    <div class="d-flex justify-content-center">
      <figure class="figure-left">
          <img src="@/assets/pokemons/charmander.svg" alt="charmander">
        </figure>
      <figure class="figure-principal">
        <img src="@/assets/pokemons/pikachu.svg" alt="pikachu">
      </figure>
      <figure class="figure-right">
          <img src="@/assets/pokemons/squirtle.svg" alt="squirtle">
        </figure>
    </div>
    <RouterLink type="button" class=" btn-go btn btn-md btn-primary" to="/pokemons">Go Pokemons</RouterLink>
  </main>
</template>

<style scoped>
  main {
    height: calc(100vh - 100px);
  }
  figure,img {
    height: 100%;
    width: 100%;
  }
  figure {
    z-index: 1;
  }
  .figure-principal {
    z-index: 2;
  }
  .figure-left {
      transform: translateX(50%);
  }
  .figure-right {
    transform: translateX(-50%);
  }
  .btn-go {
    width: max-content;
    margin: 0 auto;
  }
  @media screen and (min-width: 964px) {
    figure {
      max-height: 280px;
    }
    .figure-left {
      transform: translateX(220px);
    }
    .figure-right {
      transform: translateX(-180px);
    }
  }

  @media screen and (min-width: 1280px) {
    figure {
      max-height: 340px;
    }
  }
  @media screen and (min-width: 1400px) {
    .figure-left {
      transform: translateX(280px);
    }
    .figure-right {
      transform: translateX(-240px);
    }
  }

</style>
