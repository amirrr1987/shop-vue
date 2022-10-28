<template>
    <TheHeader />
    <TheMain />
    <TheFooter />
</template>
<script setup lang="ts">
import TheHeader from '@/layouts/TheHeader.vue';
import TheMain from '@/layouts/TheMain.vue';
import TheFooter from '@/layouts/TheFooter.vue';
</script>

<style>
#app{
    display: grid;
    height: 100vh;
    grid-template-rows: max-content 1fr min-content;
}
</style>