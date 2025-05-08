import  Bgvideo from './asserts/Bgvideo.mp4';
import './Welcome.css';
import { Navigate, useNavigate } from 'react-router-dom';

function Welcome() {

  const navigate = useNavigate();

  const open = () => {
    navigate('/Login')
  };
  
    return (
      <div className='video'>
        <h1>Welcome To Website</h1>
        <video src={Bgvideo} autoPlay loop muted />
        <button onClick={open}className='but'>Click here to continue</button>
      </div>
    );
  }
  
  export default Welcome;
  