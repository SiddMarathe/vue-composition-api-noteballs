<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">Stat</th>
        <th class="text-left">Value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Number of Notes</td>
        <td>{{ store.totalNotesCount }}</td>
      </tr>
      <tr>
        <td>Total number of Character(of all notes)</td>
        <td>{{ store.totalChars }}</td>
      </tr>
    </tbody>
  </v-table>
  <v-text-field
    label="Do you love note balls?"
    variant="solo"
    :autofocus="true"
    type="text"
    v-model="comment"
  ></v-text-field>
</template>
<script setup>
import { useNoteStore } from '@/store/notesStore.js'
import { useWatchCharacters } from '@/use/useWatchCharacters.js'
import { ref } from 'vue'

const store = useNoteStore()
const comment = ref('')
useWatchCharacters(comment)
</script>
<style scoped></style>
