import React, { Component } from 'react'
import "./css/diabetes.css"
import axios from 'axios'

let _csrfToken = null;
const API_HOST = 'http://localhost:8000';

async function getCsrfToken() {
    if (_csrfToken === null) {
      const response = await fetch(`${API_HOST}/csrf/`, {
        credentials: 'include',
      });
      const data = await response.json();
      _csrfToken = data.csrfToken;
    }
    return _csrfToken;
  }

export default class Diabetes extends Component {
    
 diabetes_input = {
        prgnancies : 0,
        glucose:0,
        bp:0,
        skinThickness:0,
        insulin:0,
        bmi:0,
        DiabetesPedigreeFunction:0,
        age:0
    }
    constructor(props){
        super(props)
        this.state = {
            diabetes_input : this.diabetes_input
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (event)=>{
        console.log("Handle change is triggered")
        console.log(event.target.name)
        
        // if(event.target.name=='prgnancies' ){
        //     this.diabetes_input.prgnancies = event.target.value
        //     // console.log("prgnancies "+event.target.value)
        //     console.log("prgnancies "+this.diabetes_input.prgnancies)
        //     this.setState(this.diabetes_input)
        // }
        this.diabetes_input[event.target.name] = event.target.value
        this.setState(this.diabetes_input)
    }

    handleSubmit = async(event)=>{
        event.preventDefault();
        console.log("Handle submit is triggered ")
        console.log(this.state.diabetes_input)
        
        const response = await fetch(`http://localhost:8000/diabetes_post/`,{
      method: 'POST',  
      headers: (
        {'X-CSRFToken': await getCsrfToken()}
      ),
      body:JSON.stringify(this.state.diabetes_input),
      credentials: 'include',
    });
    const data = await response.json();
    console.log(data)

    }

  render() {
    return (
      <>
        <div className='container'>
            <div className='heading'>
                <h1>Diabetes Prediction using Machine Learning</h1>
            </div>
            <main>
            
                <form>
                <div className='row'>
                        <div className='col1'>
                            <label>prgnancies :</label>
                        </div>
                        <div className='col2'>
                            <input type="number" name='prgnancies' value={this.state.diabetes_input.prgnancies} onChange={this.handleChange} />
                        </div>
                </div>
                    <div className='row'>
                        <div className='col1'>
                            <label>glucose :</label>
                        </div>
                        <div className='col2'>
                            <input type="number" name='glucose' value={this.state.diabetes_input.glucose} onChange={this.handleChange} />
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col1'>
                            <label>BP :</label>
                        </div>
                        <div className='col2'>
                            <input type="number" name='bp' value={this.state.diabetes_input.bp} onChange={this.handleChange}  />
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col1'>
                            <label>Skin Thickness :</label>
                        </div>
                        <div className='col2'>
                            <input type="number" name='skinThickness' value={this.state.diabetes_input.skinThickness} onChange={this.handleChange}  />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col1'>
                            <label>Insulin :</label>
                        </div>
                        <div className='col2'>
                            <input type="number" name='insulin' value={this.state.diabetes_input.insulin} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col1'>
                            <label>Body Mass Index :</label>
                        </div>
                        <div className='col2'>
                            <input type="number" name='bmi' value={this.state.diabetes_input.bmi} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col1'>
                            <label>Diabetes Pedigree Function :</label>
                        </div>
                        <div className='col2'>
                            <input type="number" name='DiabetesPedigreeFunction' value={this.state.diabetes_input.DiabetesPedigreeFunction} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col1'>
                            <label>Age :</label>
                        </div>
                        <div className='col2'>
                            <input type="number" name='age' value={this.state.diabetes_input.age} onChange={this.handleChange} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="submitBtn">
                            <button className='submit' onClick={this.handleSubmit} name='submit'>Submit</button>
                        </div>
                    </div>
                </form>
            </main>
        </div>
      </>
    )
  }
}
