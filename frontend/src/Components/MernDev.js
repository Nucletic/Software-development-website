import React from 'react'
import { NavBar } from './NavBar';
import { TrustedBy } from './TrustedBy';
import softwareBackground from '../Images/homepage-banner9.png'
import { OtherFeatures } from './OtherFeatures';
import { ClientReviews } from './ClientReviews';
import { SoftwareOtherServices } from './ClientReviews';
import { PartnerWith } from './PartnerWith';
import { TechStack } from './PartnerWith';
import { ClientsPartners } from './PartnerWith';
import { GetConnectedSection } from './PortFolioSection';

export const MernDev = () => {
  return (
    <React.Fragment>
      <NavBar background={softwareBackground} linkText={'Contact Us'}
        title={'Mern Stack Development Services'} linkTo={'#'} firstLiText={'Certified Mern Stack Developers'} />
      <TrustedBy />
      <OtherFeatures maintitle={'Mern Stack Development Company in Las Vegas and NYC, USA'}
        mainpara={'Software Pro offers the best and robust MERN stack development services and delivers the best web application solutions to diverse businesses.'}
        title1={'MERN Stack Web & Mobile Application Development'}
        para1={'Software Pro is a trusted MERN stack development company in Las Vegas, USA. With a team of skilled MERN stack developers and technological expertise, we are providing efficient and scalable web & mobile application solutions to diverse business industries. Our advanced MERN stack web & mobile application development service focuses on interactive user experience and tailor-made to your business needs.'}
        title2={'MERN Stack Enterprise Development Solutions'}
        para2={'Our MERN stack development service includes scalable, efficient, and cost-effective MERN stack based enterprise application development. Whether you need complex enterprise solutions over the internet or intranet, we ensure reliable and secure development of web applications by implementing all security protocols and standards.'}
        title3={'Responsive & Highly Interactive UI Development'}
        para3={'We provide custom MERN stack based application development service in Las Vegas, USA. To ensure and provide a high-end user experience to your customers, we offer interactive and responsive UI development solutions to businesses. Our experienced UI developers are adept at creating highly responsive and interactive user interfaces.'}
        title4={'Expert MERN Stack Developers'}
        para4={'Hire expert MERN stack developers from Software Pro to get state-of-art MERN stack development solutions. Our certified developers are well-versed with agile MERN stack development with quick turnaround time. With huge domain knowledge and expertise, our skilled MERN developers build feature-enrich real-time and hybrid applications as per your business needs.'}
        title5={'MERN Stack Maintenance & Support'}
        para5={'Software Pro provides 360-degree MERN stack maintenance & support services to businesses. Once the system is deployed, our developers continually monitor and ensure the smooth functioning of developed MERN solutions. From bug fixing to regular updates, we cover you to the fullest.'}
        title6={'MERN Stack Migration & Integration'}
        para6={'With years of experience and huge domain knowledge, Software Pro is empowering businesses with high-performing technological solutions. Our skilled developers help in the seamless integration of your existing web solutions and migration to a robust MERN stack framework with minimal risk.'} />
      <ClientReviews />
      <SoftwareOtherServices title={'MERN STACK DEVELOPMENT SERVICES'}
        title1={'Technology Stack'}
        title2={'MERN Stack Capabilities'}
        title3={'Industry Verticals & Domains'}
        array1={['Node Js', 'Express Js', 'React Js', 'MongoDB', 'AppSync', 'DynamoDB', 'Open Source']}
        array2={['Open Source', 'Interactive Web Application', 'Extensive suite of tools', 'Highly Scalable', 'High-Performance Applications', 'Front-end & Backend Compatibility']}
        array3={['Education', 'Healthcare', 'Entertainment', 'Business & Retail', 'Travel & Transport', 'Banking']}
      />
      <PartnerWith />
      <TechStack />
      <ClientsPartners />
      <GetConnectedSection />
    </React.Fragment>
  )
}
