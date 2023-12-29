<template>
  <div class="notes-view">
    <v-card class="mx-auto bg-indigo-darken-4" max-width="90%" variant="elevated">
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="newNote"
              variant="solo"
              clear-icon="mdi-close-circle"
              :clearable="true"
              label="Add a new note."
              type="text"
              ref="newNoteRef"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn :disabled="!newNote" class="mb-2 ml-1" @click="addNote" variant="outlined">
          Add
        </v-btn>
      </v-card-actions>
    </v-card>
    <NoteCard v-for="note in notesStore.notes" :key="note.id" :note="note"></NoteCard>
  </div>
</template>

<script lang="js" setup>
import { ref } from 'vue'
import NoteCard from '@/components/notes/NoteCard.vue'
import { useNoteStore } from '@/store/notesStore.js'

const newNote = ref('')
const newNoteRef = ref(null)
const notesStore = useNoteStore()

const addNote = () => {
  notesStore.addNote(newNote.value)
  newNote.value = ''
  newNoteRef.value.focus()
}
</script>

<style scoped></style>
