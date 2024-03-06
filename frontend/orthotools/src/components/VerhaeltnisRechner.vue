<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <v-card
        elevation="3"
        variant="elevated"
        class="bg-white mx-auto pa-3 mb-3"
        max-width="800"
      >
        <v-card-title>Verhältnisrechner</v-card-title>

        <v-container>
          <v-row align="center" justify="center">
            <v-col cols="8" sm="4">
              <v-text-field
                label="Gesamtmenge"
                variant="outlined"
                type="number"
                v-model="gesamtmenge"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row align="center" justify="center">
            <v-img height="300" src="@/assets/waage.svg" />
          </v-row>
          <v-row align="center" justify="space-between">
            <v-col cols="4" sm="2">
              <v-text-field
                label="Verhältnis A"
                variant="outlined"
                type="number"
                v-model="verhaeltnisA"
              ></v-text-field>
            </v-col>
            <v-col cols="4" sm="2">
              <v-text-field
                label="Verhältnis B"
                variant="outlined"
                type="number"
                v-model="verhaeltnisB"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row align="center" justify="space-between">
            <p>Menge A: {{ ergebnisA }}</p>
            <p>Menge B: {{ ergebnisB }}</p>
          </v-row>
        </v-container>
      </v-card>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
import { Ref } from "vue";
import { computed } from "vue";
import { ref } from "vue";

const gesamtmenge = ref(1000);
const verhaeltnisA = ref(1);
const verhaeltnisB = ref(1);

const ergebnisA = computed(() => {
  const elementSize = Number(verhaeltnisA.value) + Number(verhaeltnisB.value);
  console.log(elementSize);
  return (
    (Number(gesamtmenge.value) * Number(verhaeltnisA.value)) /
    elementSize
  ).toFixed(2);
});

const ergebnisB = computed(() => {
  const elementSize = Number(verhaeltnisA.value) + Number(verhaeltnisB.value);
  console.log(elementSize);
  return (
    (Number(gesamtmenge.value) * Number(verhaeltnisB.value)) /
    elementSize
  ).toFixed(2);
});

//
</script>
