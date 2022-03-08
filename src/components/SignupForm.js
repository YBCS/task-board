import { useState } from 'react'
import './form.css'

const SignupForm = ( {onSignUp} ) => {
  const [username, setuserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (username.length < 5) {
      alert('user name is too short')
      return false
    }
    if (email.length < 5) {
      alert('email is too short')
      return false
    }
    if (password.length < 5) {
      alert('password is too short')
      return false
    }
    onSignUp(username, email, password)
    setuserName('')
    setEmail('')
    setPassword('')
    return true
  }

  return (
    <div className="form-container">
      <h1>Sign up</h1>

      <form onSubmit={handleSubmit}>
        <div className="input-container">
          Username
          <input
            value={username}
            onChange={({ target }) => setuserName(target.value)}
            id="username"
            placeholder='Enter Name'
          />
        </div>
        <div className="input-container">
          Email Address
          <input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            id="email"
            placeholder='Enter Email'
          />
        </div>
        <div className="input-container">
          Password
          <input
            type="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            id="password"
            placeholder='Enter Password'
          />
        </div>
        <button type="submit">Sign up</button>
      </form>
    </div>
  )
}

export default SignupForm
