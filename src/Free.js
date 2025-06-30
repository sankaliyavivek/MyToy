import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Free() {
 const leftRef = useRef();
  const rightRef = useRef();
  const sectionRef = useRef();


   useEffect(() => {
    gsap.from(leftRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        scroller:"body",
        start: 'top 50%',
        toggleActions: 'play reverse play reverse',
      },
      x: -200,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
       scrub:2  
    });

    gsap.from(rightRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        scroller:"body",
        start: 'top 50%',
        toggleActions: 'play reverse play reverse',
      },
      x: 200,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
       scrub:2
    });
  }, []);



  const  open=  useNavigate();
    const openhome =()=>{
        open('/catalog')
      
    }
    return (
        <div className='pb-5 overflow-x-hidden' ref={sectionRef}>
            <div className="p-3" >
                <div className="row p-4 justify-content-evenly ">
                    <div className="col-xl-6 pt-4 free1" ref={leftRef}>
                        <h3 className='pb-4'>Available for FREE!</h3>
                        <p className='pb-4'>
                            A successful marketing plan relies heavily on the pulling-power <br></br>
                            of advertising copy. Writing result-oriented ad copy is difficult, as it must <br></br>
                            appeal to, entice, and convince consumers to take action. There is no <br></br>
                            magic formula to write perfect ad copy
                        </p>
                        <button className='get mb-5' onClick={openhome}>GET IT NOW!</button>
                    </div>

                    <div className="col-xl-6 " style={{ width: "550px" }} ref={rightRef}>
                        <img src='spider.jpeg' className='img-fluied rounded-4 w-100' alt='' height="400px"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Free
