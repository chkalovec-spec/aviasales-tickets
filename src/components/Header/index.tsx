import logo from 'assets/logo.png'
import classes from './style.module.scss'

export const Header: React.FC = () => {
  return (
    <>
      <header className={classes.header}>
        <img src={logo} alt='logo' />
      </header>
    </>
  )
}
