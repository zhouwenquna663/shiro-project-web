import axios from 'axios'

let base = 'http://localhost:8808';

export const postRequest = (url, params) => {
    return axios({
        method: 'post',
        url: base+url,
        data: params,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}