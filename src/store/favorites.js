import { defineStore } from "pinia";
import { ref } from "vue";

export const useFavoritesStore = defineStore('favorites', () => {
    const favorites = ref([]);

    const addFavorites = (data) => {
        favorites.value.push(data);
        console.log(favorites.value, '***')
    }

    return {
        favorites,
        addFavorites
    }
});