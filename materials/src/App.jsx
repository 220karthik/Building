import Welcome from './welcome.jsx';
import Navbar from './Nabar.jsx';
import Login from './Login.jsx';
import SignIn from './Signup.jsx';
import ProductPage from './userdash.jsx';
import CartPage from './cart.jsx';
import AdminDashboard from './admindash.jsx';
import Footer from './Footer.jsx';
import { Route, Routes } from 'react-router-dom'
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signin" element={<SignIn />} />
        <Route path="/Products" element={<ProductPage />} />
        <Route path="/Cart" element={<CartPage />} />
        <Route path="/Admindash" element={<AdminDashboard />} />
      </Routes>
      <Footer />

    </>

  );
}


export default App
