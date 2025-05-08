import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import './cart.css';

function CartPage() {
  const { state } = useLocation();
  const [cart, setCart] = useState(state?.cart || []);
  const [paymentMethod, setPaymentMethod] = useState('');

  const total = cart.reduce((sum, item) => sum + item.price * item.count, 0);

  const handleDelete = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const handlePayment = () => {
    if (!paymentMethod) {
      alert('Please select a payment method');
      return;
    }

    if (paymentMethod === 'cod') {
      alert('Pay after delivery');
    } else {
      alert(`Proceed to pay via ${paymentMethod.toUpperCase()}`);
    }
  };

  return (
    <div className="cart-page">
      <div className="cart-container">
        {cart.length === 0 ? (
          <p className="empty-message">No items added.</p>
        ) : (
          <>
            <ul className="cart-list">
              {cart.map(item => (
                <li className="cart-item" key={item.id}>
                  <span>{item.name} x {item.count} = ₹{item.price * item.count}</span>
                  <button onClick={() => handleDelete(item.id)} className="delete-btn">Delete</button>
                </li>
              ))}
            </ul>

            <h3 className="total">Total: ₹{total}</h3>

            <div className="payment-method">
              <h4>Select Payment Method:</h4>
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={paymentMethod === 'cod'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                Cash on Delivery
              </label>
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="upi"
                  checked={paymentMethod === 'upi'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                UPI
              </label>
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={paymentMethod === 'card'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                Card
              </label>
            </div>

            <button className="pay-btn" onClick={handlePayment}>Pay</button>
          </>
        )}
      </div>
    </div>
  );
}

export default CartPage;
