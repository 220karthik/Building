import { FaInstagram, FaWhatsapp, FaFacebook, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p><strong>Address:</strong>Do.no:6,Amman nagar,Saravanampatti, Coimbatore-641035</p>
        <p><strong>Contact:</strong> <a href="tel:9345587584">9345587584</a></p>
        <p><strong>Email:</strong> <a href="karthiksolaisamy5@gmail.com">karthiksolaisamy5@gmail.com</a></p>
        <p><strong>Opening Hours:</strong> Mon - Sat: 9:00 AM – 9:00 PM</p>
      </div>

      <div className="footer-social">
        <a href="https://www.instagram.com/_mr.criminal66/?next=%2F" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram className="icon" />
        </a>
        <a href="https://wa.me/9345587584" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <FaWhatsapp className="icon" />
        </a>
        <a href="https://www.facebook.com/karthik.hummer" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebook className="icon" />
        </a>
        <a href="https://www.google.com/maps/place/River+Sand+Supplier/@11.0634467,76.9886575,13.66z/data=!4m15!1m8!3m7!1s0x3ba8f7f3acac202b:0xb9a1348889c47108!2sSaravanampatti,+Coimbatore,+Tamil+Nadu!3b1!8m2!3d11.0796991!4d76.9997393!16zL20vMGY2Nms5!3m5!1s0x3ba8f7df1fae783f:0x19d2e06cea16dd20!8m2!3d11.0615406!4d76.9831848!16s%2Fg%2F11f3wxhdky?entry=ttu&g_ep=EgoyMDI1MDUwNS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" aria-label="Google Maps">
          <FaMapMarkerAlt className="icon" />
        </a>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 KMT Building Materials. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
