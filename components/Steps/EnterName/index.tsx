import { useContext } from 'react'
import { StepsContext } from '../../../pages'
import Button from '../../Button'

import styles from './enter-name.module.scss'

const EnterName = () => {
  const { onNextStep } = useContext(StepsContext)

  return (
    <div className={styles.enterName}>
      <h3 className={styles.title}>What's your name?</h3>
      <p className={styles.text}>People use real names on Clubhouse. Thnx!</p>
      <form className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter full name"
        />
        <Button onClick={onNextStep}>Next</Button>
      </form>
    </div>
  )
}

export default EnterName
