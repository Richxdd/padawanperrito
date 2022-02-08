import axios from "axios"
import React, { useContext, useEffect, useState } from "react"
import { Context } from "../context/UseContext"
import Spinner from "./Spinner"

const MostrarFoto = () => {
  const [perrofoto, setPerroFoto] = useState("")
  const [cargando, setCargando] = useState(false)

  const context = useContext(Context)

  const { foto } = context

  useEffect(() => {
    const consultaApi = async () => {
      setCargando(true)
      const url = `https://dog.ceo/api/breed/${foto}/images/random`
      const res = await axios.get(url)
      setPerroFoto(res.data.message)
      setTimeout(() => {
        setCargando(false)
      }, 2000)
    }

    consultaApi()
  }, [foto])
  return (
    <div>
      <div className='text-4xl lg:text-6xl font-extrabold text-center uppercase p-10'>
        {foto}
      </div>

      <div className='flex justify-center items-center mt-10'>
        {cargando ? (
          <Spinner />
        ) : (
          <img
            src={perrofoto}
            className='w-80 h-80 lg:w-96 lg:h-96 rounded-xl '
          />
        )}
      </div>
    </div>
  )
}

export default MostrarFoto
