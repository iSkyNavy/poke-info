<script setup>
import Header from './components/Header/index.vue'
import Footer from './components/Footer/index.vue'
</script>

<template>
    <Header />
    <div class="container">
      <RouterView />
    </div>
    <Footer />
</template>
