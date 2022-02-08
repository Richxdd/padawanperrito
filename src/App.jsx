import axios from "axios"
import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Letra from "./components/Letra"
import MostrarFoto from "./components/MostrarFoto"
import { Context } from "./context/UseContext"

const App = () => {
  const [letras, setLetras] = useState("")
  const [perros, setPerros] = useState([])
  const [foto, setFoto] = useState("")

  useEffect(() => {
    const consultaApi = async () => {
      const url = `https://dog.ceo/api/breeds/list/all`
      const res = await axios.get(url)
      setPerros(res.data.message)
    }

    consultaApi()
  }, [])

  return (
    <Context.Provider
      value={{ letras, setLetras, setPerros, perros, setFoto, foto }}
    >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/letra' element={<Letra />} />
          <Route path='/foto' element={<MostrarFoto />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  )
}

export default App
