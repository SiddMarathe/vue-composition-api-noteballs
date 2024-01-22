import { defineStore } from 'pinia'
import { auth } from '@/js/firebase.js'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export const useAuthStore = defineStore('authStore', {
  state: () => {
    return {}
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
    }
  }
})
