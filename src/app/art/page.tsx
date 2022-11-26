'use client'
import React from 'react'
import { Header } from '../../components'
import { Canvas } from '../../components/Canvas'

export default function ArtPage() {
  return (
    <div className="flex flex-col items-center gap-8">
      <Header title="art" />
      <Canvas />
    </div>
  )
}
