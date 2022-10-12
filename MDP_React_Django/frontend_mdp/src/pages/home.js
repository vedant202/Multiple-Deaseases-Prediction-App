import React, { Component } from 'react'
import mainPitcture from "./images/mainPitcture.png"
import diabetes from "./images/diabetes.jpg"
import kidney from "./images/kidney.jpg"
import lungs from "./images/lungs.jpg"
import parkinsons from "./images/parkinsons.jpg"

import "./css/home.css"


export default class Home extends Component {
  render() {
    return (
      <>
        <div className='container'>
          <header className='header'>
            <div className="container1">
              <h1>This is basic Machine learning based Multiple disease prediction model.</h1>
              <p>Our Machine learning model predicts the diseases such as diabetes,kidney diseases,heart diseases,parkinsons diseases.
              By entering the sysmpton it can predict the disease you could be suffering from.
              Then You colud lokk for hospitals ansd clinics for Treatment  
              </p>
            </div>
            <div className='container2'>
              <img src={mainPitcture}></img>
            </div>
          </header>
          <div className='container3'>
            Model Accuracies
            <div className='container3-img'>
              <div className='Diabetes'>
                <img src={diabetes}></img>
              </div>
              <div className='lungs'>
                <img src={lungs}></img>
              </div>
              <div className='kidney'>
                <img src={kidney}></img>
              </div>
              <div className='parkinsons'>
                <img src={parkinsons}></img>
              </div>
            </div>
          </div>

        </div>
      </>
    )
  }
}
