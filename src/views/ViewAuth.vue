<template>
  <v-card>
    <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center">
      <v-tab value="1">login</v-tab>
      <v-tab value="2">Register</v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item value="1">
        <user-login v-if="tab === '1'" @register="(args) => (tab = args)"></user-login>
      </v-window-item>
      <v-window-item value="2">
        <user-register v-if="tab === '2'"></user-register>
      </v-window-item>
    </v-window>
  </v-card>
</template>

<script setup>
import UserLogin from '@/components/Auth/UserLogin.vue'
import UserRegister from '@/components/Auth/UserRegister.vue'
import { ref } from 'vue'

const tab = ref('1')
</script>
