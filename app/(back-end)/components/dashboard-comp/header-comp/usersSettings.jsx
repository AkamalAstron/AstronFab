import { userRoundplus, UserCog2 } from 'lucide-react'
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { UserRoundPlus } from 'lucide-react'
import Link from 'next/link'
  

export default function UsersSettings() {
  return (
    <div className='flex justify-center items-center'> 
        
        <DropdownMenu>
  <DropdownMenuTrigger><UserCog2 className="flex p-1 items-center justify-center w-6 h-6  rounded-full hover:bg-slate-300 focus:ring-1 focus:outline-none focus:ring-slate-400"/></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Users Settings</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem><Link href="/dashboard/users/addUser"><UserRoundPlus className='p-1'/><span className='p-2 text-xs'>Add User</span> </Link></DropdownMenuItem>
    <DropdownMenuItem><Link href="/dashboard/users/manageUsers"><UserRoundPlus className='p-1'/><span className='p-2 text-xs'>Manage Users</span> </Link></DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

    </div>
  )
}
