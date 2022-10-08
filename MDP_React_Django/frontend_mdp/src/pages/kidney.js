import React, { Component } from 'react'
import FormRepetions from '../component/formRepetions'
import axios from 'axios'

export default class Kidney extends Component {

  constructor(props){
    super(props)
    this.state={
      kidney_col_list : []
    }
  }
  componentDidMount(){
    this.get_kidney_columns_lists()
  }
  get_kidney_columns_lists(){
    axios.get('http://localhost:8000/kidney_columns_lists/').
    then(res => {
      let data = JSON.parse(res.data)
      this.setState({
        kidney_col_list:data
      })
      console.log("Data ",this.state.kidney_col_list)
    })
    .catch(err=>{
      console.log(err)
    })
  }
  
  render() {
    return (
      
      <div>
        {console.log("kkkkk "+typeof this.state.kidney_col_list)}
        <FormRepetions diseases_obj={this.state.kidney_col_list} heading="Kidney Disease"></FormRepetions>
      </div>

    )
  }
}
