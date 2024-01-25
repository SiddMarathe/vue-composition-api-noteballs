import { defineStore } from 'pinia'
import { auth } from '@/js/firebase.js'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'
import { useNoteStore } from '@/store/notesStore.js'

export const useAuthStore = defineStore('authStore', {
  state: () => {
    return {
      user: {}
    }
  },
  actions: {
    homeRoute: function () {
      this.router.push('/')
    },
    authRoute: function () {
      this.router.replace('/auth')
    },
    registerUser(cred) {
      console.log('called')
      return createUserWithEmailAndPassword(auth, cred.email, cred.password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user
          this.homeRoute()
          return true
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          console.log('error', errorMessage)
          this.authRoute()
          return false
        })
    },
    loginUser(cred) {
      console.log(cred)
      return signInWithEmailAndPassword(auth, cred.email, cred.password)
        .then((userCred) => {
          return true
        })
        .catch((error) => {
          console.log(error)
          return false
        })
    },
    async init() {
      const noteStore = useNoteStore()
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          this.user.id = user.uid
          this.user.email = user.email
          await noteStore.init()
          this.homeRoute()
        } else {
          this.user = {}
          console.log('user logged out')
          this.authRoute()
        }
      })
    },

    logoutUser() {
      signOut(auth)
        .then(() => {
          console.log('You are logged out')
        })
        .catch((error) => {
          console.log(error.message)
        })
    }
  }
})
