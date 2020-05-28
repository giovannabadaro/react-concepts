import React from 'react'
import Props from './components/Props'
import State from './components/State'
import './App.css'
import car from './images/car.jpg'


export default function App () {
  return (
    <>
      <img src={car} alt="carro" width={300}/>
      <Props valor="isso é um propriedade" />
      <State />

    </>
  )
   
}