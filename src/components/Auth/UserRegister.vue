<template>
  <v-card class="mx-auto" title="User Registration">
    <v-container>
      <v-text-field
        v-model="firstName.value.value"
        :error-messages="firstName.errorMessage.value"
        color="primary"
        label="First name"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        v-model="lastName.value.value"
        color="primary"
        :error-messages="lastName.errorMessage.value"
        label="Last name"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        v-model="email.value.value"
        :error-messages="email.errorMessage.value"
        color="primary"
        label="Email"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        v-model="password.value.value"
        :error-messages="password.errorMessage.value"
        color="primary"
        label="Password"
        placeholder="Enter your password"
        variant="underlined"
      ></v-text-field>

      <v-checkbox-btn
        v-model="terms.value.value"
        :error-messages="terms.errorMessage.value"
        label="I agree to site terms and conditions"
        false-icon="mdi-square"
        true-icon="mdi-checkbox-marked-circle"
      ></v-checkbox-btn>
      <v-alert v-if="terms.errorMessage.value" color="error" density="compact" text
        >{{ terms.errorMessage.value }}
      </v-alert>
    </v-container>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn @click="onSubmit" color="success">
        Complete Registration

        <v-icon icon="mdi-chevron-right" end></v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script setup>
import * as yup from 'yup'
import { useField, useForm } from 'vee-validate'

const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    firstName: yup.string().required().min(5),
    lastName: yup.string().required().min(5),
    email: yup.string().required().email(),
    terms: yup
      .boolean()
      .required('Agreement on the terms and condition is required')
      .isTrue('Agreement on the terms and condition is required'),
    password: yup
      .string()
      .required('Test message')
      .min(8)
      .max(30)
      .matches(/[a-z]/, 'Password must contain a lowercase letter')
      .matches(/[A-Z]/, 'Password must contain an uppercase letter')
      .matches(/\d/, 'Password must contain a digit')
      .matches(/[!@#$%^&*]/, 'Password must contain a special character')
  }
})

const email = useField('email')
const password = useField('password')
const firstName = useField('firstName')
const lastName = useField('lastName')
const terms = useField('terms')

const onSubmit = handleSubmit((values) => alert(JSON.stringify(values, null, 2)))
</script>
