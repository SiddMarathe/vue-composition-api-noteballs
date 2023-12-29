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
      <v-btn> Edit</v-btn>
      <v-btn @click="handleDelete"> Delete</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { computed } from 'vue'
/*
props
 */

const props = defineProps({
  note: {
    type: Object,
    required: true
  }
})

/*
emits
 */
const emit = defineEmits(['deleteClicked'])

const handleDelete = () => {
  emit('deleteClicked', props.note.id)
}

const charLength = computed(() => {
  let length = props.note.content.length
  let des = length > 1 ? 'characters' : 'character'
  return `${length} ${des}`
})
</script>
