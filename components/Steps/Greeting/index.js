import Button from './../../Button'

import styles from './greeting.module.scss'

const Greeting = () => {
  return (
    <div className={styles.greeting}>
      <h1 className={styles.title}>Welcome to Clubhouse!</h1>
      <p className={styles.text}>
        Hey, we're still opening up but anyone can join with an invite from an
        existing user!
      </p>
      <Button className={styles.button} text={'Get your username'} />
    </div>
  )
}

export default Greeting
