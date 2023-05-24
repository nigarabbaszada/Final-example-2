// import React, { useEffect, useState } from "react";

const Section = () => {


  // const[products,setProducts]=useState([])
  
  //   useEffect(()=>{
  //     fetch("http://localhost:7070/products")
  //     .then(res=>res.json())
  //     .then(info=>
  //       console.log(info)
  //       )
   
    
  // },[])




  return (
    <>
      <section>

        {/* {products && products.map((product)=>{

<div className="sectionmainBox">
<div className="sectionText">
  {product.name}
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation.
  </p>
  <div>
    {" "}
    <button className="sectionBtn">Request Free Consultancy</button>
  </div>
</div>
</div>

        })} */}



 

        <div className="sectionmainBox">
          <div className="sectionText">
            <h3>Start planning your New Dream</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
            <div>
              {" "}
              <button className="sectionBtn">Request Free Consultancy</button>
            </div>
          </div>
        </div>

        <div className="requirements">
          <div>
            <h2>Requirements to be Immigrants</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        
<div className="cards">
    <div className="cardBox">
        <img className="cardImg" src="https://preview.colorlib.com/theme/immigration/img/s1.jpg" alt="" />
        <br />
        <br />
        <button className="cardBtn">United States</button>
        <br />
        <br />
        <h3>Addiction  When Gambling Becomes A Problem</h3>
        <br />
        <p>inappropriate behavior ipsum dolor sit amet, consectetur.</p>
    </div>


    <div className="cardBox">
        <img className="cardImg" src="https://preview.colorlib.com/theme/immigration/img/s2.jpg" alt="" />
        <br />
        <br />
        <button className="cardBtn">Canada</button>
        <br />
        <br />
        <h3>Addiction  When Gambling Becomes A Problem</h3>
        <br />
        <p>inappropriate behavior ipsum dolor sit amet, consectetur.</p>
    </div>


    <div className="cardBox">
        <img className="cardImg" src="https://preview.colorlib.com/theme/immigration/img/s3.jpg" alt="" />
        <br />
        <br />
        <button className="cardBtn">Germany</button>
        <br />
        <br />
        <h3>Addiction  When Gambling Becomes A Problem</h3>
        <br />
        <p>inappropriate behavior ipsum dolor sit amet, consectetur.</p>
    </div>


    <div className="cardBox">
        <img className="cardImg" src="https://preview.colorlib.com/theme/immigration/img/s4.jpg" alt="" />
        <br />
        <br />
        <button className="cardBtn">Australia</button>
        <br />
        <br />
        <h3>Addiction  When Gambling Becomes A Problem</h3>
        <br />
        <p>inappropriate behavior ipsum dolor sit amet, consectetur.</p>
    </div>

</div>










      </section>
    </>
  );
};

export default Section;
