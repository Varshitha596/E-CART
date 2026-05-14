import {useState} from 'react'
//import Sidebar from '../../components/Sidebar'
import './index.css'
import toast from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'
const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const navigate = useNavigate()
  const onChangeUsername = event => { setUsername(event.target.value)}
  const onChangePassword = event => { setPassword(event.target.value)}
  const onSubmitForm = event => { event.preventDefault()
  if (
  username === 'varsha' &&
  password === 'varsha123'
  ) {
      localStorage.setItem( 'isLoggedIn', true )
      navigate('/')
      toast.success('Login Successful')
    } else {
      setErrorMsg('Invalid Username or Password' )
      toast.error('Invalid Password')
    }  }
  return (
    <div className="login-container">
      <div className="form-section">
        <form  className="login-form" onSubmit={onSubmitForm} >
          <h1 className="login-heading">  Login kariye  </h1>
          <label className="input-label">Apka nam  </label>
          <input
            type="text"
            className="input-field"
            placeholder="Enter Username"
            value={username}
            onChange={onChangeUsername} />
          <label className="input-label">   gupth chavi </label>
          <input
            type="password"
            className="input-field"
            placeholder="Enter Password"
            value={password}
            onChange={onChangePassword} />
          <button type="submit"className="login-btn" > Login</button>
  {
  errorMsg && (<p className="error-msg"> {errorMsg} </p>)
}
  </form>
      </div>
    </div>

  )
}

export default Login