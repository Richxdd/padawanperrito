import React, { useContext, useEffect } from "react"
import { Context } from "../context/UseContext"
import PerroFoto from "./PerroFoto"

const Letra = () => {
  const context = useContext(Context)

  const { letras, perros } = context

  const dataperro = Object.keys(perros)

  const filtro = dataperro.filter((perro) => perro.slice(0, 1).includes(letras))

  return (
    <>
      <div className='text-4xl lg:text-6xl font-extrabold text-center p-10'>
        Razas de perros que incian con la letra:{" "}
        <span className='uppercase'>{letras}</span>
      </div>
      <div className='flex flex-col justify-center items-center gap-5 p-10'>
        {filtro.length === 0 ? (
          <p className='text-4xl lg:text-6xl font-extrabold text-center p-10'>
            No hay razas de perro con la letra:{" "}
            <span className='uppercase'>{letras}</span>
          </p>
        ) : (
          <>
            {filtro.map((letra) => (
              <PerroFoto key={letra} letra={letra} />
            ))}
          </>
        )}
      </div>
    </>
  )
}

export default Letra
