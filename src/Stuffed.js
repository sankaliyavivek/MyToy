import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Subscribe from './Subscribe'
import Insta from './Insta'
import Footer from './Footer'
import Navbars from './Navbars'
import Top from './Top'
import { dta } from './dta'
// import { data } from './All'

function Stuffed() {
  const [stuffed, setStuffed] = useState([])
  useEffect(() => {

    var stuffeddta= dta.Stuffed
    localStorage.setItem('stuffed',JSON.stringify(stuffeddta))
    setStuffed(stuffeddta)

  }, [])
  console.log(stuffed)
  
  const navigate = useNavigate();

  const handelclick = (sid) => {
    navigate('/view2/' + sid)
  }
  return (
    <div>

    <div>
      <Top></Top>
      <Navbars></Navbars>

      <div className='container pt-5 '>
        <div style={{ border: "1px solid gray ", borderRadius: "30px" }}> <p className='ps-2 pt-2'>Home <i className="fa-solid fa-right-long"></i> Catalog <i className="fa-solid fa-right-long"></i>Stuffed Animals</p></div>
      </div>


      <div className='container mt-5'>
        <div className='row der aling-items-center'>
          <div className='col-xl-6'><h3>Stuffed Animals</h3></div>
          <div className='col-xl-6 text-end'>
            <Link to={'/catalog'} className='text-dark'>All Toys</Link>
            <Link to={'/wooden'}  className='text-black mx-3'>Wooden Toys</Link>
            <Link to={'/stuffed'} style={{ backgroundColor: "#a5c926", borderRadius: "20px", padding: "2px 10px", color: "white", textDecoration: "none" }} className='text-black'>Stuffed Animals</Link>
          </div>

        </div>
      </div>

      <div className='mt-5 container '>
        <div className='all1'>
          {
          stuffed &&
            stuffed.map((wood1) => (
              <div key={wood1.id} className='all2 p-3 bg-white' onClick={() => { handelclick(wood1.id) }}>
                <div style={{ textDecoration: "none" }}>
                  <img src={wood1.url}  alt='' height={180} width={180}></img>
                  {/* onClick={() => { handelclick(wood1.id) }} */}
                  <p className='text-black' > {wood1.name}</p>
                  <button className='btn' style={{ backgroundColor: "#a5c926", borderRadius: "20px" }}>{wood1.price}</button>
                </div>
              </div>
            ))
          }
        </div>


      </div>

    </div>

    <Subscribe></Subscribe>
    <Insta></Insta>
    <Footer></Footer>

  </div>
  )
}

export default Stuffed
