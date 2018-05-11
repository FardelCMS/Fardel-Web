import axios from 'axios'

if (!process.browser) {
	axios.defaults.baseURL = "http://localhost:5000"
}