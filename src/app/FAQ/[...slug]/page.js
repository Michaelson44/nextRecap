"use client"

import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {

  const {slug} = useParams();

  return (
    <div>This is the slug page ....  {slug}</div>
  )
}

export default page