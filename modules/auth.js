axios = require('axios')

function popupError(error) {}

export function getDefaultHeader(token_type) {
  headers = {}
  if (token_type == "refresh") {
    headers.Authorization = 'Bearer ' + this.nuxt.$store.state.auth.refresh_token;
  } else if (token_type == "access") {
    headers.Authorization = 'Bearer ' + this.nuxt.$store.state.auth.access_token;
  }
	return headers
}

export function getHeaders(_headers) {
  headers = getDefaultHeader()
  if (_headers){
    headers.assign(_headers)
  }
  return headers
}

export function isAuthenticated() {
  return this.nuxt.$store.state.authenticated
}

export async function _get(_arguments) {
  headers = getHeaders(_arguments.headers) 
  try {
    const response = await axios.get(_arguments.url, _arguments.data, headers);
    return response
  } catch (error) {
  	popupError(error)
  }
}

export async function _post(_arguments) {
  headers = getHeaders(_arguments.headers) 
  try {
    const response = await axios.post(_arguments.url, _arguments.data, headers);
    return response
  } catch (error) {
  	popupError(error)
  }
}

export async function _delete(_arguments) {
  headers = getHeaders(_arguments.headers) 
  try {
    const response = await axios.delete(_arguments.url, _arguments.data, headers);
    return response
  } catch (error) {
    popupError(error)
  }
}

export async function _patch(_arguments) {
  headers = getHeaders(_arguments.headers) 
  try {
    const response = await axios.patch(_arguments.url, _arguments.data, headers);
    return response
  } catch (error) {
    popupError(error)
  }
}

export async function _put(_arguments) {
  headers = getHeaders(_arguments.headers) 
  try {
    const response = await axios.put(_arguments.url, _arguments.data, headers);
    return response
  } catch (error) {
    popupError(error)
  }
}