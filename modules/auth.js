axios = require('axios')

function popupError(error) {}

function getDefaultHeader(token_type) {
  headers = {}
  if (token_type == "refresh") {
    headers.Authorization = 'Bearer ' + this.nuxt.$store.state.auth.refresh_token;
  } else if (token_type == "access") {
    headers.Authorization = 'Bearer ' + this.nuxt.$store.state.auth.access_token;
  }
	return headers
}

function getHeaders(_headers) {
  headers = getDefaultHeader()
  if (_headers){
    headers.assign(_headers)
  }
  return headers
}

module.exports = async function get(arguments) {
  headers = getHeaders(arguments.headers) 
  try {
    const response = await axios.get(arguments.url, arguments.data, headers);
    return response
  } catch (error) {
  	popupError(error)
  }
}

module.exports = async function post(arguments) {
  headers = getHeaders(arguments.headers) 
  try {
    const response = await axios.post(arguments.url, arguments.data, headers);
    return response
  } catch (error) {
  	popupError(error)
  }
}

module.exports =  async function del(arguments) {
  headers = getHeaders(arguments.headers) 
  try {
    const response = await axios.delete(arguments.url, arguments.data, headers);
    return response
  } catch (error) {
    popupError(error)
  }
}

module.exports = async function patch(arguments) {
  headers = getHeaders(arguments.headers) 
  try {
    const response = await axios.patch(arguments.url, arguments.data, headers);
    return response
  } catch (error) {
    popupError(error)
  }
}

module.exports =  async function put(arguments) {
  headers = getHeaders(arguments.headers) 
  try {
    const response = await axios.put(arguments.url, arguments.data, headers);
    return response
  } catch (error) {
    popupError(error)
  }
}