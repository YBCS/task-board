import { useState } from 'react'
import './LoginForm.css'
const LoginForm = ({ onLogin, isSignUp }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onLogin(email, password)
    setEmail('')
    setPassword('')
  }

  return (
    <div className="Login">
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
        <button type="submit">login</button>
        {isSignUp && <button>signup</button>}
      </form>
    </div>
  )
}

export default LoginForm
