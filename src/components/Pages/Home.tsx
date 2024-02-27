import React from "react";
import "./Home.css";
import About from "./About";
import Contact from "./Contact";

const Home: React.FC = () => {
    return (
        <>
            <div className="hero">
                <div className="hero-content">
                    <h1>Aizaz Ul Haq</h1>
                    <h2>MERN Stack. Backend Developer. Blogger</h2>
                    {/* <div className="social-icons">
                        <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-instagram"></i></a>
                        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-twitter"></i></a>
                        <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-linkedin"></i></a>
                        <a href="https://www.youtube.com/channel/yourchannel" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-youtube"></i></a>
                    </div> */}
                </div>
            </div>
            <div className="s-2">
                <div className="about">
                <div className="container about">
            <div className="img">
                <img src="https://source.unsplash.com/random/" alt="" />
                <div className="cont">
                    <h1>Aizaz Ul haq</h1>
                    <p>I am a MERN stack developer specializing in designing secure backend systems and APIs according to OWASP Top 10 guidelines. With a focus on backend development, I excel at creating robust and efficient backend architectures that prioritize security and performance. Passionate about tackling backend challenges, I thrive on crafting scalable solutions that adhere to industry best practices. As a full stack developer, I leverage my expertise to deliver end-to-end solutions</p>
                    <a href="/">Dome</a>
                </div>
            </div>
        </div>
                </div>
                <div className="contact">
                    <Contact />
                </div>
            </div>
        </>
    )
}

export default Home