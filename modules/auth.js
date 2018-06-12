import Cookies from 'js-cookie'

var register_url = "/api/auth/register/"

export async function register(app, email, password, firstName, lastName) {
  let data = await app.$axios.$post(register_url,
    {"email": email, "password": password,
     'first_name':firstName, 'last_name': lastName})

  return app.$auth
    .loginWith('local', {
      data: {
        email: email,
        password: password
      }
    })
    .catch(e => {
      this.error = e + ''
    })
}