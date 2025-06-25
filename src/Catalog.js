import React, { useEffect, useState } from 'react'
import Navbars from './Navbars'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Subscribe from './Subscribe';
import Insta from './Insta';
import Footer from './Footer';
import Top from './Top';
import { dta } from './dta';
// import { data } from './All';

function Catalog() {

  
  const [alltoy, setAlltoys] = useState([]);
  
  useEffect(() => {
    var alltoydta = dta.alltoys;
       localStorage.setItem('alltoys', JSON.stringify(alltoydta));
      setAlltoys(alltoydta)
  }, [])

  console.log(alltoy)

  const navigate = useNavigate();

  const handelclick = (eid) => {
    navigate('/all/' + eid)
    window.scrollTo(0,0)
  }
  return (
    <div style={{ backgroundColor: "#f8f8f8" }}>
      <Top></Top>
      <Navbars></Navbars>

      <div className='container pt-5 '>
        <div style={{ border: "1px solid gray ", borderRadius: "30px" }}> <p className='ps-2 pt-2'>Home <i className="fa-solid fa-right-long"></i> Catalog</p></div>
      </div>

      <div className='all container '>
        <div className='row der'>
          <div className='col-xl-6'><h3>All toys</h3></div>
          <div className='col-xl-6 text-end'>
            <Link to={'/catalog'} style={{ backgroundColor: "#a5c926", borderRadius: "20px", padding: "2px 10px", color: "white", textDecoration: "none" }}>All Toys</Link>
            <Link to={'/wooden'} className='text-black px-3'>Wooden Toys</Link>
            <Link to={'/stuffed'} className='text-black'>Stuffed Animals</Link>
          </div>
        </div>

        <div className='pt-5'>
          <div className=' all1'>
            {
            alltoy &&
              alltoy.map((data) => (
                <div key={data.id} className='all2 p-3 bg-white'  onClick={() => { handelclick(data.id) }}>
                  <div style={{ textDecoration: "none" }}>
                    <img src={data.url} alt='' height={180} width={100}></img>
                    <p className='text-black' > {data.name}</p>
                    <button className='btn' style={{ backgroundColor: "#a5c926", borderRadius: "20px" }}>${data.price}.00 USD</button>
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

export default Catalog
