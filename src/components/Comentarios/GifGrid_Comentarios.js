import React, { useState, useEffect } from 'react';
import { gifGridItem } from './gifGridItem';

export const GifGrid = ({setEnviadotwo}) => {

    const [imagenes, setImagenes] = useState([]);

    useEffect(() => {
        getGifs();
    }, [])

    const getGifs = async()=>{
        const url = 'https://api.giphy.com/v1/gifs/search?q=Deathnote&limit=6&api_key=FUB8uGLxLPL2akzb8KMATa8AlTbFtB9z';
        const respuesta = await fetch(url);
        const {data} = await respuesta.json();
        const gifs = data.map(nuevoArreglo =>{
            return {
                id: nuevoArreglo.id,
                title: nuevoArreglo.title,
                imagen: nuevoArreglo.images?.downsized_medium.url
            }
        })

        console.log(gifs);
        setImagenes(gifs);

    }

    // getGifs()

    return (
        <div>
            <h3>Origen GifExpertApp: {setEnviadotwo}</h3>
            
                {/* {
                    imagenes.map((regresaElStateOriginaldeImagenes)=>{
                        return <li key = {regresaElStateOriginaldeImagenes.id}> {regresaElStateOriginaldeImagenes.title}</li>
                    })
                } */}
                <ol>{
                    //reduccion del ejercicio de arriba; abajo se quita el "regresaElStateOriginaldeImagenes" como en una ecuacion se anulan caracteristicas similares la realizar una destructuracion se quitan las {} y eso tambien borra el return
                    imagenes.map(({id, title})=>
                        <li key = {id}> {title}</li>
                    )
                }</ol>
        </div>
    )
}
