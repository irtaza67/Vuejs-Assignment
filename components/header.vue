<template>
  <div class="header_wrapper py-3" :class="{'theme-bg':route.path === '/'}">
    <slot></slot>
  </div>
</template>
<script setup>
import { inject, toRefs,reactive} from "vue";
import { useRoute, } from 'vue-router'
  const route = useRoute()

</script>
