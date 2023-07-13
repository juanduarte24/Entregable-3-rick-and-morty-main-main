import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import getRandomNumber from './utils/getRandomNumber'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'
import FormInput from './components/FormInput'
import Error from './components/Error'
import Loader from './components/Loader'
import useFetch from './Hooks/useFetch'

function App() {

  // const [location, setLocation] = useState()

  //*este estado guarda la captura del input que tenemos en FormInput
  const [idLocation, setIdLocation] = useState(getRandomNumber(126))

  //*creamos un estado para los errores
  // const [hasError, setHasError] = useState(false)

  //*Creamos un estado para una pantalla de carga
  // const [isLoading, setisLoading] = useState(true)

const url = `https://rickandmortyapi.com/api/location/${idLocation}`
const [location , getSingleLocation , hasError , isLoading] =  useFetch(url)

  useEffect(() => {

    // const url = `https://rickandmortyapi.com/api/location/${idLocation}`

    // setisLoading(true)
    // axios.get(url)
    //   .then(res => {
    //     setLocation(res.data)
    //     setHasError(false)
    //   })
    //   .catch(error => {
    //     console.error(error)
    //     setHasError(true)
    //   })
    //   .finally(() => {
    //     setisLoading(false)
    //   })
    getSingleLocation()
  }, [idLocation])


  return (
    <div>

      <header>
        <img src='/images/banner.png' alt="" />
      </header>

      <FormInput idLocation={setIdLocation}
      />
      {
        isLoading
          ? (<Loader />)
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
      <br /><br /><br /><br /><br />
    </div>
  )
}

export default App
