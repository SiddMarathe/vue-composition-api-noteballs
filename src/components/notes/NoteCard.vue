<template>
  <v-card
    class="mx-auto ma-3 d-flex flex-column"
    density="compact"
    max-width="90%"
    variant="elevated"
  >
    <v-card-text>
      {{ note.content }}
    </v-card-text>
    <v-spacer></v-spacer>
    <div class="align-self-end justify-end mr-1 v-card-subtitle mb-4">{{ charLength }}</div>

    <v-divider></v-divider>
    <v-card-actions style="display: flex; justify-content: space-between">
      <router-link class="v-btn" :to="`/notes/edit/${props.note.id}`"> Edit</router-link>
      <v-btn @click="modals.deleteNote = true"> Delete</v-btn>
    </v-card-actions>
    <v-dialog v-model="modals.deleteNote" width="auto">
      <modal-delete-note
        @close="modals.deleteNote = false"
        :note-id="props.note.id"
      ></modal-delete-note>
    </v-dialog>
  </v-card>
</template>

<script setup>
/*
imports
 */
import { computed, reactive } from 'vue'
import ModalDeleteNote from '@/components/notes/ModalDeleteNote.vue' /*


/*
props
 */

const props = defineProps({
  note: {
    type: Object,
    required: true
  }
})

const charLength = computed(() => {
  let length = props.note.content.length
  let des = length > 1 ? 'characters' : 'character'
  return `${length} ${des}`
})
/*
modals
 */
const modals = reactive({
  deleteNote: false
})
</script>
