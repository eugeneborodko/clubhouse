import Head from 'next/head'
import { useState, createContext } from 'react'
import React from 'react'
import Greeting from './../components/Steps/Greeting'
import EnterName from './../components/Steps/EnterName'
import TwitterImport from './../components/Steps/TwitterImport'
import UploadImage from './../components/Steps/UploadImage'
import EnterPhone from './../components/Steps/EnterPhone'
import EnterCode from './../components/Steps/EnterCode'

const stepsComponents = {
  0: Greeting,
  1: EnterName,
  2: TwitterImport,
  3: UploadImage,
  4: EnterPhone,
  5: EnterCode,
}

export const StepsContext = createContext({})

const Home = () => {
  const [step, setStep] = useState(0)
  const Step = stepsComponents[step]

  const onNextStep = () => {
    setStep((prev) => prev + 1)
  }

  return (
    <>
      <Head>
        <title>Clubhouse: Drop-in audio chat</title>
      </Head>
      <StepsContext.Provider value={{ step, onNextStep }}>
        <Step />
      </StepsContext.Provider>
    </>
  )
}

export default Home
