import axios from 'axios'

export default (url = 'https://darshanaswathportfolio.herokuapp.com') => {
    return axios.create({
        baseURL: url,
    })
}