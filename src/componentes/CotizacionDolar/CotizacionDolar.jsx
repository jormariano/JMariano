import React from 'react'
import { useEffect, useState } from 'react'
import './CotizacionDolar.css'

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