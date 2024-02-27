import React from 'react'
import "./About.css";

const About: React.FC = () => {
    return (
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
    )
}

export default About;