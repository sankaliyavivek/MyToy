import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { data } from './All';
import { dta } from './dta';

function CardSections() {

    // const [data1, setData] = useState('');

    useEffect(() => {
        // fetch('http://localhost:500/cards')
        //     .then((res) => { return res.json() })
        //     .then((data) => {
        //         setData(data)
        //     })


            localStorage.setItem('card1',JSON.stringify(dta.cards))
    }, [])

        var card1 = JSON.parse(localStorage.getItem('card1')) || [] ;
    const opencata= useNavigate();
    const opencatalog=()=>{
        opencata('/catalog')
    }
    return (
        <div className='mt-5'>

            <div className='car container'>
                <div className='car1'>
                    <div className='car2'>
                        <div className='text-start stuf'><h2>Sturffed Animals</h2></div>
                        <div className='text-end line'>
                            <Link to={'/catalog'} className='line1' style={{color:"black" ,textDecoration:"none"}}>See All Toys
                                <i className="fa-solid fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                    <div className='cardi'>
                        <div className='card1' onClick={()=>{opencatalog()}}>
                            {card1 &&
                                card1.map((data) => (
                                    <div className='sec1' key={data.id}>
                                        <img src={data.url} alt='' height={190} width={100} ></img>
                                        <h4 className='pt-2'>{data.name}</h4>
                                        <button className='btn' style={{backgroundColor: "#a5c926"}}>{data.price}</button>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardSections
