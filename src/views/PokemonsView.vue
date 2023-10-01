<script setup>
import { RouterLink } from 'vue-router';
import { useGetData } from '../composables/getData';
import CardComponent from '../components/CardComponent/index.vue';

const { getData, data: pokemons } = useGetData();
getData("https://pokeapi.co/api/v2/pokemon", true);
</script>

<template>
    <div class="container p-0 py-3">
        <div class="pb-3">
            <button class="btn btn-success" @click="() => getData(pokemons?.previous, true)" :disabled="pokemons?.previous === null">Previous</button>
            <button class="btn btn-primary ms-2" @click="() => getData(pokemons?.next, true)">Next</button>
        </div>
        <div class="container d-flex flex-wrap justify-content-center justify-content-md-between gap-3 p-0 ">
            <CardComponent
                v-for="(pokemon, i) in pokemons?.results" :key="i"
                :name="pokemon.name"
                :imgUrl="pokemon.detail.sprites.other.dream_world.front_default"
                :description="`height: ${pokemon.detail.height}m   weight: ${pokemon.detail.weight}kg`"
                :types="pokemon.detail.types"
                class="col-md-2"
            >
            </CardComponent>
        </div>
    </div>

</template>