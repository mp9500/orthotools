<template>
  <v-app-bar
    :elevation="2"
    image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  >
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>Application Bar</v-app-bar-title>
  </v-app-bar>
  <v-navigation-drawer
    app
    v-model="drawer"
    absolute
    clipped
    image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
    theme="dark"
  >
    <v-list nav>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        :to="item.url"
        :prepend-icon="item.icon"
        :title="item.title"
        :value="item.title"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script setup lang="ts">
import { ref } from "vue";

const drawer = ref(false);
const items = [
  { title: "Startseite", icon: "mdi-home", url: "/" },
  {
    title: "Verhältnisrechner",
    icon: "mdi-scale-balance",
    url: "/verhaeltnisrechner",
  },
];
</script>
