import NumberFormat from 'react-number-format'
import Button from './../../Button'

import styles from './enter-phone.module.scss'

const EnterPhone = () => {
  return (
    <div className={styles.enterPhone}>
      <h3 className={styles.title}>Enter your phone #</h3>
      <p className={styles.text}>We will send you a confirmation code</p>
      <form className={styles.form}>
        <NumberFormat
          className={styles.input}
          format="+### (##) ###-##-##"
          mask="_"
          placeholder="+375 (29) 154-73-86"
        />
        <Button>Next</Button>
        <p className={styles.terms}>
          By entering your number, you're agreeing to our Terms of Service and
          Privacy Policy. Thanks!
        </p>
      </form>
    </div>
  )
}

export default EnterPhone
