"use client";
import LoginForm from "@/components/auth/LoginForm";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

export default function Login() {
 const { data: session, status } = useSession();
// const session =getServerSession(authOptions); //server
  if (status === "loading") {
    return <p>Loading User please wait...</p>;
  }
  if (status === "authenticated") {
    redirect("/dashboard/home/overview");
  }
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div style={{ backgroundImage: "url('/background.jpg')", backgroundSize: 'cover' }} className="flex flex-col items-center justify-start min-h-screen">
      <img className=" mt-10" width="200" height="200" src="/companyLogo.png" alt="User Photo"/>
      <h2 className="mb-5 uppercase font-bold border-b-4 text-slate-500 pt-4 pb-3 border-rose-600 text-xl">Astron Management System</h2>
      {/* Login Form */}
        <div className="w-full bg-white rounded-lg shadow-2xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-slate-600 text-xl font-bold leading-tight tracking-tight md:text-2xl dark:text-white text-center">
              Sign in to your account
            </h1>
            <LoginForm />
          </div>
        </div>
      </div>
    </section>
  );
}
