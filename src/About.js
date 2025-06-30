import React from 'react'
import Navbars from './Navbars'
import Simple from './Simple'
import FreeAbout from './FreeAbout'
import Story from './Story'
import Subscribe from './Subscribe'
import Insta from './Insta'
import Footer from './Footer'
import Top from './Top'

function About() {

  const moreabout=()=>{
    window.scrollTo(0,1000)
  }
  return (
    <div className='overflow-x-hidden'>
      <Top></Top>
      <Navbars></Navbars>
      <div className='container pt-5 '>
        <div style={{ border: "1px solid gray ", borderRadius: "30px" }}> <p className='ps-2 pt-2'>Home <i class="fa-solid fa-right-long"></i> About</p></div>
      </div>

      <div className='container mt-5'>
        <div className='p-2 text-center pt-5'>
          <p style={{ color: "#a5c926" }}>All You Need is Fun!</p>
          <h2>Introducing ToyStore</h2>
          <p>
            A successful marketing plan relies heavily on the pulling-power of advertising copy. <br></br>
            Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince  <br></br>
            consumers to take action.
          </p>

          <button style={{ border: "none", backgroundColor: "transparent" }} className='under' onClick={()=>{moreabout()}}>More About Us</button>
        </div>
      </div>

      <div className='container mt-4'>
        <div className='bat' >
          <img src='batman.jpeg'  alt=''  height={550} width={"100%"}></img>
        </div>
      </div>

      <Simple></Simple>
      <FreeAbout></FreeAbout>
      <Story></Story>
      <Subscribe></Subscribe>
      <Insta></Insta>
      <Footer></Footer>
    </div>
  )
}

export default About
