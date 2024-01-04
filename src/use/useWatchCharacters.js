import { watch } from 'vue'

export function useWatchCharacters(stringControl, lengthCount = 100) {
  watch(stringControl, (newValue) => {
    if (newValue && newValue.length >= lengthCount) {
      alert(`Only ${lengthCount}  words allowed.`)
    }
  })
}
