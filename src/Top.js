import React from 'react'

function Top() {
  return (
    <div style={{ backgroundColor: '#a5c926' }}>
      <div className='container'>
        <div className='d-flex justify-content-between'>
          <div className='d-flex' style={{color:'white'}}>
            <li style={{ listStyle: 'none', fontSize: '12px' }} className='me-3'>Call Us: +1 213 974-5898</li>
            <li style={{ listStyle: 'none', fontSize: '12px', textDecoration: 'underline' }}>Email: toystore@template.com</li>

          </div>
          <div className='bars'>
            <li><a href="https://www.elasticthemes.com/" target='_blank'><i className="fa-brands fa-twitter"></i></a></li>
            <li><a href="https://www.elasticthemes.com/" target='_blank'><i className="fa-brands fa-facebook"></i></a></li>
            <li><a href="https://www.elasticthemes.com/" target='_blank'><i className="fa-brands fa-instagram"></i></a></li>
            <li><a href="https://www.elasticthemes.com/" target='_blank'><i className="fa-brands fa-pinterest"></i></a></li>
            <li><a href="https://www.elasticthemes.com/" target='_blank'><i className="fa-brands fa-youtube"></i></a></li>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Top
