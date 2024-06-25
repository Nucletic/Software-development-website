import React from 'react'
import sectionStyle from '../Images/sectionstyle.png'


export const FancyTitle = (props) => {
  return (
    <div className='I2GokTOz '>
      <div className="Inmg9RTh ">
        <div className="X1TVm4mD ">
          <h2>{props.TitleOne}</h2>
          <div className='jiFlejCE '>
            <h1>{props.TitleTwo}</h1>
            {props.TitleThree && (
              <h3>{props.TitleThree}</h3>
            )}
          </div>
        </div>
        {props.SectionStyle && (
          <img src={sectionStyle} alt="img" />
        )}
      </div>
    </div>
  )
}
