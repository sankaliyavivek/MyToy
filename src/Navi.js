import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Bounce, ToastContainer, toast } from 'react-toastify';

 export function MyVerticallyCenteredModal(props) {
  const [filldata, setfilldata] = useState([]);

  const getUserCartKey = () => {
    const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
    return loggedUser ? `cart_${loggedUser.email}` : 'cart';
  };

  useEffect(() => {
    const userCartKey = getUserCartKey();
    const cartData = JSON.parse(localStorage.getItem(userCartKey)) || [];
    setfilldata(cartData);
  }, [props.show]);

  const extractNumber = (price) => {
    const match = String(price || '').match(/[\d,.]+/);
    return match ? parseFloat(match[0].replace(/,/g, '')) : 0;
  };

  const updateCart = (newCart) => {
    const userCartKey = getUserCartKey();
    localStorage.setItem(userCartKey, JSON.stringify(newCart));
    setfilldata(newCart);
  };

  const remove = (id) => {
    const updatedCart = filldata.filter(item => item.id !== id);
    updateCart(updatedCart);
    toast.success('Item removed!', {
      position: "top-center",
      autoClose: 2000,
      transition: Bounce,
      theme: "colored"
    });
  };

  const increment = (id) => {
    const updated = filldata.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    updateCart(updated);
  };

  const decrement = (id) => {
    const updated = filldata.map(item => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    updateCart(updated);
  };

  const buy = () => {
    toast.info('In progress...', {
      position: "top-center",
      autoClose: 3000,
      transition: Bounce,
    });
  };

  const calculateSubtotal = () => {
    return filldata.reduce((total, item) => total + extractNumber(item.price) * item.quantity, 0);
  };

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body className='App'>
        {filldata.length === 0 ? (
          <h5 className='text-center'>Your cart is empty</h5>
        ) : (
          <>
            {filldata.map((i) => (
              <div key={i.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 40px", borderBottom: "1px solid #ddd" }}>
                <div style={{ display: "flex" }}>
                  <div className='mx-3'>
                    <img src={i.url} alt="" height={70} />
                  </div>
                  <div>
                    <h5>{i.name}</h5>
                    <span>Total Price: ₹{(extractNumber(i.price) * i.quantity).toFixed(2)}</span>

                    <div className="my-2">
                      <button className='btn btn-sm btn-danger' onClick={() => decrement(i.id)}>-</button>
                      <span className='mx-2'>Qty: {i.quantity}</span>
                      <button className='btn btn-sm btn-success' onClick={() => increment(i.id)}>+</button>
                    </div>
                    <p className='btn btn-danger mx-1' style={{ cursor: "pointer" }} onClick={() => remove(i.id)}>Remove</p>
                    <p className='btn btn-info' onClick={buy}>Buy Now..</p>
                  </div>
                </div>
              </div>
            ))}
            <div className='text-end mt-3 px-5'>
              <h5>Subtotal: ₹{calculateSubtotal().toFixed(2)}</h5>
            </div>
          </>
        )}
        <ToastContainer />
      </Modal.Body>
    </Modal>
  );
}

// import React, { useEffect, useState } from 'react';
// import MyVerticallyCenteredModal from './MyVerticallyCenteredModal'; // if it's separate
// import { JSON } from 'react-toastify';

function Jay() {
  const [modalShow, setModalShow] = useState(false);
  const [filldata, setfilldata] = useState([]);

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
    const userCartKey = loggedUser ? `cart_${loggedUser.email}` : null;
    const cartData = userCartKey ? JSON.parse(localStorage.getItem(userCartKey)) || [] : [];
    setfilldata(cartData);
  }, [modalShow]);

  return (
    <>
      <Button id='btncolor' onClick={() => setModalShow(true)}>
        Cart
        <span className='mx-3'><i className="fa-solid fa-cart-shopping"></i></span>
        <span className='colorinbackground'>{filldata.length}</span>
      </Button>

      <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default Jay;
