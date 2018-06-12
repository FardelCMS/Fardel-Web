<template>
<section class="hero is-medium">
  <div class="hero-body">
    <div class="container">
      <div class="title columns is-centered">
        Login
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
                <input ref="email" class="input" type="email" name="email">
              </div>
            </div>
            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input ref="password" class="input" type="password" name="password">
              </div>
            </div>
            <div class="field">
              <div class="control">
                <button v-on:click="login" class="button is-primary">Login</button>
              </div>
            </div>
            <p>You don't have an account ? <a href="/auth/register/">Click Here!</a></p>
          </div>
        </div>
      </h2>
    </div>
  </div>
</section>
</template>

<script>
export default {
  head: {
    title: "ورود"
  },
  data() {
    return {errorMessage:null}
  },
  methods: {
    login() {
      let email = this.$refs.email.value
      let password = this.$refs.password.value

      return this.$auth
        .loginWith('local', {
          data: {
            email: email,
            password: password
          }
        })
        .catch(e => {
          this.$store.commit("notif/addNotif", {"type":"warning", "content":e.response.data.message})
        })
    }
  }
}
</script>