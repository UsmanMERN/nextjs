'use client'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const initialState = { username: "", email: "", password: "", }

export default function Signup() {
    const router = useRouter()

    const [isLoading, setIsLoading] = useState(false)
    const [buttonDisabled, setButtonDisabled] = useState(false)
    const [user, setUser] = useState(initialState)

    const handleSignUp = async () => {
        try {
            setIsLoading(true)
            const response = await axios.post("/api/users/signup", user)
            console.log('sign up success')
            setIsLoading(false)
            router.push("/login")
        } catch (error: any) {
            console.error("sign up Failed");
            toast.error("Signup error")
            setIsLoading(false)
        }
    }

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }
    }, [user])
    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-2'>
            <h1>{isLoading ? "processing" : "Signup"}</h1>
        </div>
    )
}