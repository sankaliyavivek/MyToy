import React, { useState } from 'react'
import Navbars from './Navbars'
import Insta from './Insta'
import Footer from './Footer'
import Top from './Top'

function Contacts() {


  const [done, setdone] = useState(false)
  if (done) {
    var content =
      <>
        <p className='col-xl-6 text-center mt-5'>Thank you! Your submission has been received!</p>
      </>
  }

  else {
    var content = <>
      <div className=' ps-3 detail col-xl-6 mb-4'>
        <h2>Leave a Message</h2>
        <p style={{ fontWeight: "bold" }}>Full Name</p>
        <input type='text' className='mt-2 mb-4' style={{ borderRadius: "20px", padding: "8px", width: "80%" }} placeholder='Enter Your Name'></input>

        <p style={{ fontWeight: "bold" }} >Email Address</p>
        <input type='email' className='mt-2 mb-4' style={{ borderRadius: "20px", padding: "8px", width: "80%", borderColor: "gray" }} placeholder='Your Contact Email'></input>

        <p style={{ fontWeight: "bold" }}>Some Message</p>
        <textarea style={{ borderRadius: "15px" }} className='p-3 w-75' placeholder='Message'></textarea> <br></br>

        <button className='btn mt-3' style={{ backgroundColor: '#a5c926' }} onClick={() => { setdone(true) }}>Send Message</button>
      </div>
    </>
  }
  return (
    <div>
      <Top></Top>
      <Navbars></Navbars>

      <div className='container pt-5 '>
        <div style={{ border: "1px solid gray ", borderRadius: "30px" }}> <p className='ps-2 pt-2'>Home <i className="fa-solid fa-right-long"></i> Contacts</p></div>
      </div>
      <div className='container mt-5'>

        <div className='bg-white ' style={{ borderRadius: "20px" }}>

          <div className=' container'>
            <div className=' map text-center pt-5'>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317716.60648832726!2d-0.4312474072555601!3d51.528607007953084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sin!4v1713367155383!5m2!1sen!2sin"
                height={400}
                width="85%"
                style={{ border: 0, borderRadius: "10px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

            </div>
          </div>


          <div className='row gap-2 justify-content-around  mt-5'>

            {content}

            <div className='col-xl-5 detail  p-4 '>
              <h2>Contact Info</h2>
              <p>Dhandhuka  Railway Satation same , Ahmedabad, Gujarat <br></br>
                +91 9898920970</p>

              <p style={{ textDecoration: "underline" }}>sankaliyavivek9797@gmail.com</p>

              <div>
                <h4>Follow Us</h4>

                <div className='us'>
                <ul>
                    <li>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-pinterest"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </li>
                </ul>
                </div>


              </div>
            </div>

          </div>
        </div>

      </div>

      <Insta></Insta>
      <Footer></Footer>
    </div>
  )
}

export default Contacts
