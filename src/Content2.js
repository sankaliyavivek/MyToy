import React from 'react'
import { useNavigate } from 'react-router-dom'

function Content2() {


       const navi= useNavigate()
    const hendeladd=()=>{
        navi('/catalog')
    }
    return (
        <div className='container  mt-5'>
            <div className=' my-5 pt-5 '>
                <div className='row justify-content-evenly gap-4'>
                    <div className='col-10 col-md-5 col-xl-5 p1'>
                        <div className=' d-flex align-items-center justify-content-evenly '>
                            <img src="teddy1.png" alt="" width={"40%"} />
                            <div>
                                <h2>Stuffed Animals</h2>
                                <button className='btn btn-light rounded-pill' onClick={hendeladd}>Shop Now</button>
                            </div>
                        </div>
                    </div>

                    <div className='col-10 col-md-5 col-xl-5 p2'>
                        <div className=' d-flex align-items-center justify-content-evenly '>
                            <div className='text-end'>
                                <h2>Wooden Toys</h2>
                                <button className='btn btn-light rounded-pill ' onClick={hendeladd}>Shop Now</button>
                            </div>
                            <img src="flower.JPG" alt="" width={"40%"} />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content2
