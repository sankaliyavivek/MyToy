import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbars from './Navbars';
import Footer from './Footer';
import RelatedProducts from './RelatedProducts';
import Subscribe from './Subscribe';
import Top from './Top';

function WoodenToyView() {
  const { vid } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const allWooden = JSON.parse(localStorage.getItem('wooden')) || [];
    const found = allWooden.find(item => String(item.id) === String(vid));
    setProduct(found);
  }, [vid]);

  const addToCart = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      alert("Please log in first to add items to cart.");
      navigate("/log"); // Optional: Redirect to login page
      return;
    }

    if (!product || !product.id) {
      alert("Invalid product.");
      return;
    }

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.findIndex(item => item.id === product.id);

    if (existing !== -1) {
      cart[existing].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Item added to cart!");
  };

  if (!product) {
    return (
      <div>
        <Top />
        <Navbars />
        <div className="container mt-5 text-center">
          <h4>Product not found or still loading...</h4>
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
          <div style={{ border: "1px solid gray", borderRadius: "30px" }}>
            <p className="ps-2 pt-2">
              Home <i className="fa-solid fa-right-long"></i> Catalog <i className="fa-solid fa-right-long"></i>{" "}
              <span>{product.name}</span>
            </p>
          </div>
        </div>

        <div className="bg-white container pb-4" style={{ borderRadius: "10px" }}>
          <div className="pb-5">
            <div className="row p-4 justify-content-around ">
              <div className="col-xl-5 pt-4 free1 pb-5">
                <h3 className="pb-4">{product.name}</h3>
                <p className="pb-4">
                  A successful marketing plan relies heavily on the pulling- <br />
                  power of advertising copy. Writing result-oriented ad copy is <br />
                  difficult, as it must appeal to, entice, and convince consumers <br />
                  to take action.
                </p>
                <h3 className="pb-3" style={{ color: "#a5c926" }}>{product.price}</h3>
                <input type="number" min={1} defaultValue={1} style={{ width: "50px", borderRadius: "10px" }} />
                <button className="btn ms-3" style={{ backgroundColor: "#a5c926", borderRadius: "20px" }} onClick={addToCart}>
                  Add To Cart
                </button>
              </div>
              <div className="col-xl-5" style={{ width: "550px" }}>
                <img src={product.url} className="img-fluid rounded-4 w-100" alt="" height="400px" />
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
      </div>
      <Footer />
    </div>
  );
}

export default WoodenToyView;
