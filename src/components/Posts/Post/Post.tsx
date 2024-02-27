import React from 'react'
import { useParams } from 'react-router-dom'
import "./Post.css";

type postType = {
    id: string,
    title: string,
    image: string,
    description: string,
}

interface PropsType {
    posts:postType[]
}

const Post: React.FC<PropsType> = ({ posts }: PropsType) => {

    const params = useParams();
    const { postID } = params;

    const post: postType | undefined = posts.find((b) => b.id === postID)
    console.log(post)

    return (
        <div className='post'>
           <div className="user">
            <h4>Aizaz Ul Haq</h4>
           </div>
            <div>
                <div className="img">
                    <img src={post?.image} alt="" />
                </div>
                <div className="para">
                    <p>{post?.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Post;