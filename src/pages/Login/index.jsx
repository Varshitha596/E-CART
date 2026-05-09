import {useState} from 'react'

import './index.css'

const Login = () => {

  const [username, setUsername] = useState('')

  const [password, setPassword] = useState('')

  const onChangeUsername = event => {
    setUsername(event.target.value)
  }

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  const onSubmitForm = event => {
    event.preventDefault()

    console.log(username)
    console.log(password)
  }

  return (

    <div className="login-container">

      

      <div className="form-section">

        <form
          className="login-form"
          onSubmit={onSubmitForm}
        >

          <h1 className="login-heading">
            Login kariye
          </h1>

          <label className="input-label">
            Apka nam
          </label>

          <input
            type="text"
            className="input-field"
            placeholder="Enter Username"
            value={username}
            onChange={onChangeUsername}
          />

          <label className="input-label">
            gupth chavi
          </label>

          <input
            type="password"
            className="input-field"
            placeholder="Enter Password"
            value={password}
            onChange={onChangePassword}
          />

          <button
            type="submit"
            className="login-btn"
          >
            Login
          </button>

        </form>

      </div>

    </div>

  )
}

export default Login