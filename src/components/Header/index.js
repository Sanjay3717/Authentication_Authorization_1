// Write your JS code here
import './index.css'

const Header = () => {
  console.log()
  return (
    <div className="home-bg-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="logo-image"
        />
      </div>
      <div>
        <ul className="home-top-right-container home-btn-style">
          <li>Home</li>
          <li>Products</li>
          <li>Cart</li>
          <li className="login-button">Logout</li>
        </ul>
      </div>
    </div>
  )
}
export default Header
