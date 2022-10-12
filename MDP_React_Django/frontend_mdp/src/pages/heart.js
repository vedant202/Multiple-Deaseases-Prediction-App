import React, { Component } from 'react'
import FormRepetions from '../component/formRepetions'

// age	sex	cp	trestbps	chol	fbs	restecg	thalach	exang	oldpeak	slope	ca	thal	target


export default class Heart extends Component {
  constructor(props){
    super(props)
  }

  heart_col_list = ["age","sex","cp","trestbps","chol","fbs","restecg","thalsch","exang","oldpeak","slope","ca","thal"]
  url = "heart_post"
  render() {
    return (
      <div>
        <FormRepetions diseases_obj={this.heart_col_list} url={this.url} heading="Heart Disease"></FormRepetions>
      </div>
    )
  }
}
