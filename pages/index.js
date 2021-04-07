import Head from 'next/head'
import Greeting from './../components/Steps/Greeting'

const Home = () => {
  return (
    <>
      <Head>
        <title>Clubhouse: Drop-in audio chat</title>
      </Head>
      <Greeting />
    </>
  )
}

export default Home
