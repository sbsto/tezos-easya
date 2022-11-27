import React from 'react'
import styles from '../styles/Home.module.css'
import { DAppClient } from '@airgap/beacon-sdk'

export default function Home() {
  const dAppClient = new DAppClient({ name: 'Beacon Docs' })

  const handleClick = async () => {
    try {
      console.log('Requesting permissions...')
      const permissions = await dAppClient.requestPermissions()
      console.log('Got permissions:', permissions.address)
    } catch (error) {
      console.log('Got error:', error)
    }
  }

  return (
    <div className={styles.container}>
      <button onClick={handleClick}>Log in</button>
    </div>
  )
}
