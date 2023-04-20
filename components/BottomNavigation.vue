<template>
  <v-layout class="bootom_navogation">
    <v-bottom-navigation active="true" color="indigo">
      <v-container>
        <v-row>
          <v-col>
            <v-btn
              color="deep-purple"
              variant="outlined"
              class="start_visa"
              @click="goToFlightoptions"
            >
              Start Visa Request
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <div class="d-flex justify-center"> 
            <v-btn>
              <img class="flag" src="/images/search.png" />
              <p>Home</p>
            </v-btn>
            <v-btn>
              <img class="flag" src="/images/my-request.png" />
              <p>My Request</p>
            </v-btn>
            <v-btn>
              <img class="flag" src="/images/my-requirements.png" />
              <p>View Requirements</p>
            </v-btn>
            <v-btn>
              <img class="flag" src="/images/show-more.png" />
              <p>More</p>
            </v-btn>
            </div>

          </v-col>
        </v-row>
      </v-container>
    </v-bottom-navigation>
  </v-layout>
</template>
<script setup>
import { inject, toRefs, reactive } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const goToFlightoptions = () => {
  router.push("/flightOptions");
};
</script>
