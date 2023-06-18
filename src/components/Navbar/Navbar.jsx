import './Navbar.css'
import React, { useState } from "react";
import { GoPerson } from "react-icons/go";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { FaLightbulb } from "react-icons/fa";
import { SiLinkedin, SiTwitter, SiGithub } from "react-icons/si";
import { MdEmail } from "react-icons/md";


const Navbar = () =>{
  const [selectedButton, setSelectedButton] = useState(1)

  const handleClick = (buttonID) => {
      setSelectedButton(buttonID);
  }

  return(
      <div className='row navbar-container '>
          <div className="col d-flex align-items-center">
            <button 
                type='button' 
                className="navbar-buttons-selected name mx-5" 
                onClick={() => handleClick(1)}
                >Adán
            </button>
            <button 
                type='button' 
                className={`${selectedButton === 1 ? "navbar-buttons-selected mx-2" : "navbar-buttons-unselected mx-2"}`} 
                onClick={() => handleClick(1)}
                ><GoPerson/> About
            </button>
            <button 
                type='button' 
                className={`${selectedButton === 2 ? "navbar-buttons-selected mx-2" : "navbar-buttons-unselected mx-2"}`} 
                onClick={() => handleClick(2)}
                ><FaLightbulb /> Personal work
            </button>
            <button 
                type='button' 
                className={`${selectedButton === 3 ? "navbar-buttons-selected mx-2" : "navbar-buttons-unselected mx-2"}`} 
                onClick={() => handleClick(3)}
                ><BsFillPersonVcardFill />  Resume
            </button>
          </div>
          <div className="col mx-5 d-flex justify-content-end align-items-center">
            <p className='navbar-buttons-selected mx-2 my-0'>Found me on:</p>
            <a
              href="https://www.linkedin.com/in/ad%C3%A1n-yanes-gonz%C3%A1lez-5b2941278/"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-buttons-selected mx-2"
            >
              <SiLinkedin />
            </a>
            <a
              href="https://twitter.com/adan_yanes"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-buttons-selected mx-2"
            >
              <SiTwitter />
            </a>
            <a
              href="https://github.com/Adansif"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-buttons-selected mx-2"
            >
              <SiGithub />
            </a>
            <a href="mailto:adan.yanesgonzalez@gmail.com" className="navbar-buttons-selected mx-2"><MdEmail /></a>
          </div>
      </div>
    );
}

export default Navbar