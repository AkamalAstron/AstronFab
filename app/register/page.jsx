//app/register/page.jsx
import RegisterForm from "@/components/auth/RegisterForm";

export default function Register() {
  return (
  <section className="bg-gray-50 dark:bg-gray-900">
      <div style={{ backgroundImage: "url('/background.jpg')", backgroundSize: 'cover' }} className="gap-36 flex flex-row-reverse items-center justify-center min-h-screen">
      <div className="flex flex-col justify-center items-center">
      <img className="flex flex-col mt-10" width="350" height="200" src="/companyLogo.png" alt="User Photo"/>
      <h2 className=" flex flex-col justify-center items-centermb-5 uppercase font-bold border-b-4 text-slate-500 pt-4 pb-3 border-rose-600 text-xl">Astron Management System</h2>
      
      <div className="flex flex-col mt-5 text-xs">
      <p>After sign up, please contatct administrator with your credentials:</p>
      <p>  - First Name</p>
      <p>  - Last Name</p>
      <p>  - Email</p>
      <p>at ams.admin@astron-eg.com to activate your account with-in 48 hours</p>
      </div>
      
      </div>
      
      
      {/* Login Form */}

        <div className="w-full bg-white rounded-lg shadow-2xl dark:border  sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-slate-600 text-xl font-bold leading-tight tracking-tight md:text-2xl dark:text-white text-center">
              Please sign up for new account
            </h1>
            <RegisterForm />
          </div>
        </div>
      </div>
    </section>
  );
}
