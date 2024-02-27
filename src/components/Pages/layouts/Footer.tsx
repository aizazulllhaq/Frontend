import React from 'react';
import "./Footer.css";

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="f-info">
                <div className="f-info-socials">
                    <i className="fa-brands fa-facebook" />
                    <i className="fa-brands fa-square-instagram" />
                    <i className="fa-brands fa-linkedin" />
                    <i className="fa-brands fa-twitter" />
                </div>
                <div className="f-info-brand">© WanderLust Private Limited</div>
                <div className="f-info-links">
                    <a href="">Privacy</a>
                    <a href="">Terms</a>
                </div>
            </div>
        </footer>

    );
}

export default Footer;