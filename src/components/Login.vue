<template>
  <b-container>
    <form @submit.prevent="login">
      <input type="text" placeholder="Username" v-model="username">
      <input type="password" placeholder="Password" v-model="password">
      <input type="submit" value="SIGN IN">
    </form>
  </b-container>
</template>

<script>
import Vue from 'vue'
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data: () => ({
    username: '',
    password: ''
  }),
  methods: {
    async login (e) {
      const username = this.username
      const password = this.password
      await this.$store.dispatch('auth/LOGIN', { username, password })
      this.$router.push({ path: '/polls' })
    }
  }
}

</script>
