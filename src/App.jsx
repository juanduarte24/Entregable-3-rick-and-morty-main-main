import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios'
import getRandomNumber from './utils/getRandomNumber'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'
import FormInput from './components/FormInput'
import Error from './components/Error'
import Loader from './components/Loader'

function App() {

  const [location, setLocation] = useState()

  //*este estado guarda la captura del input que tenemos en FormInput
  const [idLocation, setIdLocation] = useState(getRandomNumber(126))

  //*creamos un estado para los errores
  const [hasError, setHasError] = useState(false)

  //*Creamos un estado para una pantalla de carga
  const [isLoading, setisLoading] = useState(true)

  


  useEffect(() => {

    const url = `https://rickandmortyapi.com/api/location/${idLocation}`

    setisLoading(true)
    axios.get(url)
      .then(res => {
        setLocation(res.data)
        setHasError(false)
      })
      .catch(error => {
        console.error(error)
        setHasError(true)
      })
      .finally(() => {
        setisLoading(false)
      })
  }, [idLocation])

  console.log(idLocation);
  return (
    <div>
     
      <header>
        <img src='/images/banner.png' alt="" />
      </header>

      <FormInput idLocation={setIdLocation}
      />
      {
        isLoading
          ? (<Loader/>)
          :
          hasError
            ? (<Error />)
            : (
              <>

                <LocationInfo location={location}
                />

                <div className='resident__container'>
                  {

                    location?.residents.map((url) => (
                      <ResidentCard
                        key={url}
                        url={url}
                      />
                    ))
                  }
                </div>
              </>
            )
      }
<footer>Derechos Reservados®️</footer>
    </div>
  )
}

export default App
