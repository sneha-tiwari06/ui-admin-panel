import React from 'react'
import Sidebar from './sidebar'

function Setting() {
  return (
    <div className='w-100 main-section'>
        <div className='container-fluid p-0 m-0'>
            <div className='row m-0 p-0'>
                <div className='col-md-3 p-0 m-0'>
                    <Sidebar />

                </div>
                <div className='col-md-9 p-0 m-0'>
                <div className="report-container">
                <div className="report-header">
                    <h1 className="recent-Articles">Recent Blogs</h1>
                    <button className="view">View All</button>
                </div>

                <div className="report-body">
                    <div className="report-topic-heading">
                        <h3 className="t-op">Title</h3>
                        <h3 className="t-op">Description</h3>
                        <h3 className="t-op">Status</h3>
                    </div>

                    <div className="items">
                        <div className="item1">
                            <h3 className="t-op-nextlvl">BLOG 1</h3>
                        
                            <h3 className="t-op-nextlvl">Lorem ipsum dolor sit amet.</h3>
                            <h3 className="t-op-nextlvl label-tag">Active</h3>
                    </div>
                        <div className="item1">
                            <h3 className="t-op-nextlvl">BLOG 1</h3>
                        
                            <h3 className="t-op-nextlvl">Lorem ipsum dolor sit amet.</h3>
                            <h3 className="t-op-nextlvl label-tag">Active</h3>
                    </div>
                        <div className="item1">
                            <h3 className="t-op-nextlvl">BLOG 1</h3>
                        
                            <h3 className="t-op-nextlvl">Lorem ipsum dolor sit amet.</h3>
                            <h3 className="t-op-nextlvl label-tag">Active</h3>
                    </div>
                        <div className="item1">
                            <h3 className="t-op-nextlvl">BLOG 1</h3>
                        
                            <h3 className="t-op-nextlvl">Lorem ipsum dolor sit amet.</h3>
                            <h3 className="t-op-nextlvl label-tag">Active</h3>
                    </div>
                        <div className="item1">
                            <h3 className="t-op-nextlvl">BLOG 1</h3>
                        
                            <h3 className="t-op-nextlvl">Lorem ipsum dolor sit amet.</h3>
                            <h3 className="t-op-nextlvl label-tag">Active</h3>
                        </div>
                        <div className="item1">
                            <h3 className="t-op-nextlvl">BLOG 1</h3>
                            
                            <h3 className="t-op-nextlvl">Lorem ipsum dolor sit amet.</h3>
                            <h3 className="t-op-nextlvl label-tag">Active</h3>
                    </div>


                </div>
            </div>
        </div>

                </div>

            </div>
        </div>

    </div>
  )
}

export default Setting