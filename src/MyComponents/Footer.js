import React from 'react';
import "./Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="text-light py-2">
            <div className="text-left">
                Powered by <i>bread</i>
                <div className="social-icons">
                    <Link to="#"><i className="fab fa-instagram"></i></Link>
                    <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                    <Link to="#"><i className="fab fa-twitter"></i></Link>
                    <Link to="#"><i className="fab fa-linkedin-in"></i></Link>
                </div>
            </div>
            <div className="text-right justify-content-end">
                <div className="footer-text">&copy; Bread 2021 All rights reserved</div>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="#">Terms</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Privacy</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">About</Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
