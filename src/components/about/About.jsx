import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

           
            <p>Rent House is your one-stop rental property search. We include several houses, flats, and condominiums for rent on our website. Our simple search function lets you filter houses by location, bedroom count, and price.</p>

            <p>We recognize that locating a rental home can be difficult, so we try to make it easy. Our knowledgeable staff is here to answer your inquiries and offer advise.</p>

            <p>Our website has several tenant resources in addition to property searches. This includes advice on finding the right rental property, moving, and the leasing procedure. We also offer tenant rights and obligations information.</p>
            
            <p>Rent House has everything you need to find your dream rental, whether you're a first-time renter or a pro. Visit our website today to find your dream house.</p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
