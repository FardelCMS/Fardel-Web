<template>
<section class="hero is-medium">
  <div class="hero-body">
    <div class="container">
      <div class="title columns is-centered">
        ورود
      </div>
      <h2 class="subtitle">
        <div class="columns is-centered">
          <div class="column is-one-third is-narrow">
            <form v-on:submit="doLogin" method="POST">
              <div class="field">
                <label class="label">ایمیل</label>
                <div class="control">
                  <input class="input" type="email" name="email">
                </div>
              </div>
              <div class="field">
                <label class="label">رمز عبور</label>
                <div class="control">
                  <input class="input" type="password" name="password">
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <button class="button is-primary">ورود</button>
                </div>
              </div>
            </form>
            <p>حساب کاربری ندارید ؟ <a href="/auth/register/">اینجا را کلیک کنید</a></p>
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
  methods: {
    doLogin() {
      let url = '/api/auth/login/'
      axios.post(url, this.user).then(response => {
        let token = {
          access_token : response.data.access_token,
          refresh_token: response.data.refresh_token
        }
        setTimeout(() => {
          this.$store.dispatch('login',token)
          },1
        )
        this.$router.push('/en/')
      }).catch(e => {alert(e)})
    }
  }
}
</script>