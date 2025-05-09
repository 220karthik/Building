import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import './cart.css';
import { jsPDF } from 'jspdf';

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

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(25);
    doc.text('BILL', 14, 20); // Title

    let yOffset = 30; // Start position for items

    cart.forEach(item => {
      doc.setFontSize(12);
      doc.text(`${item.name} x ${item.count} = ₹${item.price * item.count}`, 14, yOffset);
      yOffset += 10; // Adjust line height for next item
    });

    doc.setFontSize(14);
    doc.text(`Total: ₹${total}`, 14, yOffset);

    doc.save('Bill.pdf'); // Download the PDF
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

            {/* Button to generate the PDF */}
            <button className="summary-btn" onClick={generatePDF}>Download Summary (BILL)</button>
          </>
        )}
      </div>
    </div>
  );
}

export default CartPage;
