import { defineStore } from 'pinia'
import { auth } from '@/js/firebase.js'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'
import { useNoteStore } from '@/store/notesStore.js'
import router from '@/router/index.js'

export const useAuthStore = defineStore('authStore', {
  state: () => {
    return {
      user: {},
      authStoreReady: false
    }
  },
  actions: {
    homeRoute: async function () {
      await this.router.push('/')
    },
    authRoute: async function () {
      await this.router.replace('/auth')
    },
    registerUser(cred) {
      console.log('called')
      return createUserWithEmailAndPassword(auth, cred.email, cred.password)
        .then(async () => {
          // Signed up
          await this.homeRoute()
          return true
        })
        .catch(async (error) => {
          const errorMessage = error.message
          console.log('error', errorMessage)
          await this.authRoute()
          return false
        })
    },
    loginUser(cred) {
      console.log(cred)
      return signInWithEmailAndPassword(auth, cred.email, cred.password)
        .then(() => {
          return true
        })
        .catch((error) => {
          console.log(error)
          return false
        })
    },
    async init() {
      const noteStore = useNoteStore()
      await onAuthStateChanged(auth, async (user) => {
        if (user) {
          this.user.id = user.uid
          this.user.email = user.email
          await noteStore.init()
          await router.replace(router.currentRoute.value.fullPath)
        } else {
          this.user = {}
          await this.authRoute()
          noteStore.clearNotes()
        }
        this.authStoreReady = true
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
