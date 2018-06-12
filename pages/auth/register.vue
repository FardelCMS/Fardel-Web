<template>
<section class="hero is-medium">
  <div class="hero-body">
    <div class="container">
      <div class="title columns is-centered">
        Registration
      </div>
      <div class="columns is-centered">
        <div class="column is-one-third is-narrow">
          <b-notification v-if="errorMessage" v-html="errorMessage" type="is-danger">
          </b-notification>
        </div>
      </div>
      <h2 class="subtitle">
        <div class="columns is-centered">
          <div class="column is-one-third is-narrow">
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input class="input" type="email" ref="email">
              </div>
            </div>
            <div class="field">
              <label class="label">First Name <span class="info">optional</span> </label>
              <div class="control">
                <input class="input" type="text" ref="firstName">
              </div>
            </div>
            <div class="field">
              <label class="label">Last Name <span class="info">optional</span> </label>
              <div class="control">
                <input class="input" type="text" ref="lastName">
              </div>
            </div>
            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input class="input" type="password" ref="password1">
              </div>
            </div>
            <div class="field">
              <label class="label">Repeat Password</label>
              <div class="control">
                <input class="input" type="password" ref="password2">
              </div>
            </div>
            <div class="field">
              <div class="control">
                <button class="button is-primary" v-on:click="doRegister">Register</button>
              </div>
            </div>
            <p>You have an account ? <a href="/auth/login/">Click Here!</a></p>
          </div>
        </div>
      </h2>
    </div>
  </div>
</section>
</template>

<script>
import {register} from "~/modules/auth"

export default {
  head: {
    title: "Registration"
  },
  data() {
    return {
      errorMessage:null
    }
  },
  methods: {
    doRegister() {
      let email = this.$refs.email.value
      let password1 = this.$refs.password1.value
      let password2 = this.$refs.password2.value
      let lastName = this.$refs.lastName.value
      let firstName = this.$refs.firstName.value
      if (password1 != password2) {
        this.errorMessage = "Passwords are not equal"
      } else {        
        return register(this.$root, email, password1, firstName, lastName).then(data => {
            window.location.href = '/'
          }
        ).catch(error => {
            this.errorMessage = error.response.data.message
          }
        )
      }
    }
  }
}
</script>

<style type="text/css">
.info {
  font-size:12px;
  opacity: 0.6;
}
</style>