
// import Head from 'next/head'
// import Image from 'next/image'
// import Demo from './123'
import Header from '../components/Header'
import Hero from '../components/Hero'
import { useWeb3 } from '@3rdweb/hooks'
import { useEffect } from 'react'
import { client } from '../lib/sanityClient'

const style = {
  wrapper: ``,
  walletConnectWrapper: `flex flex-col justify-center items-center h-screen w-screen bg-[#3b3d42]`,
  button: `border border-[#282b2f] bg-[#2081e2] p-[0.8rem] text-xl front-semibold rounded-lg curson-pointer text-black`,
  details: `text-lg text-center text=[#282b2f] front-semibold mt-4 text-white-200`

}

export default function Home() {
  const { address, connectWallet } = useWeb3()

  useEffect(() => {
    if (!address) return;
    (async () => {
      const userDoc = {
        _type: 'users',
        _id: address,
        usernName: 'Unnamed',
        walletAddress: address
      }
      const result = await client.createIfNotExists(userDoc)
    })
  }, [address]);

  const someFunction = () => {

  }
  return (
    <div className={style.wrapper}>
      {
        address ? (<>
          <Header />
          <Hero />
        </>)
          : (
            <div className={style.walletConnectWrapper}>
              <button
                className={style.button}
                onClick={() => connectWallet('injected')}
              >
                Connect Wallet
              </button>
              <div className={style.details}>
                <p className='text-gray-400'>
                  You need Chrome to
                  <br />   able to run app.

                </p>
              </div>
            </div>
          )
      }

    </div>
  )
}