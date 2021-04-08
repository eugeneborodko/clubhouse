import { useContext } from 'react'
import { StepsContext } from './../../../pages'
import NumberFormat from 'react-number-format'
import Button from './../../Button'

import styles from './enter-phone.module.scss'

const EnterPhone = () => {
  const { onNextStep } = useContext(StepsContext)

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
        <Button onClick={onNextStep}>Next</Button>
        <p className={styles.terms}>
          By entering your number, you're agreeing to our Terms of Service and
          Privacy Policy. Thanks!
        </p>
      </form>
    </div>
  )
}

export default EnterPhone
