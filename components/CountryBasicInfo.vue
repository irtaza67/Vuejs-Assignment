<template>
  <div class="header_wrapper">
    <b-container class="basic_info">
        <v-row
        align="start"
        no-gutters
      >
      <v-col md="1" cols="3">
        <v-sheet class="pa-2 ma-2">
          <img class="flag basic_info" :src="item.flagUrl">
        </v-sheet>
      </v-col>
            <v-col class="align-self-center">
        <v-sheet class="pa-2 ma-2">
          <h3>{{item.country}}</h3>
        </v-sheet>
      </v-col>
        </v-row>
                <v-row
        align="start"
        no-gutters
      >
      <v-col class="">
        <div class="d-flex">
        <img class="" src="/images/info.png">
       <p class="color_pink">{{item.basicInfo}}</p>
        </div>
      </v-col>
        </v-row>
    </b-container>
  </div>
</template>
<script setup>
import { inject, toRefs,reactive} from "vue";
const props = defineProps(['item'])
let {item} = toRefs(props)

</script>
