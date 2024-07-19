import React, { useState } from 'react'

function Sidebar() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };
    return (
        <div className='row'>
            <div className='col-md-3'>
 <div className={`navcontainer ${isNavOpen ? 'navclose' : ''}`}>

            <nav className="nav">
                <div className='toggle'>
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210182541/Untitled-design-(30).png"
            className="icn menuicn" id="menuicn" alt="menu-icon" onClick={toggleNav} />
                </div>
                <div className="nav-upper-options">
                    <div className="nav-option option1">

                        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210182148/Untitled-design-(29).png"
                            className="nav-img" alt="dashboard" />
                        <h6> Dashboard</h6>
                    </div>

                    <div className="option2 nav-option">
                        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/9.png"
                            className="nav-img" alt="articles" />
                        <h6> Blogs</h6>
                    </div>

                    <div className="nav-option option3">
                        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183320/5.png"
                            className="nav-img" alt="report" />
                        <h6> Ceremony</h6>
                    </div>

                    <div className="nav-option option4">
                        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/6.png"
                            className="nav-img" alt="institution" />
                        <h6> Events</h6>
                    </div>

                    <div className="nav-option option5">
                        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183323/10.png"
                            className="nav-img" alt="blog" />
                        <h6> Upcoming Events</h6>
                    </div>

                    <div className="nav-option option6">
                        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183320/4.png"
                            className="nav-img" alt="settings" />
                        <h6> Settings</h6>
                    </div>

                    <div className="nav-option logout">
                        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/7.png"
                            className="nav-img" alt="logout" />
                        <h6>Logout</h6>
                    </div>

                </div>
            </nav>
        </div>
            </div>
        </div>

       

    )
}

export default Sidebar