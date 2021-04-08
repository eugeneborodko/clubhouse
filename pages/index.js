import Head from 'next/head'
import { useState } from 'react'
import Container from './../components/Container'
import Greeting from './../components/Steps/Greeting'
import EnterName from './../components/Steps/EnterName'
import UploadImage from './../components/Steps/UploadImage'

const stepsComponents = {
  0: Greeting,
  1: EnterName,
  2: UploadImage,
}

const Home = () => {
  const [step, setStep] = useState(2)
  const Step = stepsComponents[step]

  return (
    <>
      <Head>
        <title>Clubhouse: Drop-in audio chat</title>
      </Head>
      <Container>
        <Step />
      </Container>
    </>
  )
}

export default Home
