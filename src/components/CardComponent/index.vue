<script setup>

defineProps({
    name: {
        type: String
    },
    description: String,
    imgUrl: String,
    types: Array
})

const typesDictionary = {
    grass: 'success',
    poison: 'warning',
    fire: 'danger',
    water: 'primary',
    flying: 'secondary',
    bug: 'success',
    normal: 'dark'
}
</script>

<template>
    <div class="card" style="width: 18rem;">
        <div class="d-flex justify-content-center w-100 h-80 p-2" style="max-height: 200px;">
            <img :src="imgUrl" class="card-img-top w-100" alt="...">
        </div>
        <div class="card-body d-flex flex-column justify-content-end">
            <h5 class="card-title text-capitalize">{{ name }}</h5>
            <p class="card-text">{{ description }}</p>
            <div 
                class="d-flex gap-1"
            >
                <span v-for="(type, i) in types" :key="i" :class="`badge text-bg-${typesDictionary[type.type.name] ?? 'secondary'}`">{{ type.type.name }}</span>
            </div>
        </div>
    </div>
</template>