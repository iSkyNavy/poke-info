<script setup>

import axios from 'axios';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useGetData } from '../composables/getData';

const route = useRoute();
const router = useRouter();

const { getData, data: pokemon, isLoading, isError } = useGetData();
getData('https://pokeapi.co/api/v2/pokemon/' + route.params.name);

</script>


<template>
    <div class="container">
        <div v-if="!isLoading && !isError">
            <h2 v-if="pokemon">Mi name is: {{ $route.params.name }}</h2>
            <div class="card">
                <img class="card-img-top w-50 h-50" :src="pokemon.sprites.back_default" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">{{ $route.params.name }}</h5>
                </div>
            </div>
        </div>
        <div v-else-if="isError">
            <div class="alert alert-danger" role="alert">
                There are server error
            </div>
        </div>
        <button class="btn btn-primary mt-3" @click="() => router.back()">Back</button>
    </div>
</template>