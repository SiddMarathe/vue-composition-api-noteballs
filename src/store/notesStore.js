import { defineStore } from 'pinia'
import { db } from '@/js/firebase.js'
import { collection, onSnapshot, query } from 'firebase/firestore'

export const useNoteStore = defineStore('notesStore', {
  state: () => {
    return {
      notes: []
    }
  },
  actions: {
    async getNotes() {
      // This will update the notes when there is any change to database
      const q = query(collection(db, 'notes'))
      onSnapshot(q, (querySnapshot) => {
        const updatedNotes = []
        querySnapshot.forEach((doc) => {
          let note = {
            id: doc.id,
            content: doc.data().content
          }
          updatedNotes.push(note)
        })
        this.notes = [...updatedNotes]
        console.log('Current notes in CA: ', this.notes)
      })
    },
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
    },
    totalNotesCount: (state) => {
      return state.notes.length
    },
    totalChars: (state) => {
      return state.notes
        .map((note) => note.content.length)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    }
  }
})
