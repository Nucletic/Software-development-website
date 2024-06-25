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
export const LaravelDev = () => {
  return (
    <React.Fragment>
      <NavBar background={softwareBackground} linkText={'Contact Us'}
        title={'Laravel Development Services'} linkTo={'#'} firstLiText={'Certified Laravel Developers'} />
      <TrustedBy />
      <OtherFeatures maintitle={'Laravel Development Company in New York City, USA'}
        mainpara={'Software Pro offers a wide range of custom Laravel solutions. Hire dedicated Laravel developers and get sustainable and scalable PHP web applications using the Laravel framework.'}
        title1={'Custom Laravel Development'}
        para1={'With a team of in-house expert Laravel developers, Software Pro is a recognized and leading Laravel development company in Las Vegas, the USA for its excellent and high-quality development solutions. From custom Laravel web solutions to software, our dedicated Laravel developers deliver scalable and robust solutions and serve clients with licensed Laravel tools, and development processes within a time frame.'}
        title2={'Laravel ERP & CRM Development'}
        para2={'At Software Pro, we have an in-house team of experienced Laravel developers having 10+years of PHP and Laravel development. Our Laravel development service provides ERP, CMS, and CRM solutions on a robust Laravel platform. We build high-end enterprise solutions with proven code standards to help businesses in managing their business processes efficiently.'}
        title3={'Laravel eCommerce Solutions Development'}
        para3={'Whether you need B2B or B2C e-commerce solutions, experienced Laravel developers from Software Pro can create functional Laravel based e-commerce solutions for you. We build flexible and optimized online stores to help businesses to maximize ROI and Conversion rate.'}
        title4={'Laravel Extension Development'}
        para4={'Software Pro offers a wide range of Laravel development services and has extended expertise in Laravel extension development. Leveraging the Laravel technology, Our expert Laravel developers build high-end extensions to integrate additional features into your existing web applications'}
        title5={'Laravel 3rd Party App Integration and Development'}
        para5={'From payment gateway to email service, Social media platform to 3rd party app integration, custom API development to API integration, Software Pro offers seamless Laravel integration and API development services in Las Vegas. With cutting-edge technologies and latest methodologies implementation, our expert Laravel developers help in the smooth integration of your web application as per your business needs.'}
        title6={'Laravel Migration and Upgrades'}
        para6={'Want to migrate or upgrade your web application? Software Pro provides Laravel migration and upgrades solutions to businesses. To help in easy migration between Laravel platforms and upgrading to latest versions, Our experienced agile Laravel developers ensure to give you a seamless experience on the Laravel platform.'} />
      <ClientReviews />
      <SoftwareOtherServices title={'LARAVEL DEVELOPMENT SERVICES'}
        title1={'Front-end Technologies'}
        title2={'Backend Technologies'}
        title3={'Laravel Development Capabilities'}
        array1={['HTML5', 'CSS3', 'JavaScript', 'JQuery', 'Angular.Js', 'React.Js']}
        array2={['PHP', 'MySQL', 'PostgreSQL', 'Laravel', 'Cake PHP', 'Ajax']}
        array3={['Robust MVC Support', 'Built-in Security', 'Flexible and Robust Framework', 'Multiple Cache Configuration', 'Instinctive Packaging System', 'Integrated Mail services', 'Integrated Analytical Tools']}
      />
      <PartnerWith />
      <TechStack />
      <ClientsPartners />
      <GetConnectedSection />
    </React.Fragment>
  )
}