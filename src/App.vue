<template>
  <v-app class="rounded rounded-md">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </v-app>
</template>
<script setup>
/*
imports
 */
import NavBar from '@/components/layout/NavBar.vue'
</script>
