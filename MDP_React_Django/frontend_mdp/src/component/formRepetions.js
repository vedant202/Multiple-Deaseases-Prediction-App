import React, { Component } from "react";
import "../pages/css/diabetes.css"

export default class FormRepetions extends Component {
  diabetes_input = {
    prgnancies: 0,
    glucose: 0,
    bp: 0,
    skinThickness: 0,
    insulin: 0,
    bmi: 0,
    DiabetesPedigreeFunction: 0,
    age: 0,
  };

  constructor(props) {
    super(props);
    let varsLength = 4;
  }
  
  render() {
    let diseases_obj = this.props.diseases_obj
    console.log("Disease Object "+diseases_obj)
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
                          <input type="number" name={e} />
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
