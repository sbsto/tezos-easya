import React from 'react'
import { Header } from '../components'
import { ArtForm } from '../components/ArtForm'
import '../globals.css'

const IndexPage = () => {
  return (
    <div className="flex flex-col items-center">
      <Header title="insignia" />
      <ArtForm />
    </div>
  )
}

export default IndexPage
