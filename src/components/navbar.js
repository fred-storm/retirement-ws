import React, {useState} from 'react';
import w_Flag from '../assets/white_flag.svg';
import { Link } from 'react-router-dom';
import "../Styles/navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';



function Navbar() {

  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks)
  }

  return (
    <div className='navbar'>
        <div className='leftSide' id={openLinks ? "open":"close"}>
            <img src={w_Flag} alt="" />
            <div className='hiddenLinks'>
            <Link to="/"> Home </Link>
            <Link to="/docs"> Docs </Link>
            <Link to="/about"> About </Link>
            <Link to="/contact"> Contact </Link>
            </div>
        </div>
        <div className='rightSide'>
            <Link to="/"> Home </Link>
            <Link to="/docs"> Docs </Link>
            <Link to="/about"> About </Link>
            <Link to="/contact"> Contact </Link>
            <button onClick={toggleNavbar}>
            <ReorderIcon />
            </button>

        </div>
    </div>
  );
}

export default Navbar