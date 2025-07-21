"use client"

import { useState } from "react"

const useTogglePassword = () => {
  const [togglePassword, setTogglePassword] = useState<boolean>(false)

  const handleTogglePassword = () => {
    setTogglePassword(!togglePassword)
  }

  return { togglePassword, handleTogglePassword }
}

export default useTogglePassword