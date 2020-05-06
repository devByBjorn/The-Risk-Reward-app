import { firebase, googleAuthProvider, twitterAuthProvider } from '../firebase/firebase'

const login = (uid) => ({
  type: 'LOGIN',
  uid
})

const googleLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider)
  }
}

const twitterLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(twitterAuthProvider)
  }
}

const logout = () => ({
  type: 'LOGOUT'
})

const startLogout = () => {
  return () => {
    return firebase.auth().signOut()
  }
}

export { login, googleLogin, twitterLogin, logout, startLogout }
