import { useContext } from 'react'
import { StepsContext } from '../../../pages'
import Button from '../../Button'

import styles from './upload-image.module.scss'

const UploadImage: React.FC = () => {
  const { onNextStep } = useContext(StepsContext)

  return (
    <div className={styles.uploadImage}>
      <h3 className={styles.title}>Okay, James Brown!</h3>
      <p className={styles.text}>How's this photo?</p>
      <form className={styles.form}>
        <div className={styles.image}>jb</div>
        <label htmlFor="upload">
          <input className={styles.input} type="file" id="upload" />
          <p className={styles.uploadText}>Choose a different photo</p>
        </label>
        <Button onClick={onNextStep}>Next</Button>
      </form>
    </div>
  )
}

export default UploadImage
