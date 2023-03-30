import React,{Fragment} from 'react'
import { useNavigate,Link } from 'react-router-dom'

const Navbar = () => {
    const navigate=useNavigate();
    const register=()=>{

    }
  return (
    <Fragment>
      <nav>
      <img src="logo 2.svg" alt="" />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact us</Link></li>
      </ul>
      <div className="nav-buttons">
        <button className="btn btn-secondary" onClick={()=>navigate('/register')}>Register</button>
        <button className="btn btn-gradient" onClick={()=>navigate('/login')}>Sign In</button>
      </div>
    </nav>
    </Fragment>
  )
}

export default Navbar
