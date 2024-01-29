import { createRouter, createWebHistory } from 'vue-router'
import ViewNotes from '@/views/ViewNotes.vue'
import ViewStats from '@/views/ViewStats.vue'
import EditNote from '@/views/EditNote.vue'
import viewAuth from '@/views/ViewAuth.vue'
import { useAuthStore } from '@/store/authStore.js'

export const routes = [
  {
    path: '/',
    name: 'notes',
    component: ViewNotes
  },
  {
    path: '/stats',
    name: 'stats',
    component: ViewStats
  },
  {
    path: '/notes/edit/:id',
    name: 'edit-notes',
    component: EditNote
  },
  {
    path: '/auth',
    name: 'auth',
    component: viewAuth
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to) => {
  const authStore = useAuthStore()
  if (!authStore.user.id && authStore.authStoreReady) {
    if (to.name !== 'auth') {
      return { name: 'auth' }
    }
  }
})
export default router
