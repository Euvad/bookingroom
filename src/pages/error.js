import React from 'react'
import Hero from "../components/hero"
import Banner from '../components/banner'
import {Link} from 'react-router-dom'
export default function error() {
  return (
    <Hero>
      <Banner title="404" subtitle={"Page inexistante"}>
        <Link to={'/'} className='btn-primary'>Retourner à l'accueil</Link>
      </Banner>
    </Hero>
  )
}
