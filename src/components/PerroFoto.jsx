import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { Context } from "../context/UseContext"

const PerroFoto = ({ letra }) => {
  const context = useContext(Context)

  const { setFoto } = context

  const handleClick = () => {
    setFoto(letra)
  }
  return (
    <Link
      to='/foto'
      onClick={handleClick}
      className='bg-black flex justify-center w-72 rounded-xl cursor-pointer'
    >
      <div>
        <label className='text-white text-4xl font-bold uppercase cursor-pointer'>
          {letra}
        </label>
      </div>
    </Link>
  )
}

export default PerroFoto
