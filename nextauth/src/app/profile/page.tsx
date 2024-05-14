"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

interface UserData {
  _id: string;
  username: string;
  email: string;
  isVerified: boolean;
  isAdmin: boolean;
  __v: number;
  verifyToken: string;
  verifyTokenExpiry: string;
}

export default function ProfilePage() {
  const router = useRouter();
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const response = await axios.post<{ data: UserData }>("/api/users/me");
      const userDataFromResponse = response.data.data;
      setUserData(userDataFromResponse);
      // console.log('user data', userDataFromResponse);
    } catch (error) {
      console.error("Error fetching user data:", error);
      toast.error("Failed to fetch user data");
    }
  };

  const handleLogout = async () => {
    try {
      const response = await axios.get("/api/users/logout");
      setUserData(null);
      router.push("/login");
      toast.success("logout successful")
      return
    } catch (error) {
      console.error("Error logging out:", error);
      toast.error("Failed to logout");
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Profile</h1>
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
        {userData ? (
          <div>
            <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">User Information</p>
            <div className="mt-4">
              <p><strong className="text-gray-700 dark:text-gray-300">Name:</strong> {userData.username}</p>
              <p><strong className="text-gray-700 dark:text-gray-300">Email:</strong> {userData.email}</p>
            </div>
          </div>
        ) : (
          <p>Loading user data...</p>
        )}
        <div className="mt-6 flex justify-end">
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
          >
            Logout
          </button>
        </div>
        <div className="mt-6">
          <Link href="/edit-profile">
            Edit Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
