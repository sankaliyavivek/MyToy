import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbars from './Navbars';
import RelatedProducts from './RelatedProducts';
import Subscribe from './Subscribe';
import Footer from './Footer';
import { UserLogin } from './App';
import Top from './Top';
import { Bounce, ToastContainer, toast } from 'react-toastify';

function View1() {
  const { eid } = useParams();
  const [jay1, setjay] = useState(null);
  const { logout, val, setval } = useContext(UserLogin);

  useEffect(() => {
    const allToys = JSON.parse(localStorage.getItem('alltoys')) || [];
    const selectedToy = allToys.find(toy => String(toy.id) === String(eid));
    setjay(selectedToy || null);
  }, [eid]);

  const enterdata = () => {
    if (!logout) {
      toast.info('Login first!', {
        position: 'top-center',
        autoClose: 3000,
        transition: Bounce,
      });
      return;
    }

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let exists = cart.find((item) => item.id === jay1.id);

    if (exists) {
      exists.quantity = parseInt(exists.quantity) + parseInt(val);
      exists.price = parseFloat(jay1.price) * exists.quantity;
      toast.success('Quantity updated in cart!', {
        position: 'top-center',
        autoClose: 3000,
        transition: Bounce,
        theme: 'colored',
      });
    } else {
      let cartItem = {
        id: jay1.id,
        url: jay1.url,
        name: jay1.name,
        price: parseFloat(jay1.price) * val,
        quantity: parseInt(val),
      };
      cart.push(cartItem);
      toast.success('Added to cart!', {
        position: 'top-center',
        autoClose: 3000,
        transition: Bounce,
        theme: 'colored',
      });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
  };

  // 🔒 Show loading message until jay1 is ready
  if (!jay1) {
    return (
      <div>
        <Top />
        <Navbars />
        <div className="container mt-5 text-center">
          <h4>Loading product or product not found...</h4>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Top />
      <Navbars />
      <div className="container">
        <div className="mt-5 mb-5">
          <div style={{ border: '1px solid gray ', borderRadius: '30px' }}>
            <p className="ps-2 pt-2">
              Home <i className="fa-solid fa-right-long"></i> Catalog{' '}
              <i className="fa-solid fa-right-long"></i>{' '}
              <span>{jay1.name}</span>
            </p>
          </div>
        </div>

        <div className="bg-white container pb-4" style={{ borderRadius: '10px' }}>
          <div className="pb-5">
            <div className="row p-4 justify-content-around ">
              <div className="col-xl-5 pt-4 free1 pb-5">
                <h3 className="pb-4">{jay1.name}</h3>
                <p className="pb-4">
                  A successful marketing plan relies heavily on the pulling- <br />
                  power of advertising copy. Writing result-oriented ad copy is <br />
                  difficult, as it must appeal to, entice, and convince consumers <br />
                  to take action.
                </p>
                <h3 className="pb-3 " style={{ color: '#a5c926' }}>
                  ${parseFloat(jay1.price).toFixed(2)} USD
                </h3>
                <input
                  type="number"
                  min="1"
                  id="inp"
                  value={val}
                  onChange={(e) => setval(e.target.value)}
                  style={{ width: '50px', borderRadius: '10px' }}
                  
                />
                <div
                  className="btn mt-2"
                  style={{ backgroundColor: '#a5c926', borderRadius: '20px' }}
                  onClick={enterdata}
                >
                  Add to Cart
                </div>
              </div>
              <div className="col-xl-5" style={{ width: '550px' }}>
                <img
                  src={jay1.url || 'fallback.jpg'}
                  className="img-fluid rounded-4 w-100"
                  alt={jay1.name || 'Toy Image'}
                  height="400px"
                />
              </div>
            </div>

            <div className="container p-4">
              <h5 className="pb-2">Product Details</h5>
              <div className="inline">
                <div className="liner"></div>
              </div>
            </div>

            <div className="container pt-3 p-4">
              <div className="d-flex justify-content-around" style={{ flexWrap: "wrap" }}>
                <div>
                  <h4 className="pb-3">Add Your Product Description</h4>
                  <p className="pb-4">
                    The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place.
                  </p>
                  <h4 className="pb-3">Simple & Elegant Template</h4>
                  <p className="pb-3">
                    Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled easily.
                  </p>
                  <ul>
                    <li>Beautifully Designed</li>
                    <li>Fully Responsive</li>
                    <li>CMS Content</li>
                    <li>Smooth Animations</li>
                  </ul>
                  <p className="pb-4">
                    Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action.
                  </p>
                  <h4 className="pb-1">Perfect Choice for Your Business</h4>
                  <p>
                    Grabbing the consumer’s attention isn’t enough; you have to keep that attention for at least a few seconds with quality product details.
                  </p>
                </div>

                <div className="productd">
                  <div className="productd1">
                    <table className="table">
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
        <ToastContainer />
      </div>
      <Footer />
    </div>
  );
}

export default View1;
