import http from '../utils/http'

export const getUsers = () => http.get('user')

export const getUser = (body) => http.get('user')
