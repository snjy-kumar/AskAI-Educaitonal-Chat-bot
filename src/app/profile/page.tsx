"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = useState("nothing");
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me");
    console.log(res.data);
    setData(res.data.data.username);
  };

  return (
    <div>
      <h1 className='text-2xl absolute left-2 top-2 bg-sky-500 rounded-md px-2 cursor-pointer'>Profile</h1>
      <h2 className="p-1 rounded bg-green-500 absolute top-2 right-24 px-4 py-2 z-10">
        {data === "nothing" ? (
            "Nothing"
        ) : (
            <Link href={`/profile/${data}`}>{data}</Link>
        )}
      </h2>
      <hr />
        <div className="flex flex-col mt-16  justify-center items-center py-2">

        <h3>Verify that you are logged in with you real data</h3>
      <button
        onClick={getUserDetails}
        className="bg-green-800 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        GetUser Details
      </button>
      <button className="bg-sky-500 text-white rounded-lg px-2 py-1 mt-2 hover:text-sky-400 hover:bg-white">
        <Link href="/chat">Go to Chat</Link>
      </button>
    </div>
      <button
        onClick={logout}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute right-2 top-2"
      >
        Logout
      </button>
    </div>
  );
}
