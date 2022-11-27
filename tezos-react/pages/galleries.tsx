import React from 'react'

export default function GalleriesPage() {
  const handleClick = async () => {
    try {
      const res = await fetch('https://api.tzkt.io/v1/tokens/balances')
    } catch (e) {

    }
  }

  return (
    <div>
      <h1>Galleries</h1>
      <div>
        BERLIN
      </div>
    </div>
  )
}
