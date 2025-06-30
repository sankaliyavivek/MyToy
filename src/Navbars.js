import React, { useContext, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserLogin } from './App';
import Jay from './Navi';
import gsap from 'gsap';



function Navbars() {
  const { logname, setlogname, logout, setlogout } = useContext(UserLogin);

const navbarRef = useRef();
const q = gsap.utils.selector(navbarRef);

useEffect(() => {
  // Animate logo first
  gsap.from(q('.navbar-brand'), {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
    delay: 0.2,
  });

  // Then animate nav links
  gsap.from(q('.nav-link'), {
    y: 30,
    opacity: 0,
    duration: 0.6,
    ease: 'power3.out',
    stagger: 0.1,
    delay: 0.5,
  });

  // Lastly, animate cart
  gsap.from(q('.end'), {
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
    delay: 1.3,
  });
}, []);


  const navigate =useNavigate();
 function logoutinnavbar() {
  const confirmLogout = window.confirm("Are you sure you want to logout?");
  if (confirmLogout) {
    const user = JSON.parse(localStorage.getItem("loggedUser"));

    if (user) {
      // ✅ Option 1: REMOVE cart from storage
      localStorage.removeItem(`cart_${user.email}`); // removes that user's cart completely

      // ✅ Option 2 (optional): clear cart from UI only (if you have cart state)
      // setCart([]);
    }

    localStorage.removeItem("loggedUser"); // clear logged in user
    setlogout(false);
    setlogname("");
    navigate('/')
    window.location.reload();
  }
}


  return (
    <div className='main' style={{ backgroundColor: "white" }}>
      <div className='nv'  >
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container nav1" ref={navbarRef}>
            <Link className='navbar-brand' to={'/'}>ToyStore</Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse row justify-content-around align-items-center" id="navbarNavAltMarkup">
              <div className="navbar-nav col-xl-6">
                <Link to='/catalog' className="nav-link">Catalog</Link>
                <Link to='/delivery' className="nav-link">Delivery</Link>
                <Link to='/about' className="nav-link">About</Link>
                <Link to='/contacts' className="nav-link">Contacts</Link>

                {
                  logout ? (
                    <>
                      <Link className="nav-link" onClick={logoutinnavbar}>Logout</Link>
                    </>
                  ) : (
                    <>
                      <Link to="/vivek" className="nav-link">Registration</Link>
                      <Link to="/log" className="nav-link">Login</Link>
                    </>
                  )
                }

                {logname && <Link className="nav-link">{logname}</Link>}
              </div>

              <div className='col-xl-3 end'>
                <Jay />
              </div>
            </div>

          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbars;
