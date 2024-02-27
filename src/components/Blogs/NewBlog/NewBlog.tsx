import React, { useState } from 'react'
import "./NewBlog.css";

interface formDataTypes {
    title: string,
    content: string,
    image: string,
    category: string
}


type blogType = {
    id: string,
    title: string,
    image: string,
    content: string,
    category: string
}

interface PropsType {
    setBlogs: React.Dispatch<React.SetStateAction<blogType[]>>; // Define the type for setBlogs
}


const NewBlog: React.FC<PropsType> = ({ setBlogs }: PropsType) => {

    const [formData, setFormData] = useState<formDataTypes>({
        title: "",
        content: "",
        image: "",
        category: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData((preData) => (
            {
                ...preData,
                [e.target.name]: e.target.value
            }
        ))
    }

    // const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    //     console.log('handleSelect', e.target);
    // }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setBlogs((preData) =>
            [
                ...preData,
                { id: "7    ", ...formData , image:"https://source.unsplash.com/random/"}
            ])
        setFormData({
            title: "",
            content: "",
            image: "",
            category: "",
        })
    }
    return (
        <div className="row">
            <div className="col-8 offset-2">
                <br />
                <br />
                <h3 style={{ textAlign: "center" }}>Create Your Blog</h3>
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
                        <label htmlFor="title" className="form-label">
                            Add Image
                        </label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            className="form-control"
                            required
                            onChange={handleChange}
                            value={formData.image}
                        />
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="content" className="form-label">
                            Content
                        </label>
                        <textarea name="content" id="content" className='form-control' cols={92} rows={14} placeholder='Blog Content ...' value={formData.content} onChange={handleChange}></textarea>
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="category" className="form-label">
                            Category
                        </label>
                        <select name="category" id="category" value={formData.category} onChange={handleChange}>
                            <option value="development">Development</option>
                            <option value="deployment">Deployment</option>
                            <option value="frontend">Frontend</option>
                            <option value="backend">Backend</option>
                        </select>
                    </div>
                    <button className="btn btn-success mb-3">Create Blog</button>
                </form>
            </div>
        </div>
    )
}


export default NewBlog;