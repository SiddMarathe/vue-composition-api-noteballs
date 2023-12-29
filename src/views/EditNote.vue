<template>
  <v-container class="edit-view">
    <AddEditNote bg-color="bg-green-accent-4" place-holder="Note.." label="Edit Note">
      <template #actions>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn :disabled="!noteStore.newNote" class="mb-2 ml-1" color="black" variant="elevated">
            Save
          </v-btn>
          <v-btn text class="mb-2 ml-1 bg-red" @click="$router.back()" variant="elevated">
            Cancel&nbsp;
            <v-icon>mdi-cancel</v-icon>
          </v-btn>
        </v-card-actions>
      </template>
    </AddEditNote>
  </v-container>
</template>
<script setup>
import AddEditNote from '@/components/notes/AddEditNote.vue'
import { useNoteStore } from '@/store/notesStore.js'

const noteStore = useNoteStore()
</script>
