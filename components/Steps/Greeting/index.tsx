import { StepsContext } from '../../../pages'
import React, { useContext } from 'react'
import Button from '../../Button'

import styles from './greeting.module.scss'

const Greeting: React.FC = () => {
  const { onNextStep } = useContext(StepsContext)

  return (
    <div className={styles.greeting}>
      <h3 className={styles.title}>Welcome to Clubhouse!</h3>
      <p className={styles.text} onClick={onNextStep}>
        Hey, we're still opening up but anyone can join with an invite from an
        existing user!
      </p>
      <Button onClick={onNextStep}>Get your username</Button>
    </div>
  )
}

export default Greeting
