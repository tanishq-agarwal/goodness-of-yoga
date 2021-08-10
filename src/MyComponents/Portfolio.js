import React from 'react'
import pic from "../../src/img/yoga.jpg";
import "./Portfolio.css";
import { Offerings } from "./Offerings";
import { Link } from "react-router-dom";

console.log(pic);
export const Portfolio = ({onBlur,onSubmit}) => {
    let myStyle = {
        width: "150px",
        height: "150px",
        margin: "2em 6em",
        marginLeft: "23px",
        border: "2px solid rgb(109, 109, 248)",
        borderRadius: "5px"
    }
    return (
        <div className="container">
            <div className="details">
                <img src={pic} class="img-thumbnail" alt="yoga girl" style={myStyle} />
                <div className="align-left">
                    <button type="button" className="btn btn-outline-primary left">Yoga</button>
                    <button type="button" className="btn btn-outline-primary left">Wellness</button>
                    <button type="button" className="btn btn-outline-primary left">Fitness</button>
                </div>
                <div className="d-grid gap-4 justify-content-md-end">
                    <button type="button" className="btn btn-primary right">Book Trial</button>
                    <button className="btn btn-outline-primary right-bottom" type="button">Contact me</button>
                </div>
                <div className="text-left">
                    <h2>Jane Doe</h2>
                    <p>Hi, I am Jane Doe, your next door fitness instructor with just one goal.Make people fit and healthy.Yoga gurus from India introduced yoga to the West following the success of Vivekananda's adaptation of yoga without asanas in the late 19th and early 20th centuries
                    </p>
                </div>
                <div className="icons">
                    <Link to="#"><i class="fab fa-instagram"></i></Link>
                    <Link to="#"><i class="fab fa-facebook-f"></i></Link>
                    <Link to="#"><i class="fab fa-youtube"></i></Link>
                    <Link to="#"><i class="fab fa-twitter"></i></Link>
                    <Link to="#"><i class="fab fa-linkedin-in"></i></Link>
                    <Link to="#"><i class="fab fa-spotify"></i></Link>
                </div>
                <hr className="line" />
                <div className="residence">
                    <i class="material-icons">&#xe55d;</i><h5>Lives in <span class="badge bg-light text-dark">New Delhi</span></h5>
                </div>
                <div className="language">
                <i class="fa fa-language" aria-hidden="true"></i><h5>Speaks
                        <span class="badge bg-light text-dark">English</span>
                        <span class="badge bg-light text-dark">Hindi</span>
                        <span class="badge bg-light text-dark">Punjabi</span>
                    </h5>
                </div>
                <div className="row">
                    <div className="d-grid justify-content-md-start video-text">Check out my video about 30 min yoga for beginners</div>
                    <p class="text-sm-start">Contact me:</p>
                    <div class="d-grid justify-content-md-end video"><div class="embed-responsive embed-responsive-21by9">
                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowFullScreen title="yoga-lecture"></iframe>
                    </div>
                    </div>
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Subscribe to my profile and never miss another update from me.</label>
                            <input type="email" class="form-control" id="email" placeholder="Enter your Email" aria-describedby="emailHelp" onBlur={()=> {onBlur()}} />
                        </div>
                        <button type="submit" class="btn btn-primary" onClick={()=> {onSubmit()}}>Subscribe</button>
                    </form>
                </div>
            </div>
            <Offerings />
        </div>
    )
}
