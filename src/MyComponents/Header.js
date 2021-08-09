import React from 'react';
import './Header.css';
import { Portfolio } from "./Portfolio";
import { Link } from "react-router-dom";

export const Header = ({onBlur,onSubmit}) => {

    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">bre.ad/jane</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="d-flex mx-3">
                        <ul className="navbar-nav d-lg-flex mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="#">Offerings</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="#" >
                                    Other Links
                                </Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="#" >
                                    Testimonials
                                </Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="#" >
                                    Portfolio
                                </Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="#" >
                                    Contact me
                                </Link>
                            </li>
                        </ul>
                        <button className="btn btn-outline-fffff" type="submit">Book Trial</button>
                    </div>
                </div>
            </nav>
            <div className="text text-center">
                Start your day with the goodess of Yoga
            </div>
            <Portfolio onBlur={onBlur} onSubmit={onSubmit}/>
        </div>
    )
}
