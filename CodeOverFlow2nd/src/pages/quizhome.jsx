import './quizhome.css'
import React from 'react'
import Navbar from '../components/navbar'
import HomePg from '../components/HomePg'
import Rules from '../components/rules'
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