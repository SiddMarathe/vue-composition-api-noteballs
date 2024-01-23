import { defineStore } from 'pinia'
import { auth } from '@/js/firebase.js'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'

export const useAuthStore = defineStore('authStore', {
  state: () => {
    return {
      user: {}
    }
  },
  actions: {
    registerUser(cred) {
      console.log('called')
      return createUserWithEmailAndPassword(auth, cred.email, cred.password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user
          return true
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          console.log('error', errorMessage)
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
    init() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user.id = user.uid
          this.user.email = user.email
          console.log('user', this.user)
        } else {
          this.user = {}
          console.log('user logged out')
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
