import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"


const Hero = () => {
  return (
    <>
     <section className='hero'>
  <div className='hero-background'></div>
  <div className='container'>
    <div className='hero-content'>
      <Heading title='Find Your Dream Rent House Today ' subtitle='Find new & featured property located in your local city.'/>
      <form className='flex'>
        <div className='box'>
          <span>City/Street</span>
          <input type='text' placeholder='Location' />
        </div>
        <div className='box'>
          <span>Property Type</span>
          <input type='text' placeholder='Property Type' />
        </div>
        <div className='box'>
          <span>Price Range</span>
          <input type='text' placeholder='Price Range' />
        </div>
        <div className='box'>
          <h4>Advance Filter</h4>
        </div>
        <button className='btn1'>
          <i className='fa fa-search'></i>
          Search
        </button>
      </form>
    </div>
  </div>
</section>

    </>
  )
}

export default Hero
