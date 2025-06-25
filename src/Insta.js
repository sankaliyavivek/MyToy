import React, { useEffect, useState } from 'react'
import { dta } from './dta'
// import { data } from './All';


function Insta() {


    useEffect(() => {
        localStorage.setItem('insta', JSON.stringify(dta.insta))
    }, [])


    var insta = JSON.parse(localStorage.getItem('insta')) || dta.insta;
    console.log(insta)

    return (
        <div className='pb-5'>
            <div className='kau text-center'>
                <div className='elas' >
                    <p style={{ color: "#a5c926" }}>@ElasticThemes</p>
                    <h2>We're on Instagram!</h2>
                </div>

                <div className='d-flex flex-wrap gap-3 justify-content-center'>
                    {
                        insta &&
                        insta.map((data, index) => {
                            if (!data || !data.url) return null; // Skip invalid items
                            return (
                                <div className='ins' key={data.id || index}>
                                    <div style={{ height: "200px" }} >
                                        <img src={data.url} alt='' height={'200'} />
                                    </div>
                                </div>
                            );
                        })

                    }
                </div>
                <div className='pt-5'>
                    <button className='more' >See More Photos</button>
                </div>
            </div>
        </div>
    )
}

export default Insta
