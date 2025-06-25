import React from 'react'
import Navbars from './Navbars'
import Subscribe from './Subscribe'
import Insta from './Insta'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import Top from './Top'

function Delivery() {

const us =  useNavigate();
  const contactus=()=>{
    us('/contacts')
  }
  return (
    <div>
      <Top></Top>
      <Navbars></Navbars>
      <div className='container mt-5'>

        <div className='bg-white p-4 pb-4' style={{ borderRadius: "10px" }}>
          <div className='d-flex justify-content-around' style={{ flexWrap: "wrap" }}>
            <div>
              <h4 className='pb-3'>Delivery Info</h4>
              <p className='pb-4'>A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result- <br></br>
                oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. <br></br>
                There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad <br></br>
                placement, demographic, even the consumer’s mood when they see your ad.</p>


              <h4 className='pb-3'>What’s a Rich Text element?</h4>
              <p className='pb-3'>The rich text element allows you to create and format headings, paragraphs, blockquotes, images, <br></br>
                and video all in one place instead of having to add and format them individually. Just double-click <br></br>
                and easily create content..</p>

              <h4 className='pb-3'>Static and dynamic content editing</h4>

              <p>
                A rich text element can be used with static or dynamic content. For static content, just drop it into  <br></br>
                any page and begin editing.
              </p>

              <ul>
                <li>Beautifully Designed</li>
                <li>100% Responsive</li>
                <li>CMS Content</li>
                <li>Smooth Animations</li>
              </ul>

              <p className='pb-4'>
                For dynamic content, add a rich text field to any collection and then connect a rich text element to  <br></br>
                that field in the settings panel. Voila!
              </p>


              <h4 className='pb-1'>How to customize formatting for each rich text</h4>
              <p>Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a  <br></br>
                class is added to the rich text element using the "When inside of" nested selector system.</p>

            </div>


            <div >
              <div className='text-center border p-5' style={{ borderRadius: "10px" }}>
                <h4>
                  Can't Find the Answer  <br></br>
                  to Your Question?
                </h4>
                <button className='btn' style={{ backgroundColor: "#a5c926", borderRadius: "10px" }} onClick={()=>{contactus()}}>Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Subscribe></Subscribe>
      <Insta></Insta>
      <Footer></Footer>
    </div>
  )
}
export default Delivery
