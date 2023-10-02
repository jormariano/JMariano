import './CotizacionDolar.css'
import { useEffect, useState } from 'react'

const CotizacionDolar = () => {

    const API = 
        fetch(`https://api.exchangeratesapi.io/v1/latest?access_key=6b4fb393c797c04ce44981cc7b9e18a6&symbols=USD`)
    console.log(API)
    return (
        <>
        </>
    )
}

export default CotizacionDolar