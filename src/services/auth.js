import firebase from "gatsby-plugin-firebase";

export const isBrowser = () => typeof window !== "undefined"

export const getUser = () =>
  isBrowser() && window.localStorage.getItem("gatsbyUser")
    ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
    : {}

const setUser = user =>
  window.localStorage.setItem("gatsbyUser", JSON.stringify(user))

export const handleLogin = ({ email, password }) => {
      console.log(email);
      console.log(password);
    try {
      firebase.auth().signInWithEmailAndPassword(email, password);
      console.log('succesfully connected');
      return setUser({email: email, password: password});
    } catch {
      return false;
    }

}

export const isLoggedIn = () => {
  const user = getUser()

  return !!user.password
}

export const logout = callback => {
  setUser({})
  callback()
}