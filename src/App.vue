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
import { useNoteStore } from '@/store/notesStore.js'
import { onMounted } from 'vue'

const noteStore = useNoteStore()
onMounted(() => {
  noteStore.getNotes()
})
</script>
