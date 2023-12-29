<template>
  <v-container class="edit-view">
    <v-row class="mb-5">This is a row in a edit view {{ $route.params.id }} </v-row>
    <AddEditNote>
      <template #actions>
        <v-card-actions></v-card-actions>
      </template>
    </AddEditNote>
  </v-container>
</template>
<script setup>
import AddEditNote from '@/components/notes/AddEditNote.vue'
</script>
