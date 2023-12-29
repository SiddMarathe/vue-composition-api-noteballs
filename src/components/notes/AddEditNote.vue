<template>
  <v-card :class="`mx-auto ${bgColor}`" max-width="90%" variant="elevated">
    <v-card-title v-if="label">{{ label }}</v-card-title>
    <v-container :fluid="true">
      <v-row>
        <v-col cols="12">
          <v-textarea
            v-model="notesStore.newNote"
            variant="solo"
            clear-icon="mdi-close-circle"
            :clearable="true"
            :label="placeHolder"
            type="text"
            ref="textAreaRef"
          ></v-textarea>
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

const props = defineProps({
  bgColor: {
    type: String,
    default: 'bg-indigo-darken-4'
  },
  label: {
    type: String,
    default: ''
  },
  placeHolder: {
    type: String,
    default: 'Type something...'
  }
})

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
