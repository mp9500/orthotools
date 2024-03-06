<template>
  <v-app>
    <HeaderSidebar />
    <router-view />
  </v-app>
</template>

<script lang="ts" setup>
import HeaderSidebar from "./components/HeaderSidebar.vue";
</script>
