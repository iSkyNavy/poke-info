<script setup>
import { RouterLink } from 'vue-router';
import { useGetData } from '../composables/getData';

const { getData, data: pokemons } = useGetData();
getData("https://pokeapi.co/api/v2/pokemon");
</script>

<template>
    <div class="i-container py-4">
        <ul class="list-group pb-3">
            <li v-for="(pokemon, i) in pokemons?.results" :key="i" class="list-group-item">
                <RouterLink class="nav-link text-primary" :to="`pokemon/${pokemon?.name}`">{{ pokemon?.name }}</RouterLink>
            </li>
        </ul>
        <button class="btn btn-success" @click="() => getData(pokemons?.previous)" :disabled="pokemons?.previous === null">Previous</button>
        <button class="btn btn-primary ms-2" @click="() => getData(pokemons?.next)">Next</button>
    </div>

</template>