import { createRouter, createWebHistory } from 'vue-router'
import ViewNotes from '@/views/ViewNotes.vue'
import ViewStats from '@/views/ViewStats.vue'
import EditNote from '@/views/EditNote.vue'

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
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
