import React from 'react'
import { Header } from '../components'
import { ArtForm } from '../components/ArtForm'

const IndexPage = () => {
  return (
    <div className="flex flex-col items-center">
      <Header title="insignia" />
      <ArtForm />
    </div>
  )
}

export default IndexPage
