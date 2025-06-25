import React from 'react'
import { useNavigate } from 'react-router-dom'
import { data } from './All';

function Story() {

    // console.log(data[0].cards)
   const openyou= useNavigate();
   const openyoutube=()=>{
    openyou('/OpenYou')
   }
    return (
        <div className='mt-5'>
            <div className='our'>

                <div className='the'>
                    <p>About The Shop</p>
                    <h2>Watch Our Story</h2>
                    <p className='pb-3'>There is no magic formula to write perfect ad copy. It is based on a number of factors, including ad placement,
                        <br></br>     demographic, even the consumer’s mood.</p>

                    <button className=' play' onClick={()=>{openyoutube()}}>
                        <i className="fa-solid fa-play"></i>
                    </button>

                </div>

            </div>
        </div>
    )
}

export default Story
