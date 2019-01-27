import { BASE_API_URL } from '../constants/constants'


export const loginUser = (data) => {
  return fetch(`${BASE_API_URL}/login`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
}

export const signupUser = (data) => {
  return fetch(`${BASE_API_URL}/signup`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
}