import React, { useState } from 'react';
import "./NewPost.css";
import { postType } from '../../../data/post';

interface FormDataTypes {
    title: string;
    description: string;
    image: string;
}

interface PropsType {
    setPosts: React.Dispatch<React.SetStateAction<postType[]>>;
}

const NewPost: React.FC<PropsType> = ({ setPosts }: PropsType) => {

    const [formData, setFormData] = useState<FormDataTypes>({
        title: "",
        description: "",
        image: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prevData => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Ensure form is not submitted if any required field is empty
        if (!formData.title || !formData.image || !formData.description) {
            alert("Please fill in all required fields.");
            return;
        }

        // Generate a unique ID (you can use any method you prefer for this)
        const newPostId: number | string = Math.floor(Math.random() * 100).toString();

        // Create a new post object with the generated ID and form data
        const newPost: postType = {
            id: newPostId,
            ...formData,
            image: "https://source.unsplash.com/random/",
        }

        // Update the state with the new post
        setPosts(prevPosts => [...prevPosts, newPost]);

        // Clear the form data
        setFormData({
            title: "",
            description: "",
            image: "",
        });
    }
    return (
        <div className="row">
            <div className="col-8 offset-2">
                <br />
                <br />
                <h3 style={{ textAlign: "center" }}>Create Your Post</h3>
                <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="needs-validation"
                >
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            className="form-control"
                            placeholder="Enter Title"
                            required
                            onChange={handleChange}
                            value={formData.title}
                        />
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="image" className="form-label">
                            Add Image
                        </label>
                        <input
                            type="input"
                            id="image"
                            name="image"
                            className="form-control"
                            required
                            onChange={handleChange}
                            value={formData.image}
                        />
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="description" className="form-label">
                            Description
                        </label>
                        <textarea
                            name="description"
                            id="description"
                            className='form-control'
                            cols={92}
                            rows={14}
                            placeholder='Post description ...'
                            value={formData.description}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <button className="btn btn-success mb-3" type='submit'>Create Post</button>
                </form>
            </div>
        </div>
    );
}

export default NewPost;
