"use client"
import React, { useState } from 'react';
import { ChevronRight, ChevronDown, DraftingCompass, HandCoins } from 'lucide-react';
import Link from 'next/link';

// Define CollapsibleContent component
const CollapsablePurchases = ({ children }) => (
  <div className='text-xs '>
    {children}
  </div>
);

export default function sbPurchasesDd() {
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
        <HandCoins className='p-1' />
        <span className='ms-1 pt-0.5 uppercase font-semibold text-xs'>Purchases</span>
        {/* Chevron */}
        <div className='flex-grow'></div>
        {isExpanded ? <ChevronDown className='p-1' /> : <ChevronRight className='p-1' />}
      </div>
      {isExpanded && (
        <CollapsablePurchases>
          <Link href='/dashboard/purchases/purchaseOrders' className='flex px-9 py-2 w-full text-slate-300 rounded-lg hover:bg-slate-800 focus:ring-1 focus:outline-none focus:ring-slate-500'>Purchase Orders</Link>
          <Link href='/dashboard/purchases/purchasesRequests' className='flex px-9 py-2 w-full text-slate-300 rounded-lg hover:bg-slate-800 focus:ring-1 focus:outline-none focus:ring-slate-500'>Purchase Requests</Link>
          <Link href='/dashboard/purchases/suppliers' className='flex px-9 py-2 w-full text-slate-300 rounded-lg hover:bg-slate-800 focus:ring-1 focus:outline-none focus:ring-slate-500'>Manage Suppliers</Link>
        </CollapsablePurchases>
      )}
    </div>
  );
}
