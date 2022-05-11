import React from 'react'
import Navbar from './Navbar'
import { signIn } from "next-auth/react"

const Login = () => {
  return (
    <div>
        <Navbar/>
        <div className="container mx-auto my-8">
            <div className="h-12 ">
                <button onClick={signIn} className="rounded bg-blue-600 text-white px-2 py-2 font-semibold">
                    Sign In
                </button>
            </div>
        </div>
    </div>
  )
}

export default Login