import React from 'react';
import './Offerings.css';
import yoga6 from "../img/yoga6.jpg";
import yoga7 from "../img/yoga7.jpg";
import yoga5 from "../img/yoga5.png";
import {Footer} from "./Footer";

export const Offerings = ({leftSlide,rightSlide}) => {
    return (
        <div className="container-fluid offerings">
            <div className="text-center texting">
                browse all my offerings
            </div>
            <div class="card-group">
                <div class="card">
                    <img src={yoga6} class="card-img-top" alt="girl doing yoga" />
                    <div class="card-body">
                        <button type="button" class="btn btn-outline-light">Live</button>
                        <p class="card-text">Online class.</p>
                        <p class="card-text">Aug 8, 9:00AM to 11:00 AM IST</p>
                    </div>
                </div>
                <div class="card">
                    <img src={yoga5} class="card-img-top" alt="girl doing yoga" />
                    <div class="card-body">
                        <button type="button" class="btn btn-outline-light">Live</button>
                        <p class="card-text">Online class.</p>
                        <p class="card-text">Aug 8, 9:00AM to 11:00 AM IST</p>
                    </div>
                </div>
                <div class="card">
                    <img src={yoga7} class="card-img-top" alt="girl doing yoga" />
                    <div class="card-body">
                        <button type="button" class="btn btn-outline-light">Live</button>
                        <p class="card-text">Online class.</p>
                        <p class="card-text">Aug 8, 9:00AM to 11:00 AM IST</p>
                    </div>
                </div>
            </div>
            <div className="slider">
                <button type="button" class="btn btn-outline-light" onClick={()=> {leftSlide()}}><i class='fas fa-arrow-left'></i></button>
                <button type="button" class="btn btn-outline-light" onClick={()=> {rightSlide()}}><i class='fas fa-arrow-right'></i></button>
            </div>
            <Footer/>
        </div>
    )
}
