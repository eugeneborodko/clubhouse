import styles from './button.module.scss'

const Button = ({ text }) => {
  return (
    <a className={styles.button} href="#">
      {text}
    </a>
  )
}

export default Button
