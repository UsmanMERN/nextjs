"use client"
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function VerifyEmail(): JSX.Element {
    const router = useRouter();

    const [token, setToken] = useState<string>("");
    const [verified, setVerified] = useState<boolean>(false);
    const [error, setError] = useState<any>(false);

    const verifyUserEmail = async () => {
        try {
            await axios.post("/api/users/verifyemail", { token });
            setVerified(true);
        } catch (error: any) {
            setError(error);
            console.error(error.response.data);
        }
    }

    useEffect(() => {
        const urlToken = window.location.search.split("=")[1];
        setToken(urlToken || "");
        // console.log('urlToken', urlToken)
        // const {query}=router
        // const urlToken=query.token
    }, []);

    useEffect(() => {
        if (token.length > 0) {
            verifyUserEmail();
        }
    }, [token]);

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="max-w-md w-full p-8 dark:bg-white bg-slate-950 shadow-md rounded-lg">
                <h2 className="text-2xl font-semibold text-center mb-6 text-white dark:text-gray-700">Verify Email</h2>
                {verified && (
                    <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4">
                        Email verified successfully!
                    </div>
                )}
                <div className="">
                    <p className='block text-sm font-medium text-white dark:text-gray-700'>Token</p>
                    <p className='block text-sm font-medium text-white dark:text-gray-700 my-5 overflow-hidden'>{token ? token : "No token"}</p>
                </div>
                <button onClick={verifyUserEmail} className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" >
                    Verify
                </button>
            </div>
        </div>
    );
}
