import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
  import { Boxes, DraftingCompass, HandCoins, Plus } from "lucide-react";
  import React from 'react';
  
  export default function QuickCreateButton() {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Plus className="flex p-1 items-center w-6 h-6 rounded-full hover:bg-slate-300 focus:ring-1 focus:outline-none focus:ring-slate-400"/>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-full divide-y divide-gray-200">
          <DropdownMenuLabel className="text-gray-900 px-4 py-2 text-sm font-medium">Quick Create</DropdownMenuLabel>
          <div className="py-1">
            <div className="grid grid-cols-3 gap-4 p-4">
              <div className="flex flex-col flex-grow border-r border-gray-200">
              <h4 className="flex items-center text-sm text-slate-500">
                <DraftingCompass className="p-1"/>
                Projects
              </h4>
                <DropdownMenuItem className="cursor-pointer text-xs"><Plus className="p-2"/>New Client</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer text-xs"><Plus className="p-2"/>New Project</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer text-xs"><Plus className="p-2"/>Add Order</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer text-xs"><Plus className="p-2"/>Add Order Scope</DropdownMenuItem>
              </div>
              <div className="flex flex-col flex-grow border-r border-gray-200">
              <h4 className="flex items-center text-sm text-slate-500">
                <HandCoins className="p-1"/>
                Purchases
              </h4>
                <DropdownMenuItem className="cursor-pointer text-xs"><Plus className="p-2"/>New supplier</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer text-xs"><Plus className="p-2"/>Create Purchase request</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer text-xs"><Plus className="p-2"/>Create Purchase order</DropdownMenuItem>
              </div>
              <div className="flex flex-col flex-grow">
              <h4 className="flex items-center text-sm text-slate-500">
                <Boxes className="p-1"/>
                Warehouses
              </h4>
                <DropdownMenuItem className="cursor-pointer text-xs"><Plus className="p-2"/>Add Category</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer text-xs"><Plus className="p-2"/>Add Item</DropdownMenuItem>
              </div>
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }
  