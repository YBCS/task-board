// userService
const DB_USERS = 'UsersDB'
const CURR_USER = 'curr_user' /* the current active user */

// this is for my visual sense
// const userModel = {
//   userName: 'hello',
//   email: 'some@mail.com',
//   password: 'secret'
// }

export function addUser (new_user) {
  console.log('in add user ', new_user)
  let users = getUsers()
  users = [...users, new_user] // this will add it two times tho
  window.localStorage.setItem(DB_USERS, JSON.stringify(users))
  return true
}

export function getUsers () {
  const users = window.localStorage.getItem(DB_USERS)
  if (users) {
    return JSON.parse(users)
  }
  return []
}

export function getCurrentUser() {
  return JSON.parse(window.localStorage.getItem(CURR_USER))
}

export function logIn (mail, password) {
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

// const clearUser = () => {
//   localStorage.clear()
// }


