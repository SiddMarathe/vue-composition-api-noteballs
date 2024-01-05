<template>
  <v-dialog activator="parent" width="auto">
    <v-card>
      <v-card-title>Delete Note?</v-card-title>
      <v-card-text> Are you sure you wan to delete this note? </v-card-text>
      <pre>{{ modelValue }}</pre>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn variant="flat" color="error" @click="handleDelete">Delete</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
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
  },
  modelValue: {
    type: Boolean,
    required: true
  }
})
const emits = defineEmits(['modelValue:update'])
const handleDelete = () => {
  dialog.value = false
  notesStore.deleteNote(props.noteId)
  emits('modelValue:update', false)
}
</script>

<style scoped></style>
