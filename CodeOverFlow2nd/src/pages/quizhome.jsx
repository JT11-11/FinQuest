import './quizhome.css'
import React from 'react'
import Navbar from '../components/navbar'
import HomePg from '../components/HomePg'
import Rules from '../components/Rules'
import Level1 from './Level1'

const quizhome = () => {
  return (
    <>
    <Navbar/>
    <HomePg/>
    <Rules  />
    <Level1/>
    </>
  )
}

export default quizhome