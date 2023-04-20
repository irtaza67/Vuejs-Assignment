<template>
  <app-header>
    <template v-if="route.path == '/'">
      <h3 class="text-white text-center py-1">Visa Requirements</h3>
    </template>
    <template v-if="route.path === '/flightOptions'">
      <h2 class="text-center py-1">
        Compare and select most suitable flight option
      </h2>
    </template>
  </app-header>
  <NuxtPage />
  <bottom-navigation v-if="route.path != '/flightOptions'" />
</template>
<script setup>
import AppHeader from "~/components/header.vue";
import BottomNavigation from "~/components/BottomNavigation.vue";
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>