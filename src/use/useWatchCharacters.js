import { watch } from 'vue'

export function useWatchCharacters(stringControl) {
  watch(stringControl, (newValue) => {
    if (newValue.length >= 100) {
      alert('Only 100 words allowed.')
    }
  })
}
