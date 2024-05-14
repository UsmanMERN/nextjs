"use client"
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const initialState = { username: "", email: "", password: "" };

export default function Signup() {
    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(initialState);

    const handleSignUp = async () => {
        try {
            setIsLoading(true);

            // Validation
            if (user.email.length === 0 || user.password.length === 0 || user.username.length === 0) {
                throw new Error("All fields are required");
            }

            const response = await axios.post("/api/users/signup", user)
            console.log('response', response);
            console.log('sign up success');
            toast.success("Sign up successful");
            setIsLoading(false);
            return router.push("/login");
        } catch (error: any) {
            console.error("Sign up failed", error.message);
            toast.error("Sign up error");
            setIsLoading(false);
        }
    }

    const handleChange = (e: any) => {
        const { id, value } = e.target;
        setUser({ ...user, [id]: value });
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
                <h1 className="text-3xl mb-4 font-bold text-center">Sign Up</h1>
                <div className="mb-4">
                    <label htmlFor="username" className="block text-sm font-semibold mb-2">Username</label>
                    <input type="text" id="username" value={user.username} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
                    <input type="email" id="email" value={user.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200" />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-sm font-semibold mb-2">Password</label>
                    <input type="password" id="password" value={user.password} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200" />
                </div>
                <button disabled={isLoading} onClick={handleSignUp} className="w-full flex justify-center align-center bg-blue-500 dark:bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                    {isLoading ? (
                        <svg className="animate-spin h-5 w-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 4.418 3.582 8 8 8v-4c-2.268 0-4.355-.94-5.854-2.474l1.708-1.225zM20 12a8 8 0 01-8 8v4c4.418 0 8-3.582 8-8h-4zm-2-5.291a7.96 7.96 0 015.854 2.474l-1.708 1.225A6.002 6.002 0 0012 6v4h4z"></path>
                        </svg>
                    ) : (
                        "Sign Up"
                    )}
                </button>
                <p className=' mt-2'>Already have an account <Link href={"/login"} className=' border-b-2'>Login</Link></p>
            </div>
            <Toaster position="top-center"
                reverseOrder={false}
                gutter={8}
                containerClassName=""
                containerStyle={{}}
                toastOptions={{
                    // Define default options
                    className: '',
                    duration: 5000,
                    style: {
                        background: '#363636',
                        color: '#fff',
                    },

                    // Default options for specific types
                    success: {
                        duration: 3000,
                    },
                }} />
        </div>
    );
}
