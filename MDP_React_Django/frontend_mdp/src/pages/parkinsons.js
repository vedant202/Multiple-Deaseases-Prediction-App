import React, { Component } from 'react'
import FormRepetions from '../component/formRepetions'

export default class Parkinsons extends Component {
  // MDVP:Fo(Hz)	MDVP:Fhi(Hz)	MDVP:Flo(Hz)	MDVP:Jitter(%)	MDVP:Jitter(Abs)	MDVP:RAP	MDVP:PPQ	Jitter:DDP	MDVP:Shimmer	MDVP:Shimmer(dB)	Shimmer:APQ3	Shimmer:APQ5	MDVP:APQ	Shimmer:DDA	NHR	HNR	status	RPDE	DFA	spread1	spread2	D2	PPE
  parkinsons_diseases_dataset = ["MDVP:Fo(Hz)",	"MDVP:Fhi(Hz)",	"MDVP:Flo(Hz)",	"MDVP:Jitter(%)",	"MDVP:Jitter(Abs)",	"MDVP:RAP",	"MDVP:PPQ",	"Jitter:DDP",	"MDVP:Shimmer",	"MDVP:Shimmer(dB)",	"Shimmer:APQ3",	"Shimmer:APQ5",	"MDVP:APQ",	"Shimmer:DDA",	"NHR",	"HNR",	"RPDE",	"DFA",	"spread1",	"spread2",	"D2",	"PPE",]

  url = "parkinsons_post"
  render() {
    return (
      <div>
        <FormRepetions diseases_obj={this.parkinsons_diseases_dataset} url={this.url} heading="Parkinsons Disease"></FormRepetions>

      </div>
    )
  }
}
