<template>
  <v-card class="mx-auto bg-indigo-darken-4" max-width="90%" variant="elevated">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="notesStore.newNote"
            variant="solo"
            clear-icon="mdi-close-circle"
            :clearable="true"
            label="Add a new note."
            type="text"
            ref="textAreaRef"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <slot name="actions"></slot>
  </v-card>
</template>

<script setup>
/*
props
 */
import { useNoteStore } from '@/store/notesStore.js'
import { onMounted, ref } from 'vue'

const notesStore = useNoteStore()
const textAreaRef = ref(null)

onMounted(() => {
  notesStore.newNote = ''
})

const focusTextArea = () => {
  textAreaRef.value.focus()
}

defineExpose({
  focusTextArea
})
</script>
