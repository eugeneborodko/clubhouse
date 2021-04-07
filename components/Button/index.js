import styles from './button.module.scss'

const Button = ({ children }) => {
  return (
    <a className={styles.button} href="#">
      {children}
    </a>
  )
}

export default Button
