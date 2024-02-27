import React from 'react'
import "./Posts.css";
import { Link } from 'react-router-dom';
import { postType } from '../../data/post';


interface PropsType {
    posts: postType[]
}

const Posts: React.FC<PropsType> = ({ posts }: PropsType) => {

    return (
        <div className='post-comp'>
            {/* New Post for Admin Only */}
            {/* <Link to={"/posts/new"} className='bnt'><b><h4>Create New Post</h4></b></Link> */}
            <div className="container-posts mt-3">
                {
                    posts.map((post) => (
                        <div className="card-post" key={post.id}>
                            <Link to={`/posts/${post.id}`} className='t-d'>
                                <div className="card-body">
                                    <span className="card-text">
                                        {post.description}
                                    </span>
                                    <img src={post.image} className="card-img-top" alt="Loading Post Image..." />
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Posts;