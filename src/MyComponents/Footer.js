import React from 'react';
import "./Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="text-light py-2">
            <div className="text-left">
                Powered by <i>bread</i>
                <div className="social-icons">
                    <Link to="#"><i class="fab fa-instagram"></i></Link>
                    <Link to="#"><i class="fab fa-facebook-f"></i></Link>
                    <Link to="#"><i class="fab fa-twitter"></i></Link>
                    <Link to="#"><i class="fab fa-linkedin-in"></i></Link>
                </div>
            </div>
            <div className="text-right justify-content-end">
                <div class="footer-text">&copy; Bread 2021 All rights reserved</div>
                <ul class="nav justify-content-end">
                    <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" to="#">Terms</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="#">Privacy</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="#">About</Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
