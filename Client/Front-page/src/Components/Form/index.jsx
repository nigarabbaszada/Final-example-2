import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import CallEndIcon from '@mui/icons-material/CallEnd';
import DiamondIcon from '@mui/icons-material/Diamond';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import StarIcon from '@mui/icons-material/Star';
const Form = () => {
  return (
<>

<section>


<div className='formmainBox'>
  <div className='formText'>
    <h2>Globally Connected
by Large Network</h2>
<br />
<h4>We are here to listen from you deliver exellence</h4>
<br />
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
<br />
<button className='formBtn'>View Details</button>
 </div>

 <div className='form'>
  
  <input  className='formInput' type="text" placeholder='Name' />
  <br />
  <br />
  <input className='formInput' type="email" placeholder='Email' />
  <br />
  <br />
  <input className='formInput' type="number" placeholder='Phone Number' />
  <br />
  <br />
 <select className='formSelect' name="Select Visa" id="Select Visa" placeholder='Select Visa'>
    <option value="Pickup One">Pickup One</option>
    <option value="Pickup two">Pickup Two</option>
    <option value="Pickup three">Pickup Three</option>
    <option value="Pickup four">Pickup Four</option>
 </select>
 <br />
 <br />
<textarea name="" id="" cols="30" rows="5" placeholder='Messege'></textarea>
<br />
<br />
<button className='formBtn'>Request Free Consultancy</button>
</div>

    
</div>


<div className='feature'>
    <div className='featureText'>
         <h2>Our Unique Features that can impress you</h2>
         <br />
         <p>Who are in extremely love with eco friendly system.</p>
    </div>
</div>


<div className='iconCards'>
    <div className='iconCard'>
        <h2><PersonIcon/>
            Expert Technicians</h2>
        <br />
        <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
    </div>
    <div className='iconCard'>
        <h2> <MiscellaneousServicesIcon/> Service</h2>
        <br />
        <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
    </div>
    <div className='iconCard'>
        <h2> <CallEndIcon/> Great Support</h2>
        <br />
        <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
    </div>
    <div className='iconCard'>
        <h2> <RocketLaunchIcon/>  Technical Skills</h2>
        <br />
        Usage of the Internet is becoming more common due to rapid advancement of technology and power.
    </div>
    <div className='iconCard'>
        <h2> <DiamondIcon/> Highly Recommended</h2>
        <br />
        <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
    </div>
    <div className='iconCard'>
        <h2> <ChatBubbleIcon/> Positive Reviews</h2>
        <br />
        <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
    </div>

</div>


<div className='customermainBox'>
      <div className='customerText'>
        <h2>How Our Customers Treat Us</h2>
        <br />
        <p>Who are in extremely love with eco friendly system.</p>
      </div>
</div>



<div className='commentmainBox'>
    <div className='commentBox'>
       <h3>Fannie Rowe <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> </h3>
       <br />
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia error cumque amet recusandae architecto quam quaerat deserunt id, aliquid quasi alias explicabo rerum animi nostrum consequatur praesentium saepe ut quo.</p>
    </div>
    <div className='commentBox'>
    <h3>Huldo Sutton <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> </h3>
       <br />
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia error cumque amet recusandae architecto quam quaerat deserunt id, aliquid quasi alias explicabo rerum animi nostrum consequatur praesentium saepe ut quo.</p>
    </div>

</div>


<div className='imageCard'>
    <div>
        <img src="https://preview.colorlib.com/theme/immigration/img/l1.png" alt="" />
    </div>
    <div>
        <img src="https://preview.colorlib.com/theme/immigration/img/l2.png" alt="" />
    </div>
    <div>
        <img src="https://preview.colorlib.com/theme/immigration/img/l3.png" alt="" />
    </div>
    <div><img src="https://preview.colorlib.com/theme/immigration/img/l4.png" alt="" /></div>
    <div>
        <img src="https://preview.colorlib.com/theme/immigration/img/l5.png" alt="" />
    </div>


</div>



<div className='blogmainBox'>
    <div className='blog'> 
     <h2>Latest News from our Blog</h2>
     <br />
     <p>Who are in extremely love with eco friendly system.</p>
</div>
    </div>


    
    <div className='portablemainBox'>
        <div className='portableBox'>
            <img className='portableImg' src="https://preview.colorlib.com/theme/immigration/img/b1.jpg" alt="" />
            <div>
            <button className='portableBtn'>Travel</button>
            <button className='portableBtn'>Life style</button>
            </div>
            <br />
            <h3>Portable Latest Fashion  for young women</h3>
            <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
            <br />
            <span>31st January, 2018</span>

        </div>

        <div className='portableBox'>
            <img className='portableImg' src="https://preview.colorlib.com/theme/immigration/img/b1.jpg" alt="" />
            <div>
            <button className='portableBtn'>Travel</button>
            <button className='portableBtn'>Life style</button>
            </div>
            <br />
            <h3>Portable Latest Fashion  for young women</h3>
            <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
            <br />
            <span>31st January, 2018</span>

        </div>
        

    </div>


















</section>

</>
  )
}

export default Form