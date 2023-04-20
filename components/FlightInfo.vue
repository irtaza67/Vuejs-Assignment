<template>
  <div class="flight_card px-2">
    <div class="name_time">
      <h3>Bilbao-Madrid</h3>
      <div class="d-flex">
      <p>3h 15min flight</p>
      <ul class="ml-2">
        <li class="px-1">1 stop</li>
        <li class="px-1">Economy</li>
      </ul>
      </div>

    </div>
    <b-container>
      <v-row>
        <v-col>
          <div class="flight_info">
            <h3 class="airline_name pl-8">Arabic airlines,SU1456</h3>
            <h4 class="time">2h 15m</h4>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3">
          <h3>22:00</h3>
          <div class="devider"></div>
        </v-col>
        <v-col>
          <h3>BIO,Bilbao</h3>
          <h4>26 Dec, 2022, Mon</h4>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3">
          <h3>00:15</h3>
        </v-col>
        <v-col>
          <h3>GBN,GIBAJA</h3>
          <h4>27 Dec, 2022, Mon</h4>
        </v-col>
      </v-row>
      <v-row class="justify-center">
        <b-col>
          <v-btn
            :loading="loading"
            class="flex-grow-1 flight_info_btn"
            height="48"
            variant="tonal"
          >
            <img  src="/images/refresh.png"/>Layover 2 hours
          </v-btn>
        </b-col>
      </v-row>
      <v-row>
        <v-col>
          <div class="flight_info">
            <h3 class="airline_name pl-8 second_flight">Arabic airlines,SU1456</h3>
            <h4 class="time">2h 15m</h4>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3" :key="n">
          <h3>22:00</h3>
          <div class="devider"></div>
        </v-col>
        <v-col :key="n">
          <h3>BIO,Bilbao</h3>
          <h4>26 Dec, 2022, Mon</h4>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3" :key="n">
          <h3>00:15</h3>
        </v-col>
        <v-col>
          <h3>GBN,GIBAJA</h3>
          <h4>27 Dec, 2022, Mon</h4>
        </v-col>
      </v-row>
    </b-container>
  </div>
</template>
<script setup>
import { inject, toRefs,reactive} from "vue";
</script>
