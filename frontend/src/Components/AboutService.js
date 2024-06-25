import React from 'react'
import { FancyTitle } from './FancyTitle'
import HomeAbout from '../Images/homeabout.webp'

export const AboutService = () => {
  return (
    <div className='p9HMDzj7'>
      <div className="Cd4sC4m7">
        <div className='vmCnupdI'>
          <div className="EvlabG5F ">
            <FancyTitle TitleOne={'COMPANY'} TitleTwo={'ABOUT US'} />
            <div className='MGua1sBS '>
              <h2>Professional Software Development Company</h2>
              <p>Located in the heart of New York, USA, with 5 international offices, Software Pro is among the top software
                engineering companies in the United States, helping global clients.
                <br /><br />
                Software Pro is the best team of Software Developers, Custom Application Development Experts,
                UX/UI Specialists & Certified Web Developers. Software Pro has expertise in cloud Application Development,
                Customer Software Development, Web Development, E-commerce Development, AI/IoT Solutions, Mobile App Development,
                Artificial Reality (AR) and Virtual Reality Solutions, Business Consultancy from formation to Web Design & Tax Systems,
                Digitalizing the Organizational Operations with complete Digital Transformation Services & Online and Digital Marketing
                to help grow businesses online.</p>
            </div>
          </div>
          <img src={HomeAbout} className='wA4uBJCM ' alt="img" />
        </div>
      </div>
    </div>
  )
}
