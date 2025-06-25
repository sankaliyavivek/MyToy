import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div style={{ backgroundColor: "#a5c926", color: "white" }}>

            <div className='container pt-4'>
                <div className='row justify-content-center  align-items-center p-4 '>
                    <div className='col-xl-4 col-3 tooo'>ToyStore</div>
                    <div className='col-xl-4 foot col-9'>
                        <Link to={'/'} className='pe-2'>Home</Link>
                        <Link to={'/catalog'} className='pe-2'>Catalog</Link>
                        <Link to={'/delivery'} className='pe-2'>Delivery</Link>
                        <Link to={'/about'} className='pe-2'>About</Link>
                        <Link to={'/contacts'} >Contacts</Link>
                    </div>
                    <div className='col-xl-4 col-12 foot1 text-end'>
                        <li><a href="https://www.elasticthemes.com/" target='_blank'><i className="fa-brands fa-twitter"></i></a></li>
                        <li><a href="https://www.elasticthemes.com/" target='_blank'><i className="fa-brands fa-facebook"></i></a></li>
                        <li><a href="https://www.elasticthemes.com/" target='_blank'><i className="fa-brands fa-instagram"></i></a></li>
                        <li><a href="https://www.elasticthemes.com/" target='_blank'><i className="fa-brands fa-pinterest"></i></a></li>
                        <li><a href="https://www.elasticthemes.com/" target='_blank'><i className="fa-brands fa-youtube"></i></a></li>
                    </div>
                </div>
                <div style={{ borderTop: '1px solid white' }} className='row pt-4 align-items-center'>
                    <div className='col-xl-6 text-start'><p>Created with love by <span><a href="https://www.elasticthemes.com/" target='_blank' className='text-white'>Elastic Themes</a></span></p></div>
                    <div className='col-xl-6 text-end'><p>Powered by <u><a href="https://webflow.com/" target='_blank' className='text-white'>webflow</a></u> <u className='px-2 '> <a href="" className='text-white'>Style Guide</a> </u><u>Licensing</u></p></div>
                </div>
            </div>
        </div>
    )
}

export default Footer

