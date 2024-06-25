import React from 'react'
import ico_1 from '../Images/ico-05.png'
import ico_2 from '../Images/ico-06.png'
import ico_3 from '../Images/ico-07.png'
import ico_4 from '../Images/ico-08.png'
import ico_5 from '../Images/ico-09.png'

export const OtherFeatures = (props) => {
  return (
    <div className='kBNrQlW5'>
      <div className="vI84Vowv">
        <div className="LIAY9NWm">
          <h2>{props.maintitle}</h2>
          <p>{props.mainpara}</p>
        </div>
        <div className="QZTJdBvw">
          <Feature title={props.title1} para={props.para1} image={ico_1} />
          <Feature title={props.title2} para={props.para2} image={ico_2} />
          <Feature title={props.title3} para={props.para3} image={ico_3} />
          <Feature title={props.title4} para={props.para4} image={ico_4} />
          <Feature title={props.title5} para={props.para5} image={ico_5} />
          <Feature title={props.title6} para={props.para6} image={ico_5} />
        </div>
      </div>
    </div>
  )
}


const Feature = (props) => {
  return (
    <div className="B1wTmCsJ">
      <div className='iVmFkEfi'>
        <img src={props.image} alt="img" width={30} />
      </div>
      <h2>{props.title}</h2>
      <p>{props.para}</p>
    </div>
  )
}