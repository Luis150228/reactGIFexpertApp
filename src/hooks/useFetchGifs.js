import { useState, useEffect } from "react"
import { getGifs } from "../../src/components/helpers/getGifs";

export const useFetchGifs = (setEnviadotwo) => {
    const [state, setState] = useState({
        data:[],
        loading:true

    });

    useEffect(()=>{
        getGifs(setEnviadotwo)
            .then( lasImagenes => {
            setTimeout(() => {
                console.log(lasImagenes);
                setState({
                    data:lasImagenes,
                    loading:false
                });
            }, 3000);
        })

    }, [setEnviadotwo])
    
    return state;//El estado actual es 'Loading' en true
    
}
