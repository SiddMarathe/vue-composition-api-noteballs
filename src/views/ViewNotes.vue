<template>
  <div class="notes-view">
    <AddEditNote
      ref="addEditNoteRef"
      place-holder="Type note.."
      label="Add Note"
      v-model="newNote"
      note-text=""
    >
      <template #actions>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            :disabled="!newNote"
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
    <v-container v-if="!notesStore.notes.length" class="text-center mt-10 v-card-subtitle">
      No notes here yet...
    </v-container>
  </div>
</template>

<script lang="js" setup>
import { useNoteStore } from '@/store/notesStore.js'
import AddEditNote from '@/components/notes/AddEditNote.vue'
import NoteCard from '@/components/notes/NoteCard.vue'
import { onMounted, ref } from 'vue'
import { useWatchCharacters } from '@/use/useWatchCharacters.js' // const newNote = ref('')

const notesStore = useNoteStore()
const addEditNoteRef = ref(null)
const newNote = ref('')

const addNote = () => {
  notesStore.addNote(newNote.value)
  newNote.value = ''
  addEditNoteRef.value.focusTextArea()
}

useWatchCharacters(newNote, 100)
onMounted(() => {
  notesStore.getNotes()
})
</script>

<style scoped></style>
