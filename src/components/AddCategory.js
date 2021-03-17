import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({setEnviado}) => {
    const [inputValue, setInputValue] = useState('');

    const funcionCambio = (e)=>{
        setInputValue(e.target.value);
    };

    const clikSubmit = (e)=> {
        e.preventDefault();
        // console.log('Enviaste informacion')
        // setAnimes(serie => ['Dr Stone', ...serie])
        if (inputValue.trim().length >2 ) {///El largo de el texto es mayor a 2 
            setEnviado(serie => [inputValue, ...serie]);//inserta la serie
            setInputValue('');//y adicional limipia el input
        }
    };

    return (
        <form onSubmit={clikSubmit}>
            <input
            type='text'
            value={inputValue}
            onChange={funcionCambio}
            placeholder='Inserte la serie'
            />
        </form>
        )
} ///Fin de funcion AddCategory

AddCategory.propTypes = {
    setEnviado: PropTypes.func.isRequired
}

