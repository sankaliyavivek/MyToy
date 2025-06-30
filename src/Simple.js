import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import  { ScrollTrigger } from 'gsap/ScrollTrigger';



gsap.registerPlugin(ScrollTrigger);

function Simple() {

    const simpleRef = useRef();

     useEffect(() => {
    gsap.from(simpleRef.current, {
      scrollTrigger: {
        trigger: simpleRef.current,
        scroller:"body",
        start: 'top 40%',
        toggleActions: 'play reverse play reverse',
      },
      y: -100,
      opacity: 0,
      duration: 1,
      delay:0.5,
      ease: 'power3.out',
    });
  }, []);
    return (
        <div>
            <div className='sim pb-3' ref={simpleRef}>
                <div className='text-center sim2'>
                    <p className='text-success'>Made for Webflow</p>
                    <h2>Simple & Colorful Ecommerce
                        <br></br>
                        Template for Your Business
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default Simple
