import React, { useState } from 'react'
import '../App.css';
import { Link } from 'react-router-dom';
function Main() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleNav = () => {
      setIsNavOpen(!isNavOpen);
    };
  return (
    <div>
        <header>
    
            <div class="logosec">
                <div class="logo">WELCOME</div>
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210182541/Untitled-design-(30).png"
                    class="icn menuicn" id="menuicn" alt="menu-icon" />
            </div>
    
            <div class="searchbar">
                <input type="text" placeholder="Search" />
                <div class="searchbtn">
                    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210180758/Untitled-design-(28).png"
                        class="icn srchicn" alt="search-icon" />
                </div>
            </div>
    
            <div class="message">
                <div class="circle"></div>
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/8.png" class="icn" alt="" />
                <div class="dp">
                    <img src="../assets/avtar.webp"
                        class="dpicn" alt="dp" />
                </div>
            </div>
    
        </header>
    
        <div class="main-container">
            <div class="navcontainer">
                <nav class="nav">
                    <div class="nav-upper-options">
                        <div class="nav-option option1">
                            <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210182148/Untitled-design-(29).png"
                                class="nav-img" alt="dashboard" />
                            <h6><Link to='/'>Dashboard</Link></h6>
                        </div>
    
                        <div class="option2 nav-option">
                            <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/9.png"
                                class="nav-img" alt="articles" />
                            <h6><Link to='/blog'>Blogs</Link></h6>
                        </div>

                        <div class="nav-option option3">
                            <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183320/5.png"
                                class="nav-img" alt="report"  />
                            <h6> Ceremony</h6>
                        </div>
    
                        <div class="nav-option option4">
                            <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/6.png"
                                class="nav-img" alt="institution" />
                            <h6> Events</h6>
                        </div>
    
                        <div class="nav-option option5">
                            <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183323/10.png"
                                class="nav-img" alt="blog" />
                            <h6> Upcoming Events</h6>
                        </div>
    
                        <div class="nav-option option6">
                            <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183320/4.png"
                                class="nav-img" alt="settings"  />
                            <h6> Settings</h6>
                        </div>
    
                        <div class="nav-option logout">
                            <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/7.png"
                                class="nav-img" alt="logout" />
                            <h6>Logout</h6>
                        </div>
    
                    </div>
                </nav>
            </div>
            <div class="main">
    
                <div class="searchbar2">
                    <input type="text" name="" id="" placeholder="Search" />
                    <div class="searchbtn">
                        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210184645/Untitled-design-(32).png"
                            class="icn srchicn" alt="search-button" />
                    </div>
                </div>
    
                <div class="box-container">
    
                    <div class="box box1">
                        <div class="text">
                            <h2 class="topic-heading">50+</h2>
                            <h2 class="topic">Blogs</h2>
                        </div>
    
                        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210184645/Untitled-design-(32).png"
                            alt="Views" />
                    </div>
    
                    <div class="box box2">
                        <div class="text">
                            <h2 class="topic-heading">50+</h2>
                            <h2 class="topic">Ceremony</h2>
                        </div>
    
                        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210184645/Untitled-design-(32).png" alt="likes" />
                    </div>
    
                    <div class="box box3">
                        <div class="text">
                            <h2 class="topic-heading">10</h2>
                            <h2 class="topic">Events</h2>
                        </div>
    
                        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210184645/Untitled-design-(32).png"
                            alt="comments" />
                    </div>
    
                    <div class="box box4">
                        <div class="text">
                            <h2 class="topic-heading">10</h2>
                            <h2 class="topic">Drafts</h2>
                        </div>
    
                        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210185029/13.png" alt="published"   />
                    </div>
                </div>
    
                <div class="report-container">
                    <div class="report-header">
                        <h1 class="recent-Articles">Recent Blogs</h1>
                        <button class="view">View All</button>
                    </div>
    
                    <div class="report-body">
                        <div class="report-topic-heading">
                            <h6 class="t-op">Title</h6>
                            <h6 class="t-op">Description</h6>
                            <h6 class="t-op">Status</h6>
                        </div>
    
                        <div class="items">
                            <div class="item1">
                                <h6 class="t-op-nextlvl">BLOG 1</h6>
    
                                <h6 class="t-op-nextlvl">Lorem ipsum dolor sit amet.</h6>
                                <h6 class="t-op-nextlvl label-tag">Active</h6>
                            </div>
                            <div class="item1">
                                <h6 class="t-op-nextlvl">BLOG 1</h6>
                                
                                <h6 class="t-op-nextlvl">Lorem ipsum dolor sit amet.</h6>
                                <h6 class="t-op-nextlvl label-tag">Active</h6>
                            </div>
                            <div class="item1">
                                <h6 class="t-op-nextlvl">BLOG 1</h6>
                                
                                <h6 class="t-op-nextlvl">Lorem ipsum dolor sit amet.</h6>
                                <h6 class="t-op-nextlvl label-tag">Active</h6>
                            </div>
                            <div class="item1">
                                <h6 class="t-op-nextlvl">BLOG 1</h6>
                                
                                <h6 class="t-op-nextlvl">Lorem ipsum dolor sit amet.</h6>
                                <h6 class="t-op-nextlvl label-tag">Active</h6>
                            </div>
                            <div class="item1">
                                <h6 class="t-op-nextlvl">BLOG 1</h6>
                                
                                <h6 class="t-op-nextlvl">Lorem ipsum dolor sit amet.</h6>
                                <h6 class="t-op-nextlvl label-tag">Active</h6>
                            </div>
                            <div class="item1">
                                <h6 class="t-op-nextlvl">BLOG 1</h6>
                                
                                <h6 class="t-op-nextlvl">Lorem ipsum dolor sit amet.</h6>
                                <h6 class="t-op-nextlvl label-tag">Active</h6>
                            </div>
    
    
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
  )
}

export default Main