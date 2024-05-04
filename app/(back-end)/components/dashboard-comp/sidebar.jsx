import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SbProjectsDd from './sidebar-comp/sbProjectsDd';
import SbPurchasesDd from './sidebar-comp/sbPurchasesDd';
import SbWarehousesDd from './sidebar-comp/sbWarehousesDd';
import SbReportsDd from './sidebar-comp/sbReportsDd';
import { Home, LogOut } from 'lucide-react';
import { signOut } from 'next-auth/react';

export default function Sidebar() {
 return (
 <div className="w-56 min-w-56 min-h-screen bg-sky-950 shadow-md shadow-slate-800 text-slate-50 flex flex-col"> 
{/* Sidebar Top */}
 <div className="mt-5 mb-5">
 <Link href="https://www.astronsteel.com"className="flex items-center justify-center mb-3">
 <Image src="/logoWhite.png"alt="user" width={156} height={0} />
 </Link>
 <div className="flex text-center justify-center">
 < h2 className="text-xs uppercase">Astron Management System</h2>
 </div>
 </div>
 {/* Sidebar links and buttons */}
 <div className="flex flex-col flex-grow">
 <div className="flex p-2">
 <Link
 href="/dashboard/home"
 className="flex items-center px-5 py-1.5w-full text-slate-300 bg-blue-800 rounded-lg border border-blue-800 hover:bg-blue-900 focus:ring-1 focus:outline-none focus:ring-blue-600"
 >
 <Home className="p-1" />
 <span className="ms-1 pt-0.5uppercase font-semibold text-sm">home</span>
 </Link>
 </div>
 <SbProjectsDd />
 <SbPurchasesDd />
 <SbWarehousesDd />
 <SbReportsDd />
 <div className ="flex p-2">
 <Link
 href="/dashboard/documents"
 className="flex items-center px-2 py-1.5w-full text-slate-300 rounded-lg hover:bg-slate-800 focus:ring-1 focus:outline-none focus:ring-slate-500 "
 >
 <Home className="p-1" />
 <span className="ms-1 pt-0.5uppercase font-semibold text-xs">Documents</span>
 </Link>
 </div>
 </div>
 
{/* Sidebar Bottom */}
 <div className="flex mt-auto">
 {/* Logout */}
 <div className="flex justify-center w-full mb-2">
 <button onClick={() => signOut()}
 
className="flex items-center justify-center py-1.5w-full rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 focus:ring-1 focus:outline-none focus:ring-slate-600"
 >
 <LogOut className=" p-1" /> <p className="uppercase px-0.5text-sm">Logout</p>
 </button>
 </div>
 </div>
 </div>
 );
}
