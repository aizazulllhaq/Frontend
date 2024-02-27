import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

type toggleCat = {
    category: Boolean,
    setCategory: React.Dispatch<React.SetStateAction<Boolean>>;
}

const Navbar: React.FC<toggleCat> = () => {

    return (
        <nav className="navbar navbar-expand-sm bg-body-light sticky-top" style={{ marginLeft: "-10px", marginRight: "-10px", backgroundColor: "rgba(247, 250, 255, 0.959)" }}>
            <div className="container-fluid">
                <Link className="navbar-brand m-auto c-btn" to="/">
                    Logo
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0" style={{fontFamily:'Futura PT, sans-serif',fontWeight:"700px",fontStyle:"normal",letterSpacing:".2rem",fontSize:"13px"}}>

                        <Link to={"/"} className="c-btn">HOME</Link>
                        <Link to={"/blogs"} className="c-btn">BLOGS</Link>
                        {/* <Link to={"/posts"} className="c-btn">POSTS</Link> */}
                        <Link to={"/services"} className="c-btn">SERVICES</Link>
                        <Link to={"/about"} className="c-btn">ABOUT</Link>
                        <Link to={"/contact"} className="c-btn">CONTACT</Link>

                        {/* Login & SignUp for Admin Only  */}

                        {/* <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/login">
                                <b>Login</b>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/signup">
                                <b>SignUp</b>
                            </Link>
                        </li> */}
                    </ul>

                </div>
            </div>
        </nav>

    )
}

export default Navbar;


