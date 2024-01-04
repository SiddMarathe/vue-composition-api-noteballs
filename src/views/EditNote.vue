<template>
  <v-container class="edit-view">
    <AddEditNote
      bg-color="bg-green-accent-4"
      place-holder="Note.."
      label="Edit Note"
      v-model="noteContent"
      :note-text="noteContent"
    >
      <template #actions>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            :disabled="!noteContent"
            @click="handleSaveClicked()"
            class="mb-2 ml-1"
            color="white"
            variant="elevated"
          >
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
import { useRoute } from 'vue-router'
import router from '@/router/index.js'
import { ref } from 'vue'
import { useWatchCharacters } from '@/use/useWatchCharacters.js'

const storeNotes = useNoteStore()

const route = useRoute()
const noteContent = ref('')
noteContent.value = storeNotes.getNoteContent(route.params.id)

function handleSaveClicked() {
  storeNotes.updateNote(route.params.id, noteContent.value)
  router.back()
}

useWatchCharacters(noteContent, 100)
</script>
