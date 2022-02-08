import axios from "axios"
import React, { useContext, useEffect, useState } from "react"
import { Context } from "../context/UseContext"

const MostrarFoto = () => {
  const [perrofoto, setPerroFoto] = useState("")

  const context = useContext(Context)

  const { foto } = context

  useEffect(() => {
    const consultaApi = async () => {
      const url = `https://dog.ceo/api/breed/${foto}/images/random`
      const res = await axios.get(url)
      setPerroFoto(res.data.message)
    }

    consultaApi()
  }, [foto])
  return (
    <div>
      <div className='text-6xl font-extrabold text-center uppercase p-10'>
        {foto}
      </div>
      <div className='flex justify-center items-center mt-10'>
        <img src={perrofoto} className='w-96 h-96 rounded-xl ' />
      </div>
    </div>
  )
}

export default MostrarFoto
