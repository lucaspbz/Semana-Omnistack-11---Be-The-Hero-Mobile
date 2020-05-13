import axios from 'axios'

const api = axios.create({
    baseURL: 'https://omnibethehero.herokuapp.com'
})

export default api