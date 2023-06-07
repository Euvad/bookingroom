import React from 'react'
import Hero from "../components/hero"
import Banner from '../components/banner'
import { Link } from 'react-router-dom'
import RoomsContainer from '../components/roomsContainer'
export default function rooms() {
  return (
    <>
    <Hero hero="roomsHero">
      <Banner title={"NOS CHAMBRES"}>
        <Link to={"/"} className='btn-primary'>Retourner à l'accueil</Link>
      </Banner>
    </Hero>
    <RoomsContainer/>
    </>
  )
}
