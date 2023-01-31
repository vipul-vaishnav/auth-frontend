import { useState, useEffect } from 'react'
import axios from 'axios';

export type User = {
  id: string
  name: string
  email: string
}

const BASE_URL = import.meta.env.VITE_BASE_URL
axios.defaults.withCredentials = true

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState<User | null>(null)
  const [checking, setChecking] = useState(true)

  const foo = async () => {
    try {
      const res = await axios.get(BASE_URL + "/api/v1/users/me", { withCredentials: true })
      setUser(res.data.data.user)
      setIsLoggedIn(true)
    } catch (error) {
      console.log(error)
    } finally {
      setChecking(false)
    }
  }

  useEffect(() => {
    foo()
  }, [])

  return [isLoggedIn, setIsLoggedIn, user, checking]
}
