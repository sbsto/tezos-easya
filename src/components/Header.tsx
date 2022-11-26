import React from 'react'

interface HeaderProps {
  title: string
}

export const Header = (props: HeaderProps) => {
  return (
    <h1 className="mt-8 text-center text-6xl font-bold">_{props.title}_</h1>
  )
}
