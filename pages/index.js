import Head from 'next/head'
import { useState } from 'react'
import Greeting from './../components/Steps/Greeting'
import EnterName from './../components/Steps/EnterName'
import TwitterImport from './../components/Steps/TwitterImport'

const stepsComponents = {
  0: Greeting,
  1: EnterName,
  2: TwitterImport,
}

const Home = () => {
  const [step, setStep] = useState(2)
  const Step = stepsComponents[step]

  return (
    <>
      <Head>
        <title>Clubhouse: Drop-in audio chat</title>
      </Head>
      <Step />
    </>
  )
}

export default Home
