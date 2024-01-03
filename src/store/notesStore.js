import { defineStore } from 'pinia'

export const useNoteStore = defineStore('notesStore', {
  state: () => {
    return {
      notes: [
        {
          id: 'id1',
          content:
            ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam dicta dignissimos'
        },
        {
          id: 'id3',
          content: 'note'
        }
      ]
    }
  },
  actions: {
    deleteNote(id) {
      this.notes = this.notes.filter((note) => {
        return note.id !== id
      })
    },
    addNote(content) {
      let time = new Date().getTime()
      let note = {
        id: time.toString(),
        content: content
      }
      this.notes.unshift(note)
    },
    updateNote(id, content) {
      let index = this.notes.findIndex((note) => note.id === id)
      this.notes[index].content = content
    }
  },
  getters: {
    getNoteContent: (state) => {
      return (id) => {
        let note = state.notes.filter((note) => {
          return note.id === id
        })
        return note[0].content
      }
    }
  }
})
