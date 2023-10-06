import { defineStore } from "pinia";
import { ref } from "vue";
import { useLocalStorage } from "../composables/localStore";

export const useFavoritesStore = defineStore('favorites', () => {
    const keyName = 'favorites-pokemons';
    const { getData, setData } = useLocalStorage(keyName)
    const favorites = ref(getData(keyName) || []);

    const addFavorites = (data) => {
        favorites.value.push(data);
        setData(favorites.value);
    }

    const validateExistFavorite = (id) => favorites.value.some(favorite => favorite.detail.id === id);

    const removeFavorite = (id) => {
        favorites.value = favorites.value.filter(favorite => favorite.detail.id != id)
        setData(favorites.value);
    }

    return {
        favorites,
        addFavorites,
        removeFavorite,
        validateExistFavorite
    }
});