<template>
  <v-card>
    <v-card-title>Delete Note?</v-card-title>
    <v-card-text> Are you sure you wan to delete this note?</v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn variant="flat" color="red lighten-1" @click="handleDelete">Delete</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
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

const keyboardControls = (e) => {
  if (e.key === 'Enter') handleDelete()
}

onMounted(() => {
  document.addEventListener('keyup', keyboardControls)
})

onUnmounted(() => {
  document.removeEventListener('keyup', keyboardControls)
  //removing event listener is mandatory as it may persist even after the component is removed from the DOM
})
</script>

<style scoped></style>
