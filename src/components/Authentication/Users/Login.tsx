import React, { useState } from 'react'

interface formDataTypes {
    username: string,
    password: string
}

const Login: React.FC = () => {

    const [formData, setFormData] = useState<formDataTypes>({
        username: "",
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
            password: ""
        })
    }
    return (
        <div className="row">
            <div className="col-4 offset-4">
                <br />
                <br />
                <h1>Login Now</h1>
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
                            required
                            value={formData.password}
                        />
                    </div>
                    <button className="btn btn-success mb-3" type='submit'>Login</button>
                </form>
            </div>
        </div>

    )
}

export default Login;