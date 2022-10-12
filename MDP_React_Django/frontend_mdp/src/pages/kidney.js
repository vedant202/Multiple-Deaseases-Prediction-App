import React, { Component } from 'react'
import FormRepetions from '../component/formRepetions'
import axios from 'axios'

export default class Kidney extends Component {
 kidney_col_list =  ['age', 'bp', 'sg', 'al', 'su', 'pc', 'pcc', 'ba', 'bgr', 'bu', 'sc', 'sod', 'pot', 'hemo', 'pcv', 'wc', 'rc', 'htn', 'dm', 'cad', 'appet', 'pe', 'ane']
 url = "kidney_post"
  
  
  render() {
    return (
      
      <div>
        <FormRepetions diseases_obj={this.kidney_col_list} url={this.url} heading="Kidney Disease"></FormRepetions>
      </div>

    )
  }
}
