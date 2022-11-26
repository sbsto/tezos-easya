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
      className="my-12 flex flex-col items-center justify-center gap-4 rounded bg-slate-100 px-16 pt-8 pb-12 shadow-lg transition duration-500 hover:scale-110"
    >
      <label className="text-2xl font-medium">add your insignia</label>
      <input
        type="text"
        className="my-4 rounded border border-black px-4 py-2 transition focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      />
      <button className="rounded bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
        add to event nft!
      </button>
    </form>
  )
}
