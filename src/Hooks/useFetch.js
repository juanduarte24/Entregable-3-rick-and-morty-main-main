import axios from "axios"
import { useState } from "react"


const useFetch = (url) => {
    const [infoApi, setInfoApi] = useState()

    //*Manejo de errores
    const [hasError, setHasError] = useState(false)

    //*Loader
    const [isLoading, setIsLoading] = useState(true)

    const getApi = () => {
        setIsLoading(true)
        axios.get(url)
            .then(res => {
                setInfoApi(res.data)
                setHasError(false)
            })
            .catch(error => {
                console.error(error)
                setHasError(true)
            }).finally(()=>setIsLoading(false))


    }
    return [infoApi, getApi , hasError, isLoading]
}

export default useFetch