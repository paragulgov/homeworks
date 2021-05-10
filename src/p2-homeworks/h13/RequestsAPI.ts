import axios from 'axios'

export const API = {
    postRequest(success: boolean) {
        return axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success: success})
    }
}
