"use client"
import React, { useState } from 'react';
import { ChevronRight, ChevronDown, DraftingCompass, Boxes } from 'lucide-react';
import Link from 'next/link';

// Define CollapsibleContent component
const CollapsibleWarehouses = ({ children }) => (
  <div className='text-xs '>
    {children}
  </div>
);

export default function SbWarehousesDd() {
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
        <Boxes className='p-1' />
        <span className='ms-1 pt-0.5 uppercase font-semibold text-xs'>Warehouses</span>
        {/* Chevron */}
        <div className='flex-grow'></div>
        {isExpanded ? <ChevronDown className='p-1' /> : <ChevronRight className='p-1' />}
      </div>
      {isExpanded && (
        <CollapsibleWarehouses>
          <Link href="/dashboard/warehouses/warehouses" className='flex px-9 py-2 w-full text-slate-300 rounded-lg hover:bg-slate-800 focus:ring-1 focus:outline-none focus:ring-slate-500 '>Manage warehouse</Link>
          <Link href="/dashboard/warehouses/categories" className='flex px-9 py-2 w-full text-slate-300 rounded-lg hover:bg-slate-800 focus:ring-1 focus:outline-none focus:ring-slate-500 '>Categories</Link>
          <Link href="/dashboard/warehouses/items" className='flex px-9 py-2 w-full text-slate-300 rounded-lg hover:bg-slate-800 focus:ring-1 focus:outline-none focus:ring-slate-500 '>Items</Link>
          <Link href="/dashboard/warehouses/units" className='flex px-9 py-2 w-full text-slate-300 rounded-lg hover:bg-slate-800 focus:ring-1 focus:outline-none focus:ring-slate-500 '>Units</Link>
          <Link href="/dashboard/warehouses/adjustments" className='flex px-9 py-2 w-full text-slate-300 rounded-lg hover:bg-slate-800 focus:ring-1 focus:outline-none focus:ring-slate-500 '>Adjustments</Link>
        </CollapsibleWarehouses>
      )}
    </div>
  );
}
