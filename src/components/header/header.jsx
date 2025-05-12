
import Logo from '../../assets/logo-tcit.svg'
import './header.css'

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={Logo} alt="Logo" />
      </div>
    </header>
  )
}

export default Header