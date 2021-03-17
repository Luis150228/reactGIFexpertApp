import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './gifGridItem';

export const GifGrid = ({setEnviadotwo}) => {

    const { data: resultadoBusqueda, loading} = useFetchGifs(setEnviadotwo);

    return (
        <>
        <h3 className='animate__backInLeft'>Origen GifExpertApp: {setEnviadotwo}</h3>
        {/* Abajo: es un if con operador ternario ? evalua el loading si es true pone cargando en false compleata la orden */}
        {/* {loading ? 'Cargando' : 'Solicitud Completa'} */}
        {loading && <p>Buscando ...</p>}
        <div className='card-grid'>
            {
                resultadoBusqueda.map((texto)=>
                <GifGridItem 
                key = {texto.id}
                {...texto} />
                )
            }
        </div>
        </>
    )
}
