export const getGifs = async(setEnviadotwo)=>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(setEnviadotwo)}&limit=10&api_key=FUB8uGLxLPL2akzb8KMATa8AlTbFtB9z`;
    const respuesta = await fetch(url);
    const {data} = await respuesta.json();
    const gifs = data.map(nuevoArreglo =>{
        return {
            id: nuevoArreglo.id,
            title: nuevoArreglo.title,
            imagen: nuevoArreglo.images?.downsized_medium.url
        }
    })

    return gifs;

    // console.log(gifs);
    // setImagenes(gifs);

}