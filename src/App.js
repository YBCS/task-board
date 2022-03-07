import './App.css'
import { useState, useEffect } from 'react'
import LoginForm from './components/LoginForm'
import userService from './services/user'

function App() {
  const [user, setUser] = useState(null)
  const [isUserAvailable, setIsUserAvailable] = useState(false)
  const [signIn, setSignIn] = useState(false)

  useEffect(() => {
    let curr_user = userService.getCurrentUser()
    if (curr_user !== null) {
      setUser(curr_user)
    }
  }, [isUserAvailable])

  const login = (email, password) => {
    if (userService.logIn(email, password)) {
      setIsUserAvailable(true)
    } else {
      setSignIn(true)
      // prepare the button for sign up
    }
  }
  if (user === null) {
    return (
      <>
        <LoginForm onLogin={login} isSignUp={signIn} />
      </>
    )
  }
  return <>Yo user is logged</>
}

export default App
