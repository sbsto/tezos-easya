import React, { useState } from 'react'
import styles from '../styles/Home.module.css'
import { DAppClient, NetworkType } from '@airgap/beacon-sdk'
import axios from 'axios'

const dAppClient = new DAppClient({ name: 'Beacon Docs', preferredNetwork: NetworkType.GHOSTNET })

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [permissionsAddress, setPermissionsAddress] = useState('')
  const [hasToken, setHasToken] = useState(false)
  const [tokenId, setTokenId] = useState('')

  const handleClick = async () => {
    try {
      console.log('Requesting permissions...')
      const permissions = await dAppClient.requestPermissions({
        network: { type: NetworkType.GHOSTNET }
      })
      setPermissionsAddress(permissions.address)
      console.log('Got permissions:', permissions.address)
      setIsLoggedIn(true)
    } catch (error) {
      console.log('Got error:', error)
    }
  }

  const handleGalleryClick = async () => {
    try {
      const res = await axios.get(`https://api.ghostnet.tzkt.io/v1/tokens/balances?account=${permissionsAddress}&token.tokenId=${105}`)
      console.log(res.data)
      if (res.data.length > 0) {
        setTokenId(res.data[0].token.id)
        return setHasToken(true)
      }
    } catch (e) {
      console.log('Error:', e)
    }
  }

  return (
    <div className="flex flex-col justify-center items-center">
      {!isLoggedIn
        ? <div className="flex flex-col items-center justify-center">
          <h1 className="font-serif text-6xl my-16">Welcome to Insignia</h1>
          <button className="px-3 w-64 py-2 bg-blue-500 rounded mx-auto text-black transition hover:bg-blue-400 hover:scale-110 duration-500" onClick={handleClick}>Log in</button>
        </div>
        : <div className="flex flex-col items-center justify-center">
          <h1 className="font-serif text-6xl my-16">Galleries</h1>
          <button onClick={handleGalleryClick} className="text-3xl transition duration-500 hover:scale-110">
            BERLIN
            <img src="https://gateway.pinata.cloud/ipfs/QmTgrJkgopsCRoNAL1sNZcNGndPPjgtHSxhcLJfGy9t6xJ" alt="gallery" className="h-64 w-auto mt-8" />
          </button>
          {
            hasToken
              ? <div className="flex flex-col justify-center items-center">
                <div className="mt-16 flex flex-col justify-center items-center text-green-600 animate-pulse animate-bounce">Success! You have the Berlin token. (token id: {tokenId})</div>
                <a target="_blank" href="http://10.2.1.18:3001/sign" className=" text-center px-3 w-64 py-2 rounded mx-auto font-mono text-white transition hover:bg-gray-100 hover:text-black duration-500 mt-4">HEAD TO INSIGNIA</a>
              </div>
              : <div className="mt-16 flex flex-col justify-center items-center">Your permissions address: <div className="font-mono mt-4">{permissionsAddress}</div></div>
          }
        </div>
      }
    </div>
  )
}
