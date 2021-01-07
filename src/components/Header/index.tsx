import logo from 'assets/logo.png'
import './style.scss'

export const Header: React.FC = () => {
  return (
    <>
      <header className='header'>
        <img src={logo} alt='logo' />
      </header>
    </>
  )
}
