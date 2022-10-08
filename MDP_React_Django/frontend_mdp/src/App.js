import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';
import Navbar from './component/Navbar/Navbar';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Diabetes from './pages/diabetes';
import Lungs from './pages/lungs';
import Kidney from './pages/kidney';
import Parkinsons from './pages/parkinsons';

class App extends React.Component{
  // state = {
  //   details : [],
  // }

  // componentDidMount(){
  //   let data;

  //   axios.get('http://localhost:8000/wel/').
  //   then(res => {
  //     data = res.data
  //     console.log("Data ",data)
  //     this.setState({
  //       details : data
  //     })

  //   })
  //   .catch(err=>{
  //     console.log(err)
  //   })
  // }
  
  render(){
    // console.log("Details",this.state.details)
    // this.state.details.map((detail)=>{
    //   console.log(detail.name)
    // })
    return (
      <>
      {/* <Navbar /> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="diabetes" element={<Diabetes />}></Route>
          <Route path="kidney" element={<Kidney />}></Route>
          <Route path="lungs" element={<Lungs />}></Route>
          <Route path="parkinsons" element={<Parkinsons />}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
      {/* <div className="App">
        <div>
          <h1>Welcome to Multiple diseases prediction app</h1>
          {this.state.details.map((detail)=>
            <div>
              <h1>{detail.name}</h1>
            </div>
          )}
          <footer>--- by
                            <cite title="Source Title"> 
                                Created by vedant 
                            </cite>
                          </footer>
        </div>
      </div> */}
      </>
    );
  }
}

export default App;
