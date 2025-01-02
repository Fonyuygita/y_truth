import { currentUser } from '@clerk/nextjs/server'
import React from 'react'
import Image from 'next/image'
const Guest = async () => {
    const user = await currentUser()
    return (
        <div className='flex items-center my-7'>
            <h2>User: {` ${user?.firstName} ${user?.lastName}`}</h2>
            <Image src={user?.imageUrl!} alt="avatar" width={40} height={50} className='rounded-full' />
        </div>
    )
}

export default Guest
