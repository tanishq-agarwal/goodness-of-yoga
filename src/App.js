import './App.css';
import { Header } from "./MyComponents/Header";
import {
  BrowserRouter as Router,

} from "react-router-dom";
import { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';



const photos = [
  {
    name: "Photo 1",
    url: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8eW9nYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    name: "Photo 2",
    url: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8eW9nYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    name: "Photo 3",
    url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8eW9nYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    name: "Photo 4",
    url: "https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHlvZ2F8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    name: "Photo 5",
    url: "https://images.unsplash.com/photo-1602192509154-0b900ee1f851?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHlvZ2F8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  },
  {
    name: "Photo 6",
    url: "https://images.unsplash.com/photo-1588286840104-8957b019727f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8eW9nYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  }
  
]

class App extends Component {
  render() {
    const settings = {
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500,
      arrows: true,
      centerMode: true,
      centerPadding: '60px',
      className: "slides",
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    };
    return (
      <>
        <Router>
          <Header />
            <Slider {...settings}>
            {photos.map((photo) => {
              return (
                <div>
                  <img width="100%" src={photo.url} alt="" />
                  <div className="card-body">
                        <button type="button" className="btn btn-outline-light">Live</button>
                        <p className="card-text">Online className.</p>
                        <p className="card-text">Aug 8, 9:00AM to 11:00 AM IST</p>
                    </div>
                </div>
              )
            })}
          </Slider>
        </Router>
      </>
    );
  }
}


export default App;
