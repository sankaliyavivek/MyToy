import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger);


function Content2() {
 const sectionRef = useRef();
  const leftCardRef = useRef();
  const rightCardRef = useRef();

       const navi= useNavigate()
    const hendeladd=()=>{
        navi('/catalog')
    }



   useEffect(() => {
    gsap.from(leftCardRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        scroller:"body",
        start: 'top 50%',
        end: "top -40%",
        toggleActions: 'play reverse play reverse',
      },
      x: -400,
      opacity: 0,
      duration: 1,
      delay:0.5,
      ease: 'power3.out',
       scrub:2
    });

    gsap.from(rightCardRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 50%',
        end: "top -40%",
        toggleActions: 'play reverse play reverse',
      },
      x: 400,
      opacity: 0,
      duration: 1,
      delay:0.5,
      ease: 'power3.out',
       scrub:2
    });
  }, []);


    return (
        <div className='container overflow-x-hidden  mt-5 ' ref={sectionRef}>
            <div className=' my-5 pt-5 '>
                <div className='row justify-content-evenly gap-4'>
                    <div className='col-10 col-md-5 col-xl-5 p1'  ref={leftCardRef}>
                        <div className=' d-flex align-items-center justify-content-evenly '>
                            <img src="teddy1.png" alt="" width={"40%"} />
                            <div>
                                <h2>Stuffed Animals</h2>
                                <button className='btn btn-light rounded-pill' onClick={hendeladd}>Shop Now</button>
                            </div>
                        </div>
                    </div>

                    <div className='col-10 col-md-5 col-xl-5 p2' ref={rightCardRef}>
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
