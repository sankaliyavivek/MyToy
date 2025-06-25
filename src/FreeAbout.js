import React from 'react'
import { useNavigate } from 'react-router-dom'

function FreeAbout() {

    const navi = useNavigate();
    const navi1 = useNavigate();

    const openhome = () => {
        navi('/')
    }
    const opencata = () => {
        navi1('/catalog')
        window.scrollTo(0,0)
    }
    return (
        <div className='mt-5'>
            <div className='pb-5'>
                <div className="p-3" >
                    <div className="row p-4 justify-content-evenly ">
                        <div className="col-xl-6 pt-4 free1">
                            <h3 className='pb-4' style={{ textDecoration: "underline" }}>Beautifully Designed</h3>
                            <p className='pb-4'>
                                A successful marketing plan relies heavily on the pulling-power of  <br></br>
                                advertising copy. Writing result-oriented ad copy is difficult, as it must  <br></br>
                                appeal to, entice, and convince consumers to take action. There is no  <br></br>
                                magic formula to write perfect ad copy
                            </p>
                            <button className='get' onClick={openhome}>GET IT NOW!</button>
                        </div>

                        <div className="col-xl-6" style={{ width: "550px" }}>
                            <img src='spider.jpeg' className='img-fluied rounded-4 w-100' alt='' height="400px"></img>
                        </div>
                    </div>
                </div>
            </div>


            <div className='mt-5'>
                <div className='pb-5'>
                    <div className="p-3" >
                        <div className="row p-4 justify-content-around ">

                            <div className="col-xl-5" style={{ width: "550px" }}>
                                <img src='toys.jpeg' className='img-fluied rounded-4 w-100' alt='' height="400px"></img>
                            </div>

                            <div className="col-xl-5 pt-4 free1 ">
                                <h3 className='pb-4' style={{ textDecoration: "underline" }}>100% Responsive</h3>
                                <p className='pb-4'>
                                    A successful marketing plan relies heavily on the pulling-power of  <br></br>
                                    advertising copy. Writing result-oriented ad copy is difficult, as it must  <br></br>
                                    appeal to, entice, and convince consumers to take action. There is no  <br></br>
                                    magic formula to write perfect ad copy
                                </p>
                                <div className='text-center'>
                                    <button style={{ border: "none", backgroundColor: "transparent", color: "#a5c926", textDecoration: "underline" }} onClick={opencata}>Explore Our Toys <i className="fa-solid fa-right-long"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FreeAbout
