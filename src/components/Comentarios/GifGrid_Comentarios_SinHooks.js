import React from 'react';
import React, { useState, useEffect } from 'react';
import { GifGridItem } from './gifGridItem';
import { getGifs } from './helpers/getGifs';


export const GifGrid = ({setEnviadotwo}) => {

    const [imagenes, setImagenes] = useState([]);

    useEffect(() => {
        //getGifs(setEnviadotwo).then(textoEnviado=>setImagenes(textoEnviado));//Recordar que la función manda su primer y unico argumento se puede obviar el callback
        getGifs(setEnviadotwo).then(setImagenes);///funcion importada de los helpers
    }, [setEnviadotwo])

    getGifs()

    return (
        <>
        <h3>Origen GifExpertApp: {setEnviadotwo}</h3>
        <div className='card-grid'>
            {
                imagenes.map((texto)=>
                <GifGridItem 
                key = {texto.id}
                {...texto} />
                )
            }
        </div>
        </>
    )
}
