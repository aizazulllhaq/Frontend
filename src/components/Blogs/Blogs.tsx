import React from 'react'
import "./Blogs.css";
import { Link } from 'react-router-dom';

type blogType = {
    id: string,
    title: string,
    image: string,
    content: string,
    category: string
}

interface PropsType {
    blogs: blogType[]
}

const Blogs: React.FC<PropsType> = ({ blogs }: PropsType) => {

    return (
        <div className='blogs-comp'>
            {/* New Blog for Admin Only */}
            {/* <Link to={"/blogs/new"} className='bnt'><b><h4>Create New Blog</h4></b></Link> */} 
            <div className="container mt-3">
                {
                    blogs.map((blog) => (
                        <div className="card" style={{ width: "18rem" }} key={blog.id}>
                            <img src={blog.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <Link to={`/blogs/${blog.id}`} className='title'><h5 className="card-title">{blog.title}</h5></Link>
                                <span className="card-text">
                                    {blog.category}
                                </span>
                                <Link to={`/blogs/${blog.id}`} className="read-btn">
                                    <span>Read More <i className="fa-solid fa-arrow-right"></i></span>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>)
}

export default Blogs;