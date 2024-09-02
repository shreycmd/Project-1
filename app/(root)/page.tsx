import Adddocumentbtn from '@/components/Adddocumentbtn'
import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { SignedIn, UserButton } from '@clerk/nextjs'
import { currentUser, EmailAddress } from '@clerk/nextjs/server'

import Image from 'next/image'
import { redirect } from 'next/navigation'
import React from 'react'
const document=[]
const Home = async () => {
  const clerkuser=await currentUser();
  if(!clerkuser){redirect("/sign-in")}
  return (
    <main className='home-container'>
      <Header className='sticky left-0 top-0'>
        <div className='flex items-center gap-2 lg:gap-2'>
          notification
          <SignedIn><UserButton/></SignedIn>
        </div>
      </Header>
      
 {document.length>0?(
 <div></div>):(<div className='document-list-empty'>
  <Image src="/assets/icons/doc.svg" alt='empty'
  className='mx-auto' width={40}
  height={40}/>
    <Adddocumentbtn userId={clerkuser.id}
    email={clerkuser.emailAddresses[0].emailAddress}/>
    </div>)}
    </main>
  )
}

export default Home