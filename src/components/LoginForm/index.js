// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    correctDetails: true,
  }

  onSuccess = () => {
    const {history} = this.props
    this.setState({correctDetails: true})
    history.replace('/')
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password, correctDetails} = this.state
    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = response.json()
    this.setState({correctDetails: response.ok})
    console.log(data)
    console.log(Promise)
    if (response.ok === true) {
      this.onSuccess()
    } else {
      this.setState({correctDetails: false})
    }
  }

  falseData = () => {
    console.log('False Data function')
    return <p className="error-msg">*Username and password didn't match</p>
  }

  render() {
    const {username, password, correctDetails} = this.state
    return (
      <div className="login-form-container">
        <div className="login-image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            className="website-login-image"
            alt="website login"
          />
        </div>
        <div className="login-form-input-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="login-website-logo"
          />
          <form onSubmit={this.submitForm}>
            <label htmlFor="username" className="label-input">
              USERNAME
            </label>{' '}
            <br />
            <input
              type="text"
              id="username"
              placeholder="Username"
              className="form-input"
              onChange={this.onChangeUsername}
              value={username}
            />{' '}
            <br />
            <label htmlFor="password" className="label-input">
              PASSWORD
            </label>{' '}
            <br />
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="form-input"
              onChange={this.onChangePassword}
              value={password}
            />{' '}
            <br />
            <button className="login-page-btn">Login</button>
          </form>
          {correctDetails ? null : (
            <p className="error-msg">*Username and password didn't match</p>
          )}
        </div>
      </div>
    )
  }
}
export default LoginForm
