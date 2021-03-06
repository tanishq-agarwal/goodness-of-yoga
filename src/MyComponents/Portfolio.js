import React from 'react'
import pic from "../../src/img/yoga.jpg";
import "./Portfolio.css";
import { Offerings } from "./Offerings";
import { Link } from "react-router-dom";

console.log(pic);
export const Portfolio = ({onBlur,onSubmit}) => {
    let myStyle = {
        width: "15rem",
        height: "17rem",
        margin: "2rem 6rem",
        marginLeft: "2rem",
        border: "2px solid rgb(109, 109, 248)",
        borderRadius: "0.5rem"
    }
    return (
        <div className="container">
            <div className="details">
                <img src={pic} className="img-thumbnail" alt="yoga girl" style={myStyle} />
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
                    <Link to="#"><i className="fab fa-instagram"></i></Link>
                    <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                    <Link to="#"><i className="fab fa-youtube"></i></Link>
                    <Link to="#"><i className="fab fa-twitter"></i></Link>
                    <Link to="#"><i className="fab fa-linkedin-in"></i></Link>
                    <Link to="#"><i className="fab fa-spotify"></i></Link>
                </div>
                <hr className="line" />
                <div className="residence">
                    <i className="material-icons">&#xe55d;</i><h5>Lives in <span className="badge bg-light text-dark">New Delhi</span></h5>
                </div>
                <div className="language">
                <i className="fa fa-language" aria-hidden="true"></i><h5>Speaks
                        <span className="badge bg-light text-dark">English</span>
                        <span className="badge bg-light text-dark">Hindi</span>
                        <span className="badge bg-light text-dark">Punjabi</span>
                    </h5>
                </div>
                <div className="row">
                    <div className="d-grid justify-content-md-start video-text">Check out my video about 30 min yoga for beginners</div>
                    <p className="text-sm-start">Contact me:</p>
                    <div className="d-grid justify-content-md-end video"><div className="embed-responsive embed-responsive-21by9">
                        <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowFullScreen title="yoga-lecture"></iframe>
                    </div>
                    </div>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Subscribe to my profile and never miss another update from me.</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter your Email" aria-describedby="emailHelp" onBlur={()=> {onBlur()}} />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={()=> {onSubmit()}}>Subscribe</button>
                    </form>
                </div>
            </div>
            <Offerings />
        </div>
    )
}
