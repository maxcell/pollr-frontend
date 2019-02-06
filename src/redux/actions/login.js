import { LOGIN_REQUEST, LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT } from '../actionTypes'
import { loginUser } from '../../adapters/userAdapter'



export function login(credentials) {
  return function(dispatch){
    dispatch(request(credentials))

    return loginUser(credentials)
    .then(
      json => {
        // const {display_name, email, pass} = json.data
        if(json.errors){
          //dispatch(failure(user.errors.toString()))
        }
        localStorage.setItem('jwt', json.data.display_name)
        dispatch(success(json.data))
        
      },
      error => {
        dispatch(failure(error.toString()))
      }
    )
  }

  // Handle the Synchronous Action Creators for LOGIN_*
  function request(user) { return { type: LOGIN_REQUEST, user }}
  function success(user) { return { type: LOGIN_SUCCESS, user }}
  function failure(error) { return { type: LOGIN_ERROR, error }}
}

export function logout() {
  localStorage.removeItem('jwt')
  return {
    type: LOGOUT
  }
}