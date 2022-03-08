// userService
const DB_USERS = 'UsersDB'
const CURR_USER = 'curr_user' /* the current active user */

// this is for my visual sense
// const userModel = {
//   userName: 'hello',
//   email: 'some@mail.com',
//   password: 'secret'
// }

const addUser = (new_user) => {
  console.log('in add user ', new_user)
  let users = getUsers()
  users = [...users, new_user] // this will add it two times tho
  window.localStorage.setItem(DB_USERS, JSON.stringify(users))
  return true
}

const getUsers = () => {
  const users = window.localStorage.getItem(DB_USERS)
  if (users) {
    return JSON.parse(users)
  }
  return []
}

const getCurrentUser = () => {
  return window.localStorage.getItem(CURR_USER)
}

const logIn = (mail, password) => {
  const user = _findUser(mail, password)
  if (user) {
    window.localStorage.setItem(CURR_USER, JSON.stringify(user))
    return true
  } else {
    console.error('login failed no user found!')
    return false
  }
}

const _findUser = (mail, password) => {
  const users = getUsers()
  const user = users.find(
    (user) => user.email === mail && user.password === password
  )
  return user ? user : null
}

const clearUser = () => {
  localStorage.clear()
}

export default {
  addUser,
  getUsers,
  getCurrentUser,
  logIn,
  clearUser,
}
