"use client"
import React, { useState } from 'react';
import { ChevronRight, ChevronDown, DraftingCompass } from 'lucide-react';
import Link from 'next/link';

// Define CollapsibleContent component
const CollapsableProjects = ({ children }) => (
  <div className='text-xs '>
    {children}
  </div>
);

export default function SbProjectsDd() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='cursor-pointer p-2'>
      <div
        className='flex items-center px-2 py-1.5 w-full text-slate-300 rounded-lg hover:bg-slate-800 focus:ring-1 focus:outline-none focus:ring-slate-500'
        onClick={handleToggle}
      >
        <DraftingCompass className='p-1' />
        <span className='ms-1 pt-0.5 uppercase font-semibold text-xs'>Projects</span>
        {/* Chevron */}
        <div className='flex-grow'></div>
        {isExpanded ? <ChevronDown className='p-1' /> : <ChevronRight className='p-1' />}
      </div>
      {isExpanded && (
        <CollapsableProjects>
          <Link href="/dashboard/projects/clients" className='flex px-9 py-2 w-full text-slate-300 rounded-lg hover:bg-slate-800 focus:ring-1 focus:outline-none focus:ring-slate-500 '>Manage Clients</Link>
          <Link href="/dashboard/projects/projectsList" className='flex px-9 py-2 w-full text-slate-300 rounded-lg hover:bg-slate-800 focus:ring-1 focus:outline-none focus:ring-slate-500 '>Manage Projects</Link>
          <Link href="/dashboard/projects/orders" className='flex px-9 py-2 w-full text-slate-300 rounded-lg hover:bg-slate-800 focus:ring-1 focus:outline-none focus:ring-slate-500 '>Manage Orders</Link>
          <Link href="/dashboard/projects/scopeOfOrders" className='flex px-9 py-2 w-full text-slate-300 rounded-lg hover:bg-slate-800 focus:ring-1 focus:outline-none focus:ring-slate-500 '>Scope of orders</Link>
          <Link href="/dashboard/projects/materialRequests" className='flex px-9 py-2 w-full text-slate-300 rounded-lg hover:bg-slate-800 focus:ring-1 focus:outline-none focus:ring-slate-500 '>Material Requests</Link>
          <Link href="/dashboard/projects/progress" className='flex px-9 py-2 w-full text-slate-300 rounded-lg hover:bg-slate-800 focus:ring-1 focus:outline-none focus:ring-slate-500'>Progress & Follow-up</Link>
        </CollapsableProjects>
      )}
    </div>
  );
}
