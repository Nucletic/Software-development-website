import React from 'react'
import { NavBar } from './NavBar'
import { GetConnectedSection } from './PortFolioSection';
import softwareBackground from '../Images/homepage-banner.png'
import vortex from '../Images/vortex.jpg'
import edsbred from '../Images/edsbred.jpg'
import llprivatejewellers from '../Images/llprivatejewellers.jpg'
import AshtonCollege from '../Images/Ashton-College.jpg'
import grandhealth from '../Images/grandhealth-1.jpg'
import steinmedical from '../Images/steinmedical.jpg'
import fivestoneimmigration from '../Images/fivestoneimmigration.jpg'
import arcMain from '../Images/arc-main.jpg'
import activeFire from '../Images/active-fire.jpg'
import allcanadamovers from '../Images/allcanadamovers.jpg'
import vancurl from '../Images/vancurl.jpg'
import bestmoving from '../Images/bestmoving-1.jpg'

export const PortFolio = () => {
  return (
    <React.Fragment>
      <NavBar background={softwareBackground} bigTitle={true} linkText={'Contact Us'}
        title={'Our Portfolio'} title2={'Software Pro is digitalizing the organizational operations with complete Digital Transformation Services and helping to grow businesses online with top of the line digital marketing strategies and implementation.'} linkTo={'#'} />
      <div className="CV78nuCI">
        <div className="BQFcIjnz">
          <Port linkTo={'https://www.vortexrestaurantequipment.ca/'} image={vortex} name={'Vortex Restaurant Equipment'} />
          <Port linkTo={'https://edsbred.com/'} image={edsbred} name={'EdsBred'} />
          <Port linkTo={'https://llprivatejewellers.com/'} image={llprivatejewellers} name={'LL Private Jewellers'} />
          <Port linkTo={'https://www.ashtoncollege.ca/'} image={AshtonCollege} name={'Ashton Collage'} />
          <Port linkTo={'https://www.grand-health.com/'} image={grandhealth} name={'Grandhealth'} />
          <Port linkTo={'https://steinmedical.com/'} image={steinmedical} name={'Stein Medical'} />
          <Port linkTo={'https://www.5simmi.ca/'} image={fivestoneimmigration} name={'Fivestone Immigration'} />
          <Port linkTo={'https://arc-corp.ca/'} image={arcMain} name={'ARC Protection Corp'} />
          <Port linkTo={'https://arc-corp.ca/'} image={activeFire} name={'Active Fire & Safety Services'} />
          <Port linkTo={'https://allcanadamovers.com/'} image={allcanadamovers} name={'All Canada Movers'} />
          <Port linkTo={'https://vancurl.com/'} image={vancurl} name={'Active Fire & Safety Services'} />
          <Port linkTo={'https://www.bestmovingmovers.com/'} image={bestmoving} name={'Best Moving Movers'} />
        </div>
      </div>
      <GetConnectedSection />
    </React.Fragment>
  )
}

const Port = (props) => {
  return (<>
    <a href={props.linkTo} className="jHyAKAsJ">
      <img src={props.image} alt="img" />
      <h3>{props.name}</h3>
    </a>
  </>)
}