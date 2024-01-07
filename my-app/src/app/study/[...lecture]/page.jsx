'use client'
import React from 'react'

export default function page({params}) {
  return (
    <div>
        <h1>Lectures 1</h1>
        <h2>{params.lecture[0]}</h2>
    </div>
  )
}
