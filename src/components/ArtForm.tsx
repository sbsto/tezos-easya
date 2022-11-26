'use client'
import React, { FormEvent } from 'react'

export const ArtForm = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('clicked')
  }
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="my-12 flex flex-col items-center justify-center rounded bg-slate-100 px-8 pt-4 pb-8 shadow-lg"
    >
      <label className="text-2xl font-medium">add your insignia</label>
      <input
        type="text"
        className="my-4 rounded border border-2 border-black px-4 py-2 transition focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      />
      <button className="rounded bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
        add to event nft!
      </button>
    </form>
  )
}
