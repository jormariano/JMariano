import { useState, useEffect } from "react";

// Clase 8 - 50'. Aprender a usar Fetch para API de divisas

export const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(dataJson => setData(dataJson))
            .catch(error => console.log(error))
    }, [url])

    return data;
}