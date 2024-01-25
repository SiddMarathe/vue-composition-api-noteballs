<template>
  <v-toolbar color="indigo-darken-2" elevation="5" density="compact">
    <template v-slot:prepend></template>
    <v-toolbar-title
      class="font-weight-black text-white text-uppercase text-h5 text-md-h4 text-sm-body-1"
    >
      Note balls
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items variant="text" v-if="smAndUp">
      <router-link class="router-link v-btn" active-class="router-link-active" to="/"
        >Notes
      </router-link>
      <router-link class="router-link v-btn" active-class="router-link-active" icon to="/stats">
        stats
      </router-link>
      <!--      change the Login style add a icon and menu-->
      <v-btn @click="handleAuth">{{ getAuthBtnText() }} </v-btn>
    </v-toolbar-items>
    <v-app-bar-nav-icon v-if="!smAndUp" @click.stop="drawer = !drawer">
      <v-icon v-if="!drawer">mdi-menu</v-icon>
      <v-icon v-if="drawer">mdi-close</v-icon>
    </v-app-bar-nav-icon>

    <v-navigation-drawer :width="144" v-model="drawer" location="right" :temporary="true">
      <v-list class="list-link text-center">
        <v-list-item to="/" exact active-class="list-link-active">
          <v-list-item-subtitle class="text-capitalize text-body-1">notes</v-list-item-subtitle>
        </v-list-item>
        <v-list-item to="/stats" exact active-class="list-link-active">
          <v-list-item-subtitle class="text-capitalize text-body-1">stats</v-list-item-subtitle>
        </v-list-item>
        <v-list-item>
          <v-list-item-subtitle @click="handleAuth" class="text-capitalize text-body-1"
            >{{ getAuthBtnText() }}
          </v-list-item-subtitle>
        </v-list-item>
        <v-list-item>
          <v-btn @click.stop="drawer = !drawer">
            <v-icon size="x-large" color="red">mdi-close-box</v-icon>
          </v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-toolbar>
  <v-progress-linear v-if="store.loadingNotes" color="primary" indeterminate></v-progress-linear>
</template>
<script setup>
import { useDisplay } from 'vuetify'
import { ref } from 'vue'
import { useNoteStore } from '@/store/notesStore.js'
import { useAuthStore } from '@/store/authStore.js'
import router from '@/router/index.js'

const { smAndUp } = useDisplay()

const drawer = ref(false)
const store = useNoteStore()
const authStore = useAuthStore()

const handleAuth = () => {
  if (authStore.user.id) {
    authStore.logoutUser()
  }
  // router.push('/auth')
}
const getAuthBtnText = () => {
  return authStore.user.id ? 'Logout' : 'Login'
}
</script>

<style scoped>
.router-link-active {
  background-color: #9fa8da; /* Add a subtle overlay */
  transform: scale(0.98); /* Slightly shrink the button */
}

.router-link {
  padding: 2px;
  margin: 2px;
  color: #e8eaf6;
}

.list-link-active {
  background-color: #303f9f; /* Add a subtle overlay */
  transform: scale(0.98); /* Slightly shrink the button */
  color: white;
}

.list-link {
  padding: 2px;
  margin: 2px;
  color: #303f9f;
}
</style>
