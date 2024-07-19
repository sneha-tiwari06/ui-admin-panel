import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../component/header";
import Sidebar from "../component/sidebar";
import axios from "axios";

const Ceremony = () => {
  const [posts, setPosts] = useState([]);
  const [postToDelete, setPostToDelete] = useState(null);
  const cat = useLocation().search;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/ceremony`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent.slice(0, 30) +  "...";
  };


  const handleDeleteConfirmation = (post) => {
    setPostToDelete(post);
  };

  
  const handleDelete = async () => {
    try {
      await axios.delete(`/ceremony/${postToDelete.id}`);
      
      setPosts(posts.filter(post => post.id !== postToDelete.id));
      await handleFileDelete(postToDelete.image_url);
      setPostToDelete(null);
    } catch (err) {
      console.log(err);
    }
  };
  const handleFileDelete = async (fileUrl) => {
    try {
      await axios.delete('/delete',{
        data: { url: fileUrl } 
      });
    } catch (error) {
      console.error('Error deleting file', error);
    }
  };
  const handleToggleStatus = async (post) => {
    try {
      const updatedPost = { ...post, active: !post.active }; 

      await axios.put(`/ceremony/${post.id}`, { active: updatedPost.active });
      setPosts(posts.map(p => (p.id === post.id ? updatedPost : p)));
    } catch (err) {
      console.error('Error toggling status', err);
    }
  };

    return (
        <div className='w-100 blog'>
            <Header />
            <div className='row'>
                <div className='col-md-3'>
                    <Sidebar />
                </div>
                <div className='col-md-9'>
                    <div className="box-container blog-box mt-4">
                         <div className="box box1">
                            <div className="text">
                                <h2 className="topic-heading">50+</h2>
                                <h2 className="topic">Total Blogs</h2>
                            </div>

                            <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210184645/Untitled-design-(32).png"
                                alt="Views" />
                        </div>
                        <div className="box box4">
                            <div className="text">
                                <h2 className="topic-heading">10</h2>
                                <h2 className="topic">Drafts</h2>
                            </div>

                            <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210185029/13.png" alt="published" />
                        </div>
                    </div>

                            <div className='blog-section'>
                                <div className='container'>
                                <h2 className='h1'>Blogs</h2>
                                <div className='status action-center mb-4'>
                                    <Link className="link" to="/add-blogs">
                                        <button className="view">Add Blog</button>
                                    </Link>
                                    <Link className="link" to="/drafts">
                                        <button className="view">Drafts</button>
                                    </Link>
                                </div>

                                <table className="table table-bordered custom-table">
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Title</th>
                                            <th scope="col">Image</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {posts.map((post, index) => (
                                            <tr key={index}>
                                                <td> {index + 1}</td>
                                                <td>{getText(post.title)}</td>
                                                <td> <img className="img2" src={post.img} alt="" /></td>
                                                <td>{getText(post.desc)}</td>
                                                <td><div className='row'>
                                                    <div className='col-md-4 col-sm-6 col-xs-12'>
                                                        <Link to={`/add-blogs?edit=2`} > <button className="view" state={post}>
                                                            Edit
                                                        </button></Link>
                                                    </div>
                                                    <div className='col-md-4 col-sm-6 col-xs-12'>
                                                        <button className="view" style={{ fontSize: "1rem" }} onClick={() => handleDeleteConfirmation(post)}>Delete</button>
                                                        {postToDelete && postToDelete.id === post.id && (
                                                            <div className="confirmation-popup">
                                                                <p>Are you sure you want to delete this post?</p>
                                                                <div>
                                                                    <button onClick={handleDelete}>Yes</button>
                                                                    <button onClick={() => setPostToDelete(null)}>No</button>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className='col-md-4 col-sm-6 col-xs-12'>
                                                        <button className="view" style={{ fontSize: "1rem" }} onClick={() => handleToggleStatus(post)}>
                                                            {post.active ? 'Inactive' : 'Active'}
                                                        </button>
                                                    </div>
                                                </div></td>

                                            </tr>

                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            </div>



                </div>
            </div>


        </div>
    )
}

export default Ceremony