import './App.css'
import { useState, useEffect } from 'react'
import LoginForm from './components/LoginForm'
import userService from './services/user'
import SignupForm from './components/SignupForm'
import Taskboard from './components/TaskBoard'

function App() {
  const [user, setUser] = useState(null)
  const [showlogin, setShowLogin] = useState(false)
  const [showsignup, setShowSignUp] = useState(false)
  const [showSignUpForm, setShowSignUpForm] = useState(false)
  const [showtaskboard, setShowTaskBoard] = useState(false)

  useEffect(() => {
    let curr_user = userService.getCurrentUser()
    if (curr_user !== null) {
      setUser(curr_user)
      setShowTaskBoard(true)
    } else {
      setShowLogin(true)
    }
  }, [])

  const login = (email, password) => {
    if (userService.logIn(email, password)) {
      setUser(userService.getCurrentUser())
      showTaskBoardComponent()
      console.log('logged in')
    } else {
      console.error('login failed')
      showLoginFormAndSignUpButton()
    }
  }

  const singup = (username, email, password) => {
    if (userService.addUser({ username, email, password })) {
      console.log('user added successfully ')
      showLoginForm()
    } else {
      console.log('user add failed ')
    }
  }

  const showLoginForm = () => {
    // renders only the login form
    setShowLogin(true)
    setShowSignUp(false)
    setShowTaskBoard(false)
  }
  const showLoginFormAndSignUpButton = () => {
    // renders login form + signup button
    setShowLogin(true)
    setShowSignUp(true)
    setShowTaskBoard(false)
  }
  const showTaskBoardComponent = () => {
    setShowLogin(false)
    setShowSignUp(false)
    setShowTaskBoard(true)
  }

  // console.log('show login ', showlogin)
  // console.log('show sign up  ', showsignup)
  // console.log('show taskb ', showtaskboard)

  const showLoginWhenVisible = { display: showlogin ? '' : 'none' }
  const showSignupWhenVisible = {
    display: showsignup ? '' : 'none',
    textAlign: 'center',
    margin: '20px',
  }
  const showTaskboardWhenVisible = { display: showtaskboard ? '' : 'none' }

  const showForm = () => {
    setShowSignUpForm(true)
    setShowLogin(false)
    setShowTaskBoard(false)
  }
  return (
    <>
      <div style={showLoginWhenVisible}>
        <LoginForm onLogin={login} />
      </div>

      <div style={showSignupWhenVisible}>
        {!showSignUpForm && <button onClick={showForm}>Signup</button>}
        {showSignUpForm && <SignupForm onSignUp={singup} />}
      </div>
      <div style={showTaskboardWhenVisible}>
        <Taskboard user={user} />
      </div>
    </>
  )
}

export default App
