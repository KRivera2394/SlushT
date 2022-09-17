import React from "react";
import pic1 from "../images/pic1.JPG";
import pic2 from "../images/pic2.JPG";
import pic3 from "../images/pic3.JPG";
import pic4 from "../images/pic4.JPG";
import pic5 from "../images/pic5.JPG";
import pic6 from "../images/pic6.JPG";
import pic7 from "../images/pic7.JPG";
import pic8 from "../images/pic8.JPG";
import pic9 from "../images/pic15.JPG";
import pic10 from "../images/pic10.JPG";
import pic11 from "../images/pic11.JPG";
import pic12 from "../images/pic12.JPG";
import pic13 from "../images/pic13.JPG";
import pic14 from "../images/pic14.JPG";
import pic15 from "../images/pic15.JPG";
import pic16 from "../images/pic16.JPG";
import pic17 from "../images/pic17.JPG";
import pic18 from "../images/pic18.JPG";
import "../styles/header.css"
// import slushLogo from "../images/thirdLog.png";

export default function Gallery() {
  return (
    
    <div>
      <h1 className="menuList homeHeading mb-5">Gallery</h1>
      <div className="d-flex justify-content-center galo">
        <img className="homePic" src={pic1} alt="pic" />
        <img className="homePic " src={pic2} alt="pic" />
        <img className="homePic " src={pic3} alt="pic" />
        <img className="homePic" src={pic6} alt="pic" />
        <img className="homePic" src={pic7} alt="pic" />
        <img className="homePic" src={pic9} alt="pic" />
        <img className="homePic" src={pic8} alt="pic" />
        <img className="homePic" src={pic10} alt="pic" />
        <img className="homePic" src={pic11} alt="pic" />
        <img className="homePic" src={pic12} alt="pic" />
        <img className="homePic" src={pic13} alt="pic" />
        <img className="homePic" src={pic14} alt="pic" />
        <img className="homePic" src={pic15} alt="pic" />
        <img className="homePic" src={pic16} alt="pic" />
        <img className="homePic" src={pic17} alt="pic" />
        <img className="homePic" src={pic18} alt="pic" />
        <img className="homePic" src={pic4} alt="pic" />
        <img className="homePic" src={pic5} alt="pic" />
        </div>
     
    </div>
  );
}
