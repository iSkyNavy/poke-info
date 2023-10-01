<script setup>
import Header from './components/Header/index.vue'
import Footer from './components/Footer/index.vue'
</script>

<template>
    <Header />
    <div class="container p-0">
      <RouterView />
    </div>
    <Footer />
</template>
