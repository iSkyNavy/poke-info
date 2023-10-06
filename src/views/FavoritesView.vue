<template>
    <h1>My favotires Pokemons</h1>
    <div v-if="favorites.length > 0" class="d-flex flex-wrap justify-content-center justify-content-md-start gap-3 p-0 py-3">
        <CardComponent
            v-for="(pokemon, i) in favorites" :key="i"
            :id="pokemon.detail.id"
            :name="pokemon.name"
            :imgUrl="pokemon.detail.sprites.other.dream_world.front_default"
            :description="`height: ${pokemon.detail.height}m   weight: ${pokemon.detail.weight}kg`"
            :types="pokemon.detail.types"
            class="col-md-2"
        >
            <template #favorite-img>
                <figure class="figure-img" @click="removeFavorite(pokemon.detail.id)">
                    <img :src="heartURL" alt="favorite-img"/>
                </figure>
            </template>
        </CardComponent>
    </div>
    <h2 v-else>There aren't favorites pokemons <RouterLink class="btn btn-sm btn-primary" to="/pokemons">Go Pokemons</RouterLink></h2>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useFavoritesStore } from '../store/favorites';
import CardComponent from '../components/CardComponent/index.vue';
import heartURL from "@/assets/Icons/heart.svg";

    const useFavorites = useFavoritesStore();
    const { favorites } = storeToRefs(useFavorites);
    const { removeFavorite } = useFavorites;

</script>

<style scoped>
.figure-img {
    width: 30px;
    height: 30px;
    margin: 0;
    position: absolute;
    right: 14px;
    bottom: 12px;
    cursor: pointer;
}

.figure-img>img {
    width: 100%;
    height: 100%;
}
</style>