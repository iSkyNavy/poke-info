<template>
    <h1>My favotires Pokemons</h1>
    <div>
        <CardComponent
            v-for="(pokemon, i) in favorites" :key="i"
            :id="pokemon.detail.id"
            :name="pokemon.name"
            :imgUrl="pokemon.detail.sprites.other.dream_world.front_default"
            :description="`height: ${pokemon.detail.height}m   weight: ${pokemon.detail.weight}kg`"
            :types="pokemon.detail.types"
            class="col-md-2"
        > </CardComponent>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useFavoritesStore } from '../store/favorites';
import CardComponent from '../components/CardComponent/index.vue';

    const useFavorites = useFavoritesStore();
    const { favorites } = storeToRefs(useFavorites)
</script>