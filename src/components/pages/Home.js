import React, { useState } from 'react';
import pic1 from "../images/pic1.JPG";
import pic2 from "../images/pic2.JPG";
import pic3 from "../images/pic3.JPG";
// import pic4 from "../images/pic4.JPG";
// import pic5 from "../images/pic5.JPG";
// import pic6 from "../images/pic6.JPG";
// import pic7 from "../images/pic7.JPG";
// import pic8 from "../images/pic8.JPG";
// import pic9 from "../images/pic15.JPG";
// import pic10 from "../images/pic10.JPG";
// import pic11 from "../images/pic11.JPG";
// import pic12 from "../images/pic12.JPG";
// import pic13 from "../images/pic13.JPG";
// import pic14 from "../images/pic14.JPG";
// import pic15 from "../images/pic15.JPG";
// import pic16 from "../images/pic16.JPG";
// import pic17 from "../images/pic17.JPG";
// import pic18 from "../images/pic18.JPG";
import slushLogo from "../images/thirdLog.png";
import Carousel from "react-bootstrap/Carousel";
import { motion } from "framer-motion";
import "../styles/header.css"

export default function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  }
  return (
    <div className='mt-5'>
   
      {/* <img className="newLog" src={slushLogo} width="250" alt="logo"/> */}
    
    <div className="d-flex flex-column align-items-center mt-3">
      <motion.img
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{
          delay: 0.3,
          duration: 1.0,
          type: "spring",
          stiffness: 70,
        }}
        className="newLog"
        src={slushLogo}
        width="250"
        alt="logo"
      />
      <div class="social-menu">
        <ul>
          <motion.li
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.3, duration: 1.0, type: "spring" }}
          >
            <a href="https://www.instagram.com/slush_trap/" target="blank">
              <i className="fab fa-instagram"></i>
            </a>
          </motion.li>
          {/* <motion.li
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4, duration: 1.0, type: "spring" }}
          >
            <a href="https://www.snapchat.com/" target="blank">MENU
             
            </a>
          </motion.li> */}
          <motion.li
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5, duration: 1.0, type: "spring" }}
          >
            <a href="https://www.facebook.com/SlushTrap/">
              <i className="fab fa-facebook" target="blank"></i>
            </a>
          </motion.li>

          <motion.li
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.6, duration: 1.0, type: "spring" }}
          >
            <a
              href="https://uncorkedwinefestivals.com/tampa-wine-festival/"
              target="blank"
            >
              <i className="fab fa-gulp" />
            </a>
          </motion.li>
        </ul>
      </div>
      {/* <h1 className="homeHeading mb-4 ">SLUSH TRAP</h1> */}
      {/* <div className='lineDiv lineHead'> HEY </div> */}

      <motion.p
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{
          delay: 0.2,
          duration: 1.0,
          type: "spring",
          stiffness: 70,
        }}
        className="homeText px-3"
      >
        Check in with us below to see where we will be Today!
      </motion.p>
      <motion.i
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{
          delay: 0.1,
          duration: 1.0,
          type: "spring",
          stiffness: 70,
        }}
        className="fa-solid fa-arrow-down homeText arrow"
      ></motion.i>

      <motion.div
        initial={{ x: -1500 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.4, duration: 1.5, type: "spring" }}
        id="fDiv"
      >
        <iframe
          className="mb-3"
          title="fb"
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FSlushTrap%2Fposts%2Fpfbid0xAm6qSpfLSrPzP3LhJUnYG8mfbQvjSoKfgji1xQrES357azEt81UtoLmXpNu9Bxsl&width=auto&show_text=true&height=100&appId"
          width="350"
          height="110"
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </motion.div>

      {/* <h1 className="homeHeading mb-1">GALLERY</h1> */}
      {/* <div className='lineDiv'> HEY </div> */}
      </div>
      <div>
     
      <motion.section
        initial={{ x: -1500 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.4, duration: 1.5, type: "spring" }}className='d-flex justify-content-center '>
    <Carousel className='galCaro' activeIndex={index} onSelect={handleSelect}>
     
      <Carousel.Item>
        <img
          className="d-block w-100 mainC"
          src={pic1}
          alt="Second slide"
        />

     
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 mainC"
          src={pic2}
          alt="Second slide"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 mainC"
          src={pic3}
          alt="Third slide"
        />

        
      </Carousel.Item>
    </Carousel>
    </motion.section>
    </div>
      <div className="foot d-flex w-100 social-menu justify-content-center">
        <ul>
          <li className="d-flex plug">
            
            <a className="plug" href="https://www.linkedin.com/in/keanu-rivera-b37438237/" target="blank">
              <i class="plug gitIcon fab fa-linkedin"></i>
              
            </a>
            Need a website?
          </li>
        </ul>
      </div>
      </div>
    
  );
      }
    
