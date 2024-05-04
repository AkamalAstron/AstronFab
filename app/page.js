export default function Home() {
  return (
    <div style={{ backgroundImage: "url('/background.jpg')", backgroundSize: 'cover' }} className="flex flex-col items-center justify-start min-h-screen">
      <img className=" mt-10" width="200" height="200" src="/companyLogo.png" alt="User Photo"/>
      <h2 className="uppercase font-bold border-b-4 text-slate-500 pt-4 pb-3 border-rose-600 text-xl">Astron Management System</h2>
      {/* Login Form */}
      <a className="flex" href="/login">Login page</a>
      <a className="flex" href="/register">Signup Page</a>
      <a className="flex" href="/dashboard/home">View dashboard</a>
    </div>
  );
}
