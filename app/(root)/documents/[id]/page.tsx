import Collaborative from '@/components/Collaborative'
import { Editor } from '@/components/editor/Editor'
import Header from '@/components/Header'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import React from 'react'

const Document = () => {
  return (
    <main className='flex w-full flex-col items-center  '>
        
    <Collaborative/>
    </main>
  )
}

export default Document