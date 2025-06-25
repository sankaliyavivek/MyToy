import React, { useState } from 'react'

function Subscribe() {


    const [done, setdone] = useState(false)
    if (done) {
        var content =
            <>
                <p>Thank you! Your submission has been received!</p>    
            </>
    }

    else {
        var content = <>
            <div className='col-xl-10 pb-3'>
                <input type='email' id='email' placeholder='Enter Your Email Address'></input>
            </div>
            <div className='col-xl-2  text-center ps-3'>
                <button className='sub' onClick={() => { setdone(true) }}>Subscribe</button>
            </div>
        </>
    }

    return (
        <div className='container mt-5 mb-5' style={{ backgroundColor: "white", borderRadius: "20px" }}>
            <div className='p-3'>
                <div className='row justify-content-evenly p-4'>

                    <div className='col-xl-6 d-flex row text-center align-items-center p-2'>
                        <div className='tele col-xl-2 '>
                            <i className="fa-brands fa-telegram "></i>
                        </div>
                        <div className='col-xl-10'>
                            <h3>Subscribe to our newsletter <br></br>
                                & <span style={{ color: "#a5c926" }}>get 10% discount!</span></h3>
                        </div>
                    </div>

                    <div className='col-xl-6 d-flex row align-items-center pt-4 none'>
                        {content}
                    </div>

                </div>
            </div>
        </div>
    )


}

export default Subscribe
