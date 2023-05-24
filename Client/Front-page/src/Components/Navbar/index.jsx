import React from "react";
import { Link } from "react-router-dom";
import CallIcon from '@mui/icons-material/Call';

const Navbar = () => {
  return (
    <>
      <nav>

{/* <div className="telephonemainBox">
  <div className="telephoneBox">
    <p>We believe we helps people
for happier lives</p>
<img src="https://preview.colorlib.com/theme/immigration/img/logo.png" alt="" />
<p>+880 123 12 658  439 
  <div className="boxx">
      <CallIcon/>
  </div>
</p>
  </div>
  
</div> */}

        <div className="navmainBox">
          <ul>
           <li><Link to="/">HOME</Link></li>
           <li><Link to="/about">ABOUT</Link></li>
           <li><Link to="/immigration">IMMIGIRATION</Link></li>
         <li><Link to="/course">COURSE</Link></li>
            <li><Link to="/country">COUNTRY</Link></li>
       <li><Link to="/blog">BLOG</Link></li>
           <li><Link to="/contact">CONTACT</Link></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
