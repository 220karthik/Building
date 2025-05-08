import React, { useState } from 'react';
import './userdash.css';
import { useNavigate } from 'react-router-dom';

const materials = [
  {
    id: 1,
    name: 'River sand',
    price: 4000,
    desc: 'Pure river sand from Delta region Rs:4000 per unit.',
    image: 'https://4.imimg.com/data4/NI/PX/ANDROID-47284643/product-500x500.jpeg',
  },
  {
    id: 2,
    name: 'Bricks',
    price: 12,
    desc: 'Red sand brick from kongu region RS:12 per piece',
    image: 'https://media.istockphoto.com/id/639377288/photo/wood-fired-clay-brick-kiln-on-the-bank-of-a-river.jpg?s=1024x1024&w=is&k=20&c=F8kq7bcfrRjBQuqzCPH7-NfpjlRJP7JD8_vRck7-4Io=',
  },
  {
    id: 3,
    name: 'Cement',
    price: 249,
    desc: 'Good quality cement from different brands RS:249 per bag',
    image: 'https://static.wixstatic.com/media/e68837_78fe43af2de04713814be5fe2d033ba1~mv2.jpeg/v1/fill/w_480,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/e68837_78fe43af2de04713814be5fe2d033ba1~mv2.jpeg',
  },
  {
    id: 4,
    name: 'Pipes',
    price: 16,
    desc: 'Good quality pipes made up of steel RS:23 per meter and pvc Rs:15 per meter ',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Vb1wmAqrFbpXwH5L5GZoiLv4pAYIbMOryQ&s',
  },
  {
    id: 5,
    name: 'Gravel',
    price: 2000,
    desc: 'Gravel and sand are both natural, unconsolidated materials used in construction and other applications Rs:2000 per unit ',
    image: 'https://4.imimg.com/data4/GJ/MK/ANDROID-37464862/product.jpeg',
  },
  {
    id: 6,
    name: '1/2 Inch Blue Metal',
    price: 1300,
    desc: 'Size: 1/2 Inch · Form: Solid · Usage/Application: Construction · Color: Blue · From: Solid · Material: Concrete,Rs:1300 per unit',
    image: 'https://5.imimg.com/data5/SELLER/Default/2025/3/496539856/EM/PR/BV/39742437/20mm-blue-metal-construction-aggregate-250x250.jpg',
  },
  {
    id: 7,
    name: 'Wood',
    price: 200000,
    desc: 'A natural material used for framing, roofing, and interior finishes. It offers good insulation and compressive strength Rs:20000 per ton ',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3R2iEb0hybsF3ZDpF_U4h8cxEljKn6n-kaw&s',
  },
  {
    id: 8,
    name: 'Glass',
    price: 500,
    desc: 'Glass is a hard, brittle, usually transparent or translucent substance that is typically made by fusing silica (sand) with other materials like soda and lime Rs:500 per sqrt',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIUkmDPEw77gOHsQxs1uvE31YTNcqykFG5ig&s',
  }
];

const vehicles = [
  {
    id: 9,
    name: 'Tractor',
    price: 3000,
    desc: 'Used for carrying heavy materials on-site. Rs:3000 per day.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRVDDIyCauX_xvxfF5F9dzF71iti_Qn7YzlA&s',
  },
  {
    id: 10,
    name: 'Tipper Lorry',
    price: 8000,
    desc: 'Used for transporting sand, gravel etc. Rs:8000 per day',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDtwq_YrwbNW0OJ7IS05Ggye1xhHecIMDwAA&s',
  },
  {
    id: 11,
    name: 'JCB',
    price: 12000,
    desc: 'Used for multi purpose in building buildings. Rs:12000 per day',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBzAixT7BZDDpjd8YZRpUuI6WZ4rjzK6ha8Q&s',
  },
  {
    id: 12,
    name: 'Bobcat',
    price: 20000,
    desc: 'Used for multi purpose in building buildings, Rs:3000 per day.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJaMyWovQv7A_XI1K-3QLsjAFnMBpyhpY6Gw&s'
  },
  {
    id: 13,
    name: 'TATA 407',
    price: 2300,
    desc: 'Used for carrying heavy materials on-site. Rs:2300 per day.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-4eiZ9pQ8X9V_CtHnL_oFXl_NQ5o2RZuAqw&s',
  }
];

function ProductPage() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const addToCart = (item) => {
    const exists = cart.find(i => i.id === item.id);
    if (exists) {
      setCart(cart.map(i => i.id === item.id ? { ...i, count: i.count + 1 } : i));
    } else {
      setCart([...cart, { ...item, count: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  const goToCart = () => {
    navigate('/cart', { state: { cart } });
  };

  return (
    <div>
      <h2>Materials</h2>
      <div className="products">
        {materials.map(item => (
          <div key={item.id} className="card">
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.desc}</p>
            <p><strong>₹{item.price}</strong></p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <h2>Vehicles</h2>
      <div className="products">
        {vehicles.map(item => (
          <div key={item.id} className="card">
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.desc}</p>
            <p><strong>₹{item.price}</strong></p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <h2>Cart Summary</h2>
      <div className="cart-summary">
        {cart.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          <ul>
            {cart.map(item => (
              <li key={item.id}>
                {item.name} (x{item.count}) 
                <button onClick={() => removeFromCart(item.id)}>Delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <button className="go-to-cart-btn" onClick={goToCart}>Go to Cart</button>
    </div>
  );
}

export default ProductPage;
