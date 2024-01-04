<template>
  <v-card :class="`mx-auto ${bgColor}`" max-width="90%" variant="elevated">
    <v-card-title v-if="label">{{ label }} </v-card-title>
    <v-container :fluid="true">
      <v-row>
        <v-col cols="12">
          <v-textarea
            v-model="modelValue"
            variant="solo"
            clear-icon="mdi-close-circle"
            :clearable="true"
            :label="placeHolder"
            type="text"
            ref="addEditNoteRef"
            @input="handleInputChange"
            @click:clear="handleInputChange"
            :autofocus="true"
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
import { onMounted, ref } from 'vue'

const addEditNoteRef = ref(null)

const modelValue = ref('')

const props = defineProps({
  bgColor: {
    type: String,
    default: 'bg-indigo-darken-4'
  },
  noteText: {
    type: String,
    required: false
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
  modelValue.value = props.noteText
})

const emit = defineEmits(['update:modelValue'])

const handleInputChange = (event) => {
  modelValue.value = event.target.value
  emit('update:modelValue', modelValue.value)
}

const focusTextArea = () => {
  modelValue.value = ''
  addEditNoteRef.value.focus()
}

defineExpose({
  focusTextArea
})
</script>
