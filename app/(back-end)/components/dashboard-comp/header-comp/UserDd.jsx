"use client"
import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LogOut } from 'lucide-react'
import Image from 'next/image';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { generateInitials } from '@/lib/generateInitials';

export default function UserDd() {
  const{data:session, status} = useSession();
  const router = useRouter()
  
  if(status==='loading'){
    return <p>loading user...</p>
  }
  if(status==='unathenticated'){
    router.push('/login')
  }
  
  const email = session?.user?.email ?? '';
  const displayName = session?.user?.name ?? '';
  const initials =generateInitials(session?.user?.name)
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
      {session.user?.image?(
        <Image
        width={64}
        height={32}
        src={session.user?.image}
        alt="logo"
        objectFit="cover"
        objectPosition="center"
      />
      ):(
        <div className="bg-white border-2 border-gray-300 rounded-full min-w-8 min-h-8 flex justify-center items-center">
          {initials}
        </div>
      )}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
      <DropdownMenuLabel className="bg-slate-50 shadow-sm rounded-md">
  <div className="flex items-center p-3">
    <div className="border-2 border-gray-300 rounded-full min-w-16 min-h-16 flex justify-center items-center">
      {session.user?.image?(
        <Image
        width={64}
        height={32}
        src={session.user?.image}
        alt="logo"
        objectFit="cover"
        objectPosition="center"
      />

      ):(
        <div className="bg-white border-2 text-3xl border-gray-300 rounded-full min-w-16 min-h-16 flex justify-center items-center">
          {initials}
        </div>
      )}

    </div>
    <div className="ml-4">
      <div className="flex items-center text-xs mb-1">
        <p className="mr-2 font-bold text-xs">Name:</p>
        <div className='text-xs'>{displayName}</div>
      </div>
      <div className="flex items-center text-xs mb-1">
        <p className="mr-2 font-bold text-xs">Email:</p>
        <div className='text-xs'>{email}</div>
      </div>
    </div>
  </div>
</DropdownMenuLabel>
      <div className="flex items-center justify-between mt-2">
        <Link href="/dashboard/users/userAccount" className="px-2 text-xs text-blue-800">My Account</Link>
        <button onClick={() => signOut()} className="flex items-center px-2 text-xs text-blue-800">
  <LogOut className="p-1 mr-1"/> {/* Add margin-right to separate the icon from the text */}
  <div>Logout</div>
</button>

      </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
