import React, { FormEvent, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios';

const BASE_URL = import.meta.env.BASE_URL

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "", })
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState({ type: "success", message: "", show: false })
  const navigate = useNavigate()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true)

    try {
      const res = await axios.post(BASE_URL + "/api/v1/users/login", formData)
      setAlert({ type: "success", message: res.data.message, show: true })
      navigate("/dashboard")
    } catch (error: any) {
      setAlert({ type: "error", message: error.response.data.message, show: true })
    } finally {
      setLoading(false)
      setTimeout(() => setAlert({ type: "success", message: "", show: false }), 3000)
      setFormData({ email: "", password: "", })
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-zinc-100 shadow-lg rounded-md max-w-xl w-full p-6">
        <h1 className="text-center font-bold mb-6 text-4xl">Login</h1>

        {alert.show ? alert.type === "success" ? <>
          <div className="alert alert-success shadow-lg my-4">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>{alert.message}</span>
            </div>
          </div>
        </> : <>
          <div className="alert alert-error shadow-lg my-4">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>{alert.message}</span>
            </div>
          </div>
        </> : <></>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <label htmlFor="email" className="block mb-2 w-fit">Email</label>
            <input onChange={(e) => {
              setFormData(prev => {
                return { ...prev, email: e.target.value }
              })
            }} value={formData.email} type="email" placeholder="john@doe.com" className="input input-bordered w-full" id="email" />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 w-fit">Password</label>
            <input onChange={(e) => {
              setFormData(prev => {
                return { ...prev, password: e.target.value }
              })
            }} value={formData.password} type="password" placeholder="password" className="input input-bordered w-full" id="password" autoComplete='off' />
          </div>
          <button type="submit" className={`btn btn-primary btn-block gap-2 font-medium ${loading ? "loading" : ""}`} disabled={loading}>Login <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
          </svg>
          </button>
        </form>
        <p className="mt-5">Not have an account yet, <Link className='text-primary' to="/register">Create one</Link></p>
      </div>
    </div>
  )
}

export default Login