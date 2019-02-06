import { CURRENT_USER_REQUEST, CURRENT_USER_SUCCESS, CURRENT_USER_ERROR } from '../actionTypes'
import { getCurrentUser } from '../../adapters/userAdapter'

export function currentUser(jwt){
  return function(dispatch){
    dispatch(request(jwt))

    return getCurrentUser(jwt)
    .then(json => {
      if(json.errors){
        dispatch(failure(json.errors.toString()))
      } else {
        dispatch(success(json.data))
      }
    })
  }

    // Handle the Synchronous Action Creators for LOGIN_*
    function request(jwt) { return { type: CURRENT_USER_REQUEST, jwt }}
    function success(current_user) { return { type: CURRENT_USER_SUCCESS, current_user }}
    function failure(error) { return { type: CURRENT_USER_ERROR, error }}
}