"use client"
import React from 'react';
import Header from '../components/dashboard-comp/header';
import Sidebar from '../components/dashboard-comp/sidebar';
import { useSession } from 'next-auth/react';
import Login from '@/app/login/page';

export default function Layout({ children }) {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <p>Loading User Please Wait...</p>;
  }
  if (status === "unauthenticated") {
    return <Login />;
  }
  return (
    <div className="flex">
      <Sidebar/>
      <main className="w-full" style={{ height: '100vh', overflow: 'hidden' }}>
        <div className="sticky">
          <Header/>
        </div>
        <div className="p-5 w-full" style={{ height: 'calc(100vh - 4rem)', overflowY: 'scroll' }}>
          {children}
        </div>
      </main>
    </div>
  );
}
