import { defineStore } from 'pinia'
import { db } from '@/js/firebase.js'
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  updateDoc
} from 'firebase/firestore'

const notesCollectionRef = collection(db, 'notes')
export const useNoteStore = defineStore('notesStore', {
  state: () => {
    return {
      notes: []
    }
  },
  actions: {
    async getNotes() {
      // This will update the notes when there is any change to database
      const q = query(notesCollectionRef, orderBy('date', 'desc'))
      onSnapshot(q, (querySnapshot) => {
        const updatedNotes = []
        querySnapshot.forEach((doc) => {
          let data = doc.data()
          let note = {
            id: doc.id,
            content: data.content,
            date: data.date.seconds * 1000 + data.date.nanoseconds / 1000000
          }
          updatedNotes.push(note)
        })
        this.notes = [...updatedNotes]
      })
    },
    async deleteNote(id) {
      await deleteDoc(doc(notesCollectionRef, id))
    },
    async addNote(content) {
      let note = {
        content: content,
        date: new Date()
      }
      // Add a new document with a generated id.
      const docRef = await addDoc(notesCollectionRef, note)
      console.log('Document written with ID: ', docRef.id)
    },
    async updateNote(id, content) {
      const documentReference = doc(notesCollectionRef, id)
      await updateDoc(documentReference, {
        content
      })
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
