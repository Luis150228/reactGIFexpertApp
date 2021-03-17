import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [animes, setAnimes] = useState(['Minato']);

    // const handleAdd = ()=>{
    //     // setAnimes(['Dr Stone',...animes]);
    //     setAnimes(serie => ['Dr Stone', ...serie]);////al crear el valor serie{o cualquier texto} este almacena el State{estado}
    //     // console.log(animes);
    // }

    // console.log(animes);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setEnviado = {setAnimes}/>
            <hr/>
            <br/>
            {/* <ol>
                {
                animes.map((anime, i) =>{///Es como un ciclo for al usar el map { la i representa el idx que es otro parametro del MAP}
                    return <li key = {anime}>{anime}</li>;//anime es un texto aleatorio puede ser cualquier cosa
                })
                }
            </ol> */}
            <ol>
                {
                animes.map((anime)=> (
                    <GifGrid key = {anime} setEnviadotwo = {anime} />
                    ))
                }
            </ol>
        </>
    )
}
