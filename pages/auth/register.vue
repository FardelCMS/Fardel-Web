<template>
<section class="hero is-medium">
  <div class="hero-body">
    <div class="container">
      <div class="title columns is-centered">
        ثبت نام
      </div>
      <h2 class="subtitle">
        <div class="columns is-centered">
          <div class="column is-one-third is-narrow">
            <form v-on:submit="doLogin" method="POST">
              <div class="field">
                <label class="label">ایمیل</label>
                <div class="control">
                  <input v-model="user.email" class="input" type="email" name="email">
                </div>
              </div>
              <div class="field">
                <label class="label">نام <span class="info">دلبخواهی</span> </label>
                <div class="control">
                  <input v-model="user.first_name" class="input" type="email" name="email">
                </div>
              </div>
              <div class="field">
                <label class="label">نام خانوادگی <span class="info">دلبخواهی</span> </label>
                <div class="control">
                  <input v-model="user.last_name" class="input" type="email" name="email">
                </div>                
              </div>
              <div class="field">
                <label class="label">رمز عبور</label>
                <div class="control">
                  <input v-model="user.password1" class="input" type="password" name="password">
                </div>
              </div>
              <div class="field">
                <label class="label">تکرار رمز عبور</label>
                <div class="control">
                  <input v-model="user.password2" class="input" type="password" name="password">
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <button class="button is-primary">ثبت نام</button>
                </div>
              </div>
            </form>
            <p>حساب کاربری دارید ؟ <a href="/auth/login/">اینجا را کلیک کنید</a></p>
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
    title: "ثبت نام"
  },
  data() {
    return {
      user: {}
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