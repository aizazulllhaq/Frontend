import React from 'react'
import { useParams } from 'react-router-dom'
import "./Blog.css";

type blogType = {
    id: string,
    title: string,
    image: string,
    content: string,
    category: string
}

interface PropsType {
    blogs:blogType[]
}

const Blog: React.FC<PropsType> = ({ blogs }: PropsType) => {

    const params = useParams();
    const { blogID } = params;

    const blog: blogType | undefined = blogs.find((b) => b.id === blogID)
    console.log(blog)

    return (
        <div className='blog'>
            <div className='text mt-3'>
                <b><h3>{blog?.title}</h3></b>
            </div>
            <div>
                <div className="img">
                    <img src={blog?.image} alt="" />
                </div>
                <div className="para">
                    <p>{blog?.content}</p>
                </div>
            </div>
        </div>
    )
}

export default Blog