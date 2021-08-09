import './App.css';
import {Header} from "./MyComponents/Header";


import {
  BrowserRouter as Router,
  
} from "react-router-dom";



function App() {
  return (
    <>
      <Router>
        <Header />
        </Router>
    </>
  );
}


export default App;
