<template>
  <div class="notes-view">
    <AddEditNote ref="addEditNoteRef" place-holder="Type note.." label="Add Note">
      <template #actions>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            :disabled="!notesStore.newNote"
            class="mb-2 mr-3 text-black"
            @click="addNote"
            variant="elevated"
          >
            Add
          </v-btn>
        </v-card-actions>
      </template>
    </AddEditNote>
    <NoteCard v-for="note in notesStore.notes" :key="note.id" :note="note"></NoteCard>
  </div>
</template>

<script lang="js" setup>
import { useNoteStore } from '@/store/notesStore.js'
import AddEditNote from '@/components/notes/AddEditNote.vue'
import NoteCard from '@/components/notes/NoteCard.vue'
import { ref } from 'vue' // const newNote = ref('')

const notesStore = useNoteStore()
const addEditNoteRef = ref(null)

const addNote = () => {
  notesStore.addNote(notesStore.newNote)
  notesStore.newNote = ''
  addEditNoteRef.value.focusTextArea()
}
</script>

<style scoped></style>
