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
  ></v-text-field>
</template>
<script setup>
import { useNoteStore } from '@/store/notesStore.js'

const store = useNoteStore()
</script>
<style scoped></style>
