import http from '../utils/http'

export const getFoods = () => http.get('food')
