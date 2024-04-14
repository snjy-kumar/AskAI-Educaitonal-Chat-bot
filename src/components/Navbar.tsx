import Link from 'next/link'
import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className="w-full m-0 flex border-b-2">
      <div className="bg-slate-500 hover:shadow-2xl cursor-pointer w-fit rounded-xl px-2 py-1 mx-4 my-2 ml-8 hover:text-slate-500 hover:bg-white">
       <Link href="/">
        <h1 className="text-xl font-semibold">Ask AI</h1>
        <p className="text-xs">Educational</p>
        </Link>
      </div>
      <div className="bg-transparent flex items-center justify-between w-full">
        <ul className="flex gap-8 bg-transparent ml-24">
          <li className="cursor-pointer px-2 py-1 bg-transparent text-lg font-medium hover:underline ">
            <Link href="/">Home</Link>
          </li>
          <li className="cursor-pointer px-2 py-1 bg-transparent text-lg font-medium hover:underline ">
            <Link href="#projects">Projects</Link>
          </li>
          <li className="cursor-pointer px-2 py-1 bg-transparent text-lg font-medium hover:underline ">
            <Link href="#service">Services</Link>
          </li>
          <li className="cursor-pointer px-2 py-1 bg-transparent text-lg font-medium hover:underline ">
            <Link href="#about">About</Link>
          </li>
          <li className="cursor-pointer px-2 py-1 bg-transparent text-lg font-medium hover:underline ">
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
        <div className="flex gap-4 mr-8 ">
          <button className="text-xl bg-sky-400 px-4 py-1 rounded-lg  m-2 font-medium hover:bg-white hover:text-sky-400 ">
            <Link href="/login">Login</Link>
          </button>
          <button className="text-xl bg-white px-4 py-1 rounded-lg  hover:bg-sky-500 text-sky-400 m-2 hover:text-white font-medium">
            <Link href="/signup">Sign Up</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar