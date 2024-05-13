'use client'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const initialState = { username: "", email: "", password: "" }

export default function Signup() {
    const router = useRouter()

    const [isLoading, setIsLoading] = useState(false)
    const [buttonDisabled, setButtonDisabled] = useState(true)
    const [user, setUser] = useState(initialState)

    const handleSignUp = async () => {
        try {
            setIsLoading(true)
            const response = await axios.post("/api/users/signup", user)
            console.log('response', response)
            console.log('sign up success')
            setIsLoading(false)
            router.push("/login")
        } catch (error) {
            console.error("sign up Failed", error)
            toast.error("Signup error")
            setIsLoading(false)
        }
    }

    const handleChange = (e: any) => {
        const { id, value } = e.target
        setUser({ ...user, [id]: value })
    }

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }
    }, [user])

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
                <button disabled={buttonDisabled} onClick={handleSignUp} className="w-full bg-blue-500 dark:bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Sign Up</button>
            </div>
        </div>
    )
}
