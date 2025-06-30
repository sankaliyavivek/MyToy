import gsap from 'gsap';
import React, { useRef,useEffect } from 'react'
import { Link } from 'react-router-dom'

function Content() {
    const boxRef = useRef();

  useEffect(() => {
    gsap.from(boxRef.current, {
      scale: 0,
      opacity: 0,
      duration: 1,
      delay:1,
      ease: 'back.out(1.7)', // smooth elastic scaling
    });
  }, []);

    return (
        <div >
            <div className='back'>
                <div className='backimg'>
                    <div className='say'>
                        <div className='say1 text-center' ref={boxRef}>
                            <p >Say Hello to ToyStore!</p>
                            <h3 className='mb-3'>
                                Free Ecommerce <br></br>
                                Template for Webflow
                            </h3>

                            <Link to={'/catalog'} className='btn' >Open Catalog</Link>
                        </div>
                    </div>
                    <div className='round'>
                        <div className='round2'>
                            <div className='round3'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content
