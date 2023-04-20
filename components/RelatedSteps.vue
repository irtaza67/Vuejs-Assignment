<template>
  <div class="required_document_wrapper">
    <ul>
      <li v-for="(item, i) in item.headings" class="mb-8">
<div class="d-flex align-center pl-2  " >
  <img :src="item.logoImage" v-if="item.logoImage">
  <img src="images/standard.png" v-else>
  <h3 class="pl-1">{{item.title}}</h3>
</div>
<template v-if='i == 0'>
    <v-expansion-panels variant="accordion" >
      <v-expansion-panel
        v-for="i in item.subHeading"
        :key="i"
        :title="i.title"
        :text="i.Text"
      ></v-expansion-panel>
    </v-expansion-panels>
</template>
<template v-else>
<div class="">
  <ul>
    <li><p class="pl-2">{{item.Text}}</p></li>
  </ul>
</div>
<div class="d-flex align-center mt-3" v-if="item.warning" >
  <img src="images/warning.png" />
<p class="pl-1">{{item.warning}}</p>
</div>
</template>

      </li>
    </ul>
    
  <div>

  </div>
  </div>
</template>
<script setup>
import { inject, toRefs,reactive} from "vue";

const props = defineProps(['item'])
let {item} = toRefs(props)


</script>
