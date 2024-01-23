<template>
  <v-app class="rounded rounded-md">
    <nav-bar></nav-bar>
    <v-container>
      <router-view></router-view>
    </v-container>
  </v-app>
</template>
<script setup>
/*
imports
 */
import NavBar from '@/components/layout/NavBar.vue'
import { onMounted } from 'vue'
import { useAuthStore } from '@/store/authStore.js'

const authStore = useAuthStore()
onMounted(() => {
  authStore.init()
})
</script>
