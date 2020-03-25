import axios from 'axios';

function getHeaders() {
    const headers = {};
    if (localStorage.getItem('access_token')) {
        headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`;
    }
    return headers;
}

export function get(path) {
    return axios.get(`https://dev-api.ringapp.me${path}`, {
        headers: getHeaders(),
    });
}

export function post(path, data) {
    return axios.post(`https://dev-api.ringapp.me${path}`, data, {
        headers: getHeaders(),
    });
}