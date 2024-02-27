import React, { useState } from 'react'

interface formDataTypes {
    username: string,
    email: string,
    password: string
}

const Signup: React.FC = () => {


    const [formData, setFormData] = useState<formDataTypes>({
        username: "",
        email: "",
        password: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((preData) => ({
            ...preData,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.stopPropagation();
        console.log(formData);
        setFormData({
            username: "",
            email: "",
            password: ""
        })
    }

    return (
        <div className="row">
            <div className="col-4 offset-4">
                <br />
                <br />
                <h1>SignUp Now</h1>
                <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="needs-validation"
                >
                    <div className="mb-3 mt-3">
                        <label htmlFor="username" className="form-label">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="form-control"
                            placeholder="Enter username"
                            required
                            onChange={handleChange}
                            value={formData.username}
                        />
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            placeholder="Enter email"
                            onChange={handleChange}
                            value={formData.email}
                            required
                        />
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-control"
                            placeholder="Enter password"
                            onChange={handleChange}
                            value={formData.password}
                            required
                        />
                    </div>
                    <button className="btn btn-success mb-3" type='submit'>SignUp</button>
                </form>
            </div>
        </div>
    )
}

export default Signup;