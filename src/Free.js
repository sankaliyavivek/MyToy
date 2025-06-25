import React from 'react'
import { useNavigate } from 'react-router-dom'

function Free() {
  const  open=  useNavigate();
    const openhome =()=>{
        open('/catalog')
      
    }
    return (
        <div className='pb-5'>
            <div className="p-3" >
                <div className="row p-4 justify-content-evenly ">
                    <div className="col-xl-6 pt-4 free1">
                        <h3 className='pb-4'>Available for FREE!</h3>
                        <p className='pb-4'>
                            A successful marketing plan relies heavily on the pulling-power <br></br>
                            of advertising copy. Writing result-oriented ad copy is difficult, as it must <br></br>
                            appeal to, entice, and convince consumers to take action. There is no <br></br>
                            magic formula to write perfect ad copy
                        </p>
                        <button className='get mb-5' onClick={openhome}>GET IT NOW!</button>
                    </div>

                    <div className="col-xl-6 " style={{ width: "550px" }}>
                        <img src='spider.jpeg' className='img-fluied rounded-4 w-100' alt='' height="400px"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Free
