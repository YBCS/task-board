import { useState } from 'react'
import './form.css'

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (email.length < 5) {
      console.log('email too short')
      return false
    }
    if (password.length < 5) {
      console.log('password too short')
      return false
    }
    onLogin(email, password)
    setEmail('')
    setPassword('')
  }

  return (
    <div className="form-container">
      <h1>Log in!</h1>

      <form onSubmit={handleSubmit}>
        <div className="input-container">
          Email Address
          <input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            id="email"
          />
        </div>
        <div className="input-container">
          Password
          <input
            type="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            id="password"
          />
        </div>
        <button type="submit">Log in</button>
      </form>
    </div>
  )
}

export default LoginForm
