import React, { useState } from 'react';
import './admindash.css';

const AdminDashboard = () => {
  const [products, setProducts] = useState([
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
    },
  ]);

  const [vehicles, setVehicles] = useState([
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
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJaMyWovQv7A_XI1K-3QLsjAFnMBpyhpY6Gw&s',
    },
    {
      id: 13,
      name: 'TATA 407',
      price: 2300,
      desc: 'Used for carrying heavy materials on-site. Rs:2300 per day.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-4eiZ9pQ8X9V_CtHnL_oFXl_NQ5o2RZuAqw&s',
    },
  ]);

  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    desc: '',
    image: '',
  });

  const [newVehicle, setNewVehicle] = useState({
    name: '',
    price: '',
    desc: '',
    image: '',
  });

  const handleProductChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleVehicleChange = (e) => {
    setNewVehicle({ ...newVehicle, [e.target.name]: e.target.value });
  };

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      return alert("Please fill all product fields.");
    }
    const newEntry = {
      ...newProduct,
      id: Date.now(),
      price: parseFloat(newProduct.price),
    };
    setProducts([...products, newEntry]);
    setNewProduct({ name: '', price: '', desc: '', image: '' });
  };

  const handleAddVehicle = () => {
    if (!newVehicle.name || !newVehicle.price || !newVehicle.image) {
      return alert("Please fill all vehicle fields.");
    }
    const newEntry = {
      ...newVehicle,
      id: Date.now(),
      price: parseFloat(newVehicle.price),
    };
    setVehicles([...vehicles, newEntry]);
    setNewVehicle({ name: '', price: '', desc: '', image: '' });
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const handleDeleteVehicle = (id) => {
    setVehicles(vehicles.filter(v => v.id !== id));
  };

  return (
    <div className="admin-page">
      <h2>Admin Dashboard</h2>

      <div className="add-product-form">
        <h3>Add Product</h3>
        <input type="text" name="name" placeholder="Product Name" value={newProduct.name} onChange={handleProductChange} />
        <input type="number" name="price" placeholder="Price" value={newProduct.price} onChange={handleProductChange} />
        <input type="text" name="desc" placeholder="Description" value={newProduct.desc} onChange={handleProductChange} />
        <input type="text" name="image" placeholder="Image URL" value={newProduct.image} onChange={handleProductChange} />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>

      <h3>Products</h3>
      <div className="product-grid">
        {products.map(p => (
          <div key={p.id} className="card">
            <img src={p.image} alt={p.name} className="product-image" />
            <h2>{p.name}</h2>
            <p className="price">₹{p.price}</p>
            <p className="desc">{p.desc}</p>
            <button className="delete-btn" onClick={() => handleDeleteProduct(p.id)}>Delete</button>
          </div>
        ))}
      </div>

      <div className="add-product-form">
        <h3>Add Vehicle</h3>
        <input type="text" name="name" placeholder="Vehicle Name" value={newVehicle.name} onChange={handleVehicleChange} />
        <input type="number" name="price" placeholder="Price" value={newVehicle.price} onChange={handleVehicleChange} />
        <input type="text" name="desc" placeholder="Description" value={newVehicle.desc} onChange={handleVehicleChange} />
        <input type="text" name="image" placeholder="Image URL" value={newVehicle.image} onChange={handleVehicleChange} />
        <button onClick={handleAddVehicle}>Add Vehicle</button>
      </div>

      <h3>Vehicles</h3>
      <div className="product-grid">
        {vehicles.map(v => (
          <div key={v.id} className="card">
            <img src={v.image} alt={v.name} className="product-image" />
            <h2>{v.name}</h2>
            <p className="price">₹{v.price}</p>
            <p className="desc">{v.desc}</p>
            <button className="delete-btn" onClick={() => handleDeleteVehicle(v.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
