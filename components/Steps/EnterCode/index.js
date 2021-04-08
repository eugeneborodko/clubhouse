import Button from './../../Button'

import styles from './enter-code.module.scss'

const EnterCode = () => {
  return (
    <div className={styles.enterCode}>
      <h3 className={styles.title}>Enter your activation code #</h3>
      <form className={styles.form}>
        <div className={styles.numbers}>
          <input
            className={styles.input}
            type="text"
            placeholder="X"
            id="1"
            maxLength={1}
          />
          <input
            className={styles.input}
            type="text"
            placeholder="X"
            id="2"
            maxLength={1}
          />
          <input
            className={styles.input}
            type="text"
            placeholder="X"
            id="3"
            maxLength={1}
          />
          <input
            className={styles.input}
            type="text"
            placeholder="X"
            id="4"
            maxLength={1}
          />
        </div>
        <Button>Next</Button>
      </form>
    </div>
  )
}

export default EnterCode