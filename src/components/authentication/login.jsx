import React, { useState } from 'react'

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  
    const submitHandler = (e)=>{
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#020617]">

      {/* Glass Card */}
      <div className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl rounded-2xl p-10 w-[350px]">

        <h2 className="text-2xl font-bold text-white text-center mb-6">
          Login
        </h2>

        <form onSubmit={submitHandler} className="flex flex-col gap-4">

          {/* Email */}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
            className="bg-transparent border border-white/30 text-white placeholder-gray-300 rounded-full px-4 py-2 outline-none focus:border-emerald-400"
            required
          />

          {/* Password */}
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter password"
            className="bg-transparent border border-white/30 text-white placeholder-gray-300 rounded-full px-4 py-2 outline-none focus:border-emerald-400"
            required
          />

          {/* Button */}
          <button className="mt-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 rounded-full transition duration-300">
            Log in
          </button>

        </form>
      </div>
    </div>
  )
}

export default Login