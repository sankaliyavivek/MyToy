import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbars from './Navbars';
import Footer from './Footer';
import RelatedProducts from './RelatedProducts';
import Subscribe from './Subscribe';
import Top from './Top';

function StuffedToyView() {
  const { sid } = useParams();
  const [stuffed, setStuffed] = useState(null);
  const navigat = useNavigate();


  useEffect(() => {
    const allStuffed = JSON.parse(localStorage.getItem('stuffed')) || [];
    const product = allStuffed.find(item => String(item.id) === String(sid));
    setStuffed(product);
  }, [sid]);

const addToCart = () => {
  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

  if (!loggedUser) {
    alert("Please log in to add items to your cart.");
    navigat("/log");
    return;
  }

  if (!stuffed || !stuffed.id) {
    alert("Invalid product.");
    return;
  }

  const cartKey = `cart_${loggedUser.email}`;
  const cart = JSON.parse(localStorage.getItem(cartKey)) || [];

  const existingIndex = cart.findIndex(item => item.id === stuffed.id);

  if (existingIndex !== -1) {
    cart[existingIndex].quantity += 1;
  } else {
    cart.push({ ...stuffed, quantity: 1 });
  }

  localStorage.setItem(cartKey, JSON.stringify(cart));
  alert("Added to cart!");
};


  if (!stuffed) {
    return (
      <div>
        <Top />
        <Navbars />
        <div className='container mt-5'>
          <h4 className='text-center'>Product not found or still loading...</h4>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Top />
      <Navbars />
      <div className='container'>
        <div className='mt-5 mb-5'>
          <div style={{ border: "1px solid gray", borderRadius: "30px" }}>
            <p className='ps-2 pt-2'>Home <i className="fa-solid fa-right-long"></i> Catalog <i className="fa-solid fa-right-long"></i> <span>{stuffed.name}</span></p>
          </div>
        </div>
        <div className='bg-white container pb-4' style={{ borderRadius: "10px" }}>
          <div className='pb-5'>
            <div className="row p-4 justify-content-around ">
              <div className="col-xl-5 pt-4 free1 pb-5">
                <h3 className='pb-4'>{stuffed.name}</h3>
                <p className='pb-4'>
                  A successful marketing plan relies heavily on the pulling- <br />
                  power of advertising copy. Writing result-oriented ad copy is <br />
                  difficult, as it must appeal to, entice, and convince consumers <br />
                  to take action. There is no magic formula to write perfect ad <br />
                  copy. It is based on a number of factors.
                </p>
                <h3 className='pb-3' style={{ color: "#a5c926" }}>{stuffed.price}</h3>
                <input type='number' min={1} defaultValue={1} style={{ width: "50px", borderRadius: "10px" }} />
                <button className='btn ms-3' style={{ backgroundColor: "#a5c926", borderRadius: "20px" }} onClick={addToCart}>
                  Add To Cart
                </button>
              </div>
              <div className="col-xl-5" style={{ width: "550px" }}>
                <img src={stuffed.url} className='img-fluid rounded-4 w-100' alt='' height="400px" />
              </div>
            </div>

            {/* Product Description */}
            <div className='container p-4 '>
              <h5 className='pb-2'>Product Details</h5>
              <div className='inline'><div className='liner'></div></div>
            </div>

            <div className='container pt-3 p-4'>
              <div className='d-flex justify-content-around' style={{ flexWrap: "wrap" }}>
                <div>
                  <h4 className='pb-3'>Add Your Product Description</h4>
                  <p className='pb-4'>
                    The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place.
                  </p>
                  <h4 className='pb-3'>Simple & Elegant Template</h4>
                  <p className='pb-3'>Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled easily.</p>

                  <ul>
                    <li>Beautifully Designed</li>
                    <li>Fully Responsive</li>
                    <li>CMS Content</li>
                    <li>Smooth Animations</li>
                  </ul>

                  <p className='pb-4'>
                    A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult.
                  </p>

                  <h4 className='pb-1'>Perfect Choice for Your Business</h4>
                  <p>
                    Grabbing the consumer’s attention isn’t enough; you have to keep that attention for at least a few seconds with good product details.
                  </p>
                </div>

                <div className='productd'>
                  <div className='productd1'>
                    <table className='table'>
                      <tbody>
                        <tr>
                          <td>Height</td>
                          <td>15.5 oz</td>
                        </tr>
                        <tr>
                          <td>Width</td>
                          <td>10 in</td>
                        </tr>
                        <tr>
                          <td>Length</td>
                          <td>12 in</td>
                        </tr>
                        <tr>
                          <td>Weight</td>
                          <td>15.5 oz</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <RelatedProducts />
        <Subscribe />
      </div>
      <Footer />
    </div>
  );
}

export default StuffedToyView;
