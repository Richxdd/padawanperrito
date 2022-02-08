import React, { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { Context } from "../context/UseContext"

const Letras = ({ letra }) => {
  const context = useContext(Context)

  const { setLetras } = context

  const handleClick = () => {
    setLetras(letra)
  }

  return (
    <Link
      to='/letra'
      onClick={handleClick}
      className='w-24 h-24 lg:w-28 lg:h-28 bg-black flex justify-center items-center cursor-pointer rounded-2xl'
    >
      <div>
        <label className='text-white text-5xl uppercase font-bold cursor-pointer'>
          {letra}
        </label>
      </div>
    </Link>
  )
}
export default Letras
