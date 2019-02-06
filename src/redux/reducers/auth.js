import { LOGIN_REQUEST, LOGIN_ERROR, LOGIN_SUCCESS, CURRENT_USER_ERROR, CURRENT_USER_REQUEST, CURRENT_USER_SUCCESS, LOGOUT } from '../actionTypes'

const initialState = {
  currentUser: null,
  isLoading: false,
  loggedIn: false
}

export default function(state = initialState, action){
  switch(action.type){
    case LOGIN_REQUEST:
      return {
        isLoading: true,
        currentUser: action.user
      }
    case LOGIN_SUCCESS:
      return {
        isLoading: false,
        loggedIn: true,
        currentUser: action.user
      }
    case LOGIN_ERROR:
      return {
        isLoading: false,
        errors: "Invalid Credentials"
      }
    case LOGOUT:
      return {
        currentUser: null,
        loggedIn: false
      }
    case CURRENT_USER_REQUEST:
      return {
        isLoading: true,
        currentUser: action.jwt
      }
    case CURRENT_USER_ERROR:
      return {
        isLoading: false,
        currentUser: action.current_user
      }
    case CURRENT_USER_SUCCESS:
      return {
        isLoading: false,
        errors: action.errors
      }
    default:
      return state
  }
}