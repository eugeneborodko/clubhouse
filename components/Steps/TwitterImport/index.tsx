import React, { useContext } from 'react'
import { StepsContext } from '../../../pages'
import Button from '../../Button'

import styles from './twitter-import.module.scss'

const TwitterImport: React.FC = () => {
  const { onNextStep } = useContext(StepsContext)

  return (
    <div className={styles.twitterImport}>
      <h3 className={styles.title}>Do you want to import info from Twitter?</h3>
      <form className={styles.form}>
        <div className={styles.image}>jb</div>
        <span className={styles.name}>james brown</span>
        <Button onClick={onNextStep}>Import</Button>
      </form>
    </div>
  )
}

export default TwitterImport