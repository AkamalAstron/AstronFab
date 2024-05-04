"use client";
import { useRouter } from "next/navigation"; // Keeping this import as per your request
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RegisterForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [emailErr, setEmailErr] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);

  // State variables for password criteria
  const [hasMinLength, setHasMinLength] = useState(false);
  const [hasUppercase, setHasUppercase] = useState(false);
  const [hasLowercase, setHasLowercase] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasSpecialChar, setHasSpecialChar] = useState(false);

  const password = watch("password", "");
  const confirmPassword = watch("confirmPassword", "");

  const [passwordTouched, setPasswordTouched] = useState(false);

  useEffect(() => {
    // Update the state for each password criterion
    setHasMinLength(password.length >= 8);
    setHasUppercase(/[A-Z]/.test(password));
    setHasLowercase(/[a-z]/.test(password));
    setHasNumber(/\d/.test(password));
    setHasSpecialChar(/[@$!%*?&]/.test(password));
    setPasswordMatch(password === confirmPassword);
  
    // Set passwordTouched to true if the user starts typing
    setPasswordTouched(password.length > 0);
  }, [password, confirmPassword]);
  

  
  async function onSubmit(data) {
    if (!hasMinLength || !hasUppercase || !hasLowercase || !hasNumber || !hasSpecialChar) {
      toast.error('Please ensure your password meets all the criteria.');
      return;
    }

    if (!passwordMatch) {
      toast.error('Passwords do not match.');
      return;
    }

    setPasswordMatch(true);
    delete data.confirmPassword;

    try {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      setLoading(true);
      const response = await fetch(`${baseUrl}/api/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (response.ok) {
        setLoading(false);
        toast.success("User Created Successfully, Contact Admin for Activation ");
        reset();
        setTimeout(() => {
          router.push('/login');
        }, 3000);
      } else {
        setLoading(false);
        if (response.status === 409) {
          setEmailErr("User with this Email already exists");
          toast.error("User with this Email already exists");
        } else {
          // Handle other errors
          console.error("Server Error:", responseData.message);
          toast.error("Oops Something Went wrong");
        }
      }
    } catch (error) {
      setLoading(false);
      console.error("Network Error:", error);
      toast.error("Something Went wrong, Please Try again");
    }
  }

  return (
    <>
    <ToastContainer position="top-center"/>
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
      
      
      <div>
        <label
          htmlFor="firstName"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          First Name
        </label>
        <input
          {...register("firstName", { required: true })}
          type="text"
          name="firstName"
          id="firstName"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="John Doe"
          required=""
        />
        {errors.firstName && (
          <small className="text-red-600 text-sm ">
            This field is required
          </small>
        )}
      </div>


      <div>
        <label
          htmlFor="lastName"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Last Name
        </label>
        <input
          {...register("lastName", { required: true })}
          type="text"
          name="lastName"
          id="lastName"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="John Doe"
          required=""
        />
        {errors.lastName && (
          <small className="text-red-600 text-sm ">
            This field is required
          </small>
        )}
      </div>


      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Email
        </label>
        <input
          {...register("email", { required: true })}
          type="email"
          name="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@company.com"
          required=""
        />
        {errors.email && (
          <small className="text-red-600 text-sm ">
            This field is required
          </small>
        )}
        <small className="text-red-600 text-sm ">{emailErr}</small>
      </div>
      <div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Password
          </label>
          <input
            {...register("password", { required: true })}
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required=""
            onKeyUp={() => setPasswordTouched(true)} // Set passwordTouched to true when the user starts typing
          />
          {/* Render the checklist only if the user has started typing */}
          {passwordTouched && (
            <ul className="list-disc pl-6 mt-2">
              <li className={hasMinLength ? "text-green-600" : "text-red-600"}>
                At least 8 characters
              </li>
              <li className={hasUppercase ? "text-green-600" : "text-red-600"}>
                At least one uppercase letter
              </li>
              <li className={hasLowercase ? "text-green-600" : "text-red-600"}>
                At least one lowercase letter
              </li>
              <li className={hasNumber ? "text-green-600" : "text-red-600"}>
                At least one number
              </li>
              <li className={hasSpecialChar ? "text-green-600" : "text-red-600"}>
                At least one special character (@$!%*?&)
              </li>
            </ul>
          )}
        </div>
      <div>
        <label
          htmlFor="confirmPassword"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Confirm Password
        </label>
        <input
          {...register("confirmPassword", { required: true })}
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required=""
        />
        {!passwordMatch && (
          <small className="text-red-600 text-sm ">
            Passwords do not match
          </small>
        )}
      </div>
      {loading ? (
        <button
          disabled
          type="button"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
        >
          <svg
            aria-hidden="true"
            role="status"
            className="inline w-4 h-4 mr-3 text-white animate-spin"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="#E5E7EB"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentColor"
            />
          </svg>
          Creating please wait...
        </button>
      ) : (
        <button
          type="submit"
          className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Sign Up
        </button>
      )}

<div className="flex justify-between">
      <p className="text-xs font-light text-gray-500 dark:text-gray-400">
        Back to {" "}
        <a
          href="/"
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          Home page
        </a>
      </p>
      <p className="text-xs font-light text-gray-500 dark:text-gray-400">
        Already have account {" "}
        <a
          href="/login"
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          Login
        </a>
      </p>
      </div>
    </form>
    </>
  );
}
