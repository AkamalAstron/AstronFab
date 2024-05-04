"use client"
import React, { useState } from 'react';
import { ChevronRight, ChevronDown, DraftingCompass, Notebook, Book, BookOpenText } from 'lucide-react';
import Link from 'next/link';

// Define CollapsibleContent component
const CollapsibleReports = ({ children }) => (
  <div className='text-xs '>
    {children}
  </div>
);

export default function SbReportsDd() {
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
        <Notebook className='p-1' />
        <span className='ms-1 pt-0.5 uppercase font-semibold text-xs'>Reports</span>
        {/* Chevron */}
        <div className='flex-grow'></div>
        {isExpanded ? <ChevronDown className='p-1' /> : <ChevronRight className='p-1' />}
      </div>
      {isExpanded && (
        <CollapsibleReports>
          <Link href="/dashboard/reports/projectsReports" className='flex px-9 py-2 w-full text-slate-300 rounded-lg hover:bg-slate-800 focus:ring-1 focus:outline-none focus:ring-slate-500 '>Projects Reports</Link>
          <Link href="/dashboard/reports/purchasesReports" className='flex px-9 py-2 w-full text-slate-300 rounded-lg hover:bg-slate-800 focus:ring-1 focus:outline-none focus:ring-slate-500 '>Purchases Reports</Link>
          <Link href="/dashboard/reports/warehousesReports" className='flex px-9 py-2 w-full text-slate-300 rounded-lg hover:bg-slate-800 focus:ring-1 focus:outline-none focus:ring-slate-500 '>Warehouse Reports</Link>
        </CollapsibleReports>
      )}
    </div>
  );
}