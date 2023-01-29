import React from 'react'
import { useOutletContext } from "react-router-dom"
import { User as UserType } from '../hooks/useAuth'

type OutletProps = {
  user: UserType | null
}

const User = () => {
  const { user } = useOutletContext<OutletProps>();

  return (
    <div>
      <h1 className="text-center font-bold my-6 text-indigo-600">{user?.name}</h1>
    </div>
  )
}

export default User