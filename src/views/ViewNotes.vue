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
    <NoteCard
      v-for="note in notes"
      :key="note.id"
      :note="note"
      @delete-clicked="deleteNote"
    ></NoteCard>
  </div>
</template>

<script lang="js" setup>
import { ref } from 'vue'
import NoteCard from '@/components/notes/NoteCard.vue'

const newNote = ref('')
const newNoteRef = ref(null)
const notes = ref([
  {
    id: 'id1',
    content:
      ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam dicta dignissimos\n' +
      '        dolore libero molestias non odit officia pariatur perferendis, porro possimus praesentium\n' +
      '        reiciendis rerum, saepe soluta suscipit tempora temporibus.'
  },
  {
    id: 'id2',
    content:
      ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam dicta dignissimos\n' +
      '        dolore libero molestias non odit officia pariatur perferendis, porro possimus praesentium\n' +
      '        reiciendis rerum, saepe soluta suscipit tempora temporibus.'
  },
  {
    id: 'id3',
    content: 'note'
  }
])

const addNote = () => {
  let time = new Date().getTime()
  let note = {
    id: time.toString(),
    content: newNote.value
  }
  notes.value.unshift(note)
  newNote.value = ''
  newNoteRef.value.focus()
}

const deleteNote = (id) => {
  notes.value = notes.value.filter((note) => {
    return note.id !== id
  })
}
</script>

<style scoped></style>
