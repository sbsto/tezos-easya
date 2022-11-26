'use client'
import React, { FormEvent } from 'react'
import axios from '../../utils/axios'

export const ArtForm = () => {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await axios.post('/contribute', { value: e.target[0].value })
  }
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="my-12 flex flex-col items-center justify-center gap-4 rounded px-32 pt-16 pb-24"
    >
      <label className="text-4xl font-medium">what's your insignia</label>
      <input
        type="text"
        className="my-4 w-full rounded border border-black px-4 py-2 transition focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      />
      <button className="w-full rounded bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
        add to event nft!
      </button>
    </form>
  )
}
