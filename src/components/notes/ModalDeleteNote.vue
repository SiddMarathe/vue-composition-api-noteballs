<template>
  <v-card>
    <v-card-title>Delete Note?</v-card-title>
    <v-card-text> Are you sure you wan to delete this note? </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn variant="flat" color="error" @click="handleDelete">Delete</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script setup>
import { ref } from 'vue'
import { useNoteStore } from '@/store/notesStore.js'

const dialog = ref(true)
const notesStore = useNoteStore()

const props = defineProps({
  noteId: {
    type: String,
    required: true
  }
})
const emits = defineEmits(['close'])
const handleDelete = () => {
  dialog.value = false
  notesStore.deleteNote(props.noteId)
  emits('close')
}
</script>

<style scoped></style>
