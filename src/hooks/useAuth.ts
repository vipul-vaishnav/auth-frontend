import { useState, useEffect } from 'react'
import axios from 'axios';

export type User = {
  id: string
  name: string
  email: string
}

axios.defaults.withCredentials = true

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState<User | null>(null)
  const [checking, setChecking] = useState(true)

  useEffect(() => {
    const foo = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/v1/users/me", { withCredentials: true })
        setUser(res.data.data.user)
        setIsLoggedIn(true)
      } catch (error) {
        console.log(error)
      } finally {
        setChecking(false)
      }
    }

    foo()
  }, [])

  return [isLoggedIn, user, checking]
}
