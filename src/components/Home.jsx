import Letras from "./Letras"

const Home = () => {
  const abc = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "ñ",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]

  return (
    <div className='container'>
      <h1 className='text-4xl lg:text-6xl font-extrabold text-center p-10'>
        Api de Perro
      </h1>
      <div className='flex justify-center items-center'>
        <div className=' grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-5 p-5 lg:gap-10 lg:p-10'>
          {abc.map((letra) => (
            <Letras key={letra} letra={letra} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
