import React, { useState } from 'react'

function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleNav = () => {
      setIsNavOpen(!isNavOpen);
    };
  return (
    <div><div className='header2'>

    <div className="logosec">
        <div className="logo">WELCOME</div>

    </div>

    <div className="searchbar">
        <input type="text" placeholder="Search" />
        <div className="searchbtn">
            <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210180758/Untitled-design-(28).png"
                className="icn srchicn" alt="search-icon" />
        </div>
    </div>

    <div className="message">
        <div className="circle"></div>
        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/8.png" className="icn" alt="" />

        <img src="../assets/avtar.webp"
            className="dpicn" alt="dp" />
    </div>


</div></div>
  )
}

export default Header