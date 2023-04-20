<template>
  <v-card>
    <v-toolbar color="light">
      <template v-slot:extension>
        <v-tabs
          v-model="tab"
          align-tabs="title"
        >
          <v-tab
            v-for="item in items"
            :key="item"
            :value="item" 
          >
            <img class="flag" :src="item.flagUrl" />
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>
    <v-window v-model="tab">
      <v-window-item
        v-for="item in items"
        :key="item.country"
        :value="item"
        :transition="false"
      >
        <v-card flat>
          <country-basic-info :item="item" class="mb-8" />
          <related-steps :item="item" />
        </v-card>
      </v-window-item>
    </v-window>
  </v-card>
</template>
<script setup>
import { ref} from 'vue'
import RelatedSteps from '~/components/RelatedSteps.vue'
import {data} from '~/data.js'

let dialog = ref(false)
const tab = ref(null)
const text = ref('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.')
const items = reactive(data)
</script>
