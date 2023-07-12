import React from 'react'
import getRandomNumber from '../utils/getRandomNumber'
import './styles/formInput.css'

const FormInput = ({ idLocation }) => {

    const handleSubmit = (e) => {

        //* Metodo para evitar que la pagina siempre se recargue
        e.preventDefault()

const inputValue = e.target.inputId.value.trim()
if(inputValue == '' || inputValue === '0'){

    idLocation(getRandomNumber(126))
}else{
    //*evento . target que queremos . nombre del target . valor que contiene . trim para evitar espacios vacios y guardamos en el estado que paasamos por props 
    idLocation(e.target.inputId.value.trim())
}

        e.target.inputId.value = ''
    }



    return (
        <div className='container-form' style={{backgroundColor: 'rgb(5,41,46)'}}>
        <form className='form-input' onSubmit={handleSubmit}>
            <input className='input-id' id='inputId'  type="text" />
            <button className='button-id' style={{ backgroundColor: 'green', color: 'white' }}>Search</button>
        </form>
        </div>
    )
}

export default FormInput