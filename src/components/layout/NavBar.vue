<template>
  <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->

  <v-toolbar color="indigo-darken-2" elevation="5" density="compact">
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
    </v-toolbar-items>
    <v-app-bar-nav-icon v-if="!smAndUp" @click.stop="drawer = !drawer">
      <v-icon v-if="!drawer">mdi-menu</v-icon>
      <v-icon v-if="drawer">mdi-close</v-icon>
    </v-app-bar-nav-icon>

    <v-navigation-drawer :width="144" v-model="drawer" location="right" permanent="">
      <v-list class="list-link text-center">
        <v-list-item
          v-for="route in routes"
          :key="route.name"
          :to="route.path"
          exact
          active-class="list-link-active"
        >
          <v-list-item-subtitle class="text-capitalize text-body-1"
            >{{ route.name }}
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
</template>
<script setup>
import { useDisplay } from 'vuetify'
import { routes } from '@/router/index.js'
import { ref } from 'vue'

const { smAndUp } = useDisplay()

const drawer = ref(false)
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
