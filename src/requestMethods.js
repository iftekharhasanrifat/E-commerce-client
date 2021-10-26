import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/'
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNzVmNTNiYWY2MjI2NDQxNjc1YjBhYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNTI3ODA5NSwiZXhwIjoxNjM1NTM3Mjk1fQ.nAJKSSZ_9CMqVlGqkUZrHVZzDAA5kXv6__gkXM8EAvw"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token: `Bearer ${TOKEN}`}
})