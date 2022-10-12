import React, { Component } from "react";
import "../pages/css/diabetes.css"
import axios from "axios";

const API_HOST = 'http://localhost:8000';

let _csrfToken = null;

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

export default class FormRepetions extends Component {
  
  list_to_obj(){
    let obj ={}
    for(let i=0;i<this.props.diseases_obj.length;i++){
       obj[this.props.diseases_obj[i]] = 0;
    }
    // console.log(obj)
    return obj
  }  
  

  constructor(props) {
    super(props);
    let varsLength = 4;
    this.state={
      // this.props.diseases_obj.reduce((a, v) => ({ ...a, [v]: v}), {})
      diseases: this.list_to_obj()
    }
    this.diseases_input = this.state.diseases
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleChange=(event)=>{
    console.log("Change is triggered "+event.target.name)
    
    this.diseases_input[event.target.name] = event.target.value;
    
    // console.log("Set "+this.diseases_input)
    this.setState(this.diseases_input)
    // console.log(this.state.diseases)
  }

  handleSubmit=async(event)=>{
    event.preventDefault();
    console.log("Submit is triggered")
    console.log(this.state.diseases)
    // axios.defaults.xsrfHeaderName = "X-CSRFToken"
    // axios.defaults.xsrfCookieName = await getCsrfToken()
    // axios.post(
    //     `http://localhost:8000/${this.props.url}/`,
    //     JSON.stringify(this.state.diseases),{
    //         headers:{'content-type':'application/json'},
    //     }
    // )
    // .then(res=>{
    //     console.log(res.data)
    // })
    // .catch(err=>{
    //     console.log(err)
    // })
    const response = await fetch(`http://localhost:8000/${this.props.url}/`,{
      method: 'POST',  
      headers: (
        {'X-CSRFToken': await getCsrfToken()}
      ),
      body:JSON.stringify(this.state.diseases),
      credentials: 'include',
    });
    const data = await response.json();
    console.log(data)
  }

  render() {
    let diseases_obj = this.props.diseases_obj
    // console.log(diseases_obj)
    return (
      <>
        <div className="container">
          <div className="heading">
            <h1>{this.props.heading} using Machine Learning</h1>
          </div>
          <main>
            <form>
              {diseases_obj.map(e=>{
                return (
                    <>
                      <div className="row">
                        <div className="col1">
                          <label>{e} :</label>
                        </div>
                        <div className="col2">
                          <input type="number" value={this.state.diseases[e]} onChange={this.handleChange} name={e} />
                        </div>
                      </div>
                    </>
                  );
              })}
              <div className="row">
                        <div className="submitBtn">
                            <button className='submit' onClick={this.handleSubmit} name='submit'>Submit</button>
                        </div>
                    </div>
            </form>
          </main>
        </div>
      </>
    );
  }
}
