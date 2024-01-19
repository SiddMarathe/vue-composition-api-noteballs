<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div>
        <v-card class="mx-auto pa-12 pb-8 text-center" elevation="8" rounded="lg" title="Login">
          <div class="text-subtitle-1 text-medium-emphasis">Account</div>

          <v-text-field
            v-model="email.value.value"
            density="compact"
            placeholder="Email address"
            prepend-inner-icon="mdi-email-outline"
            variant="outlined"
            :error-messages="email.errorMessage.value"
          ></v-text-field>

          <div
            class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
          >
            Password
            <!--:TODO add the forgot password functionality-->
            <a
              class="text-caption text-decoration-none text-blue"
              href="#"
              rel="noopener noreferrer"
              target="_blank"
            >
              Forgot login password?</a
            >
          </div>

          <v-text-field
            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
            :type="visible ? 'text' : 'password'"
            density="compact"
            placeholder="Enter your password"
            prepend-inner-icon="mdi-lock-outline"
            variant="outlined"
            v-model="password.value.value"
            :error-messages="password.errorMessage.value"
            @click:append-inner="visible = !visible"
          ></v-text-field>

          <v-card class="mb-12" color="surface-variant" variant="tonal">
            <v-card-text class="text-medium-emphasis text-caption">
              Warning: After 3 consecutive failed login attempts, you account will be temporarily
              locked for three hours. If you must login now, you can also click "Forgot login
              password?" below to reset the login password.
            </v-card-text>
          </v-card>

          <v-btn block class="mb-8" color="blue" size="large" variant="tonal" type="submit">
            Log In
          </v-btn>

          <v-card-text class="text-center">
            <a
              class="text-blue text-decoration-none"
              @click="emits('register', '2')"
              rel="noopener noreferrer"
            >
              Sign up now
              <v-icon icon="mdi-chevron-right"></v-icon>
            </a>
          </v-card-text>
        </v-card>
      </div>
    </form>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'

const visible = ref(false)
const { handleSubmit } = useForm({
  validationSchema: {
    email: yup.string().required().email(),
    password: yup.string().required()
  }
})
const emits = defineEmits(['register'])
const password = useField('password')
const email = useField('email')
const onSubmit = handleSubmit((values) => alert(JSON.stringify(values, null, 2)))
</script>
<style scoped></style>
