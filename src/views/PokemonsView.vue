<script setup>
import { useGetData } from '../composables/getData';
import CardComponent from '../components/CardComponent/index.vue';
import heartWhiteURL from "@/assets/Icons/heart-white.svg";
import heartURL from "@/assets/Icons/heart.svg";
import { useFavoritesStore } from '../store/favorites';
import { storeToRefs } from 'pinia';

const { getData, data: pokemons } = useGetData();
getData("https://pokeapi.co/api/v2/pokemon", true);

const useFavorites = useFavoritesStore();
storeToRefs(useFavorites);
const { addFavorites, validateExistFavorite, removeFavorite } = useFavorites

const handleHeart = (data) => {
    if (validateExistFavorite(data.detail.id)) return removeFavorite(data.detail.id);
    addFavorites(data)
}

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
                :id="pokemon.detail.id"
                :name=" pokemon.name"
                :imgUrl="pokemon.detail.sprites.other.dream_world.front_default"
                :description="`height: ${pokemon.detail.height}m   weight: ${pokemon.detail.weight}kg`"
                :types="pokemon.detail.types"
                class="col-md-2"
            >
                <template #favorite-img>
                    <figure class="figure-img" @click="handleHeart(pokemon)">
                        <img :src="`${validateExistFavorite(pokemon.detail.id) ? heartURL : heartWhiteURL}`" alt="favorite-img"/>
                    </figure>
                </template>
            </CardComponent>
        </div>
    </div>
</template>

<style scoped>
    .figure-img{
        width: 30px;
        height: 30px;
        margin: 0;
        position: absolute;
        right: 14px;
        bottom: 12px;
        cursor: pointer;
    }

    .figure-img > img {
        width: 100%;
        height: 100%;
    }
</style>