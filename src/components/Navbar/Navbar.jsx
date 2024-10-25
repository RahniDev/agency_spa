import styles from './Navbar.module.css'
import logo from '../../assets/logo.webp'
const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <a href="#home"><img src={logo} width={110}  alt="logo" /></a>     
      <ul className={styles.navlinks}>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      </nav>
  )
}

export default Navbar