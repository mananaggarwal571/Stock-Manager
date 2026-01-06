"use client"; 

import Link from 'next/link';
import { LayoutDashboard, Box, UserPlus, LogOut } from 'lucide-react';
import { signOut } from "next-auth/react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r flex flex-col p-4">
      <h1 className="text-3xl font-bold text-indigo-600 mb-8 px-2">Stock-Manager</h1>
      <nav className="space-y-2 flex-1">
        <Link href="/dashboard" className="flex items-center gap-3 p-3 hover:bg-slate-100 rounded-lg">
          <LayoutDashboard size={20} /> Dashboard
        </Link>
        <Link href="/dashboard/products" className="flex items-center gap-3 p-3 hover:bg-slate-100 rounded-lg">
          <Box size={20} /> Inventory
        </Link>
        <Link href="/dashboard/onboard" className="flex items-center gap-3 p-3 hover:bg-slate-100 rounded-lg">
          <UserPlus size={20} /> Add Admin
        </Link>
      </nav>
      
      
      <button 
        onClick={() => signOut({ callbackUrl: "/login" })}
        className="flex items-center gap-3 p-3 text-red-600 hover:bg-red-50 rounded-lg mt-auto w-full"
      >
        <LogOut size={20} /> Logout
      </button>
    </aside>
  );
}