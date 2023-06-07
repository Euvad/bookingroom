import React from 'react'
import Hero from '../components/hero'
import Banner from '../components/banner'
import { Link } from 'react-router-dom'
import Services from '../components/services'
import FeaturedRooms from '../components/featuredRooms'
import Scrolldown from '../components/scrolldown'
export default function Home() {
  return (
    <>
      <Hero>
        <Banner title={"Location étudiante Orléans"} subtitle={"Découvrez notre résidence étudiante offrant des logements confortables à proximité de La Source."}>
          <Link to={"/rooms"} className="btn-primary">NOS CHAMBRES</Link>
          <Scrolldown reference='#anchor'/>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  )
}
