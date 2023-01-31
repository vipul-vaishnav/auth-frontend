import React, { Dispatch, SetStateAction, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { User as UserType } from '../hooks/useAuth'
import axios from 'axios'

const BASE_URL = import.meta.env.VITE_BASE_URL

type OutletProps = {
  user: UserType | null
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>
}

const User = () => {
  const { user, setIsLoggedIn } = useOutletContext<OutletProps>()
  const [loading, setLoading] = useState(false)

  const handleLogout = async () => {
    setLoading(true)
    try {
      await axios.post(BASE_URL + '/api/v1/users/logout')
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
      setIsLoggedIn(false)
    }
  }

  return (
    <div>
      <h1 className="text-center font-bold my-6 text-indigo-600">{user?.name}</h1>

      <div className="flex items-center justify-center">
        <button
          onClick={handleLogout}
          className={`btn btn-error gap-2 mt-4 font-medium ${loading ? 'loading' : ''}`}
          disabled={loading}
        >
          Logout
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default User
