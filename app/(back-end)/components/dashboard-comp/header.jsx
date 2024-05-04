import { Bell } from 'lucide-react';
import React from 'react'
import QuickCreateButton from './header-comp/quickCreateButton';
import UserDd from './header-comp/UserDd';
import UsersSettings from './header-comp/usersSettings';
import SearchInput from './header-comp/searchInput';

export default function Header() {
  return (
    <div className="bg-slate-100 shadow h-12 flex items-center justify-between px-5">
      <div className="flex">
        <div className="flex gap-5">
          <SearchInput/>
        </div>
      </div>
      <div className="flex">
        <div className="flex border-l pl-3 pr-2 border-slate-300">
          <QuickCreateButton/>
        </div>
        <div className="flex justify-center items-center pr-2 border-slate-300">
          <Bell className="flex p-1 items-center w-6 h-6  rounded-full hover:bg-slate-300 focus:ring-1 focus:outline-none focus:ring-slate-400"/>
        </div>
        <div className="flex justify-center items-center border-r pr-2 border-slate-300">
           <UsersSettings/>
        </div>
        <div className="flex justify-center items-center pl-3">
                <UserDd/>
        </div>
      </div>
    </div>
  );
}
