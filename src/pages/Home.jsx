import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import OurBestSellers from '../components/OurBestSellers'
import HomeBooks from '../components/HomeBooks'
import HomeAbout from '../components/HomeAbout'

const Home = () => {
  return (
      <>
          <Navbar />
          <Banner />
          <OurBestSellers />
          <HomeBooks />
          <HomeAbout/>
      </>
  )
}

export default Home
