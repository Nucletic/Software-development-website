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

export const JavaDev = () => {
  return (
    <React.Fragment>
      <NavBar background={softwareBackground} linkText={'Contact Us'}
        title={'Java Development Company'} linkTo={'#'} firstLiText={'Certified Java Developers'} />
      <TrustedBy />
      <OtherFeatures maintitle={'Java Development Company in NYC and Las Vegas, USA'}
        mainpara={'Leveraging the best practices for Java development to develop robust and efficient Java based solutions.'}
        title1={'Custom Java Web Development'}
        para1={'Software Pro - A Java development company in the USA, provides full-cycle custom product development services using different Java technologies including Spring Boot, J2EE, Kafka, and microservices. Software Pro Java developers and software architects partner with clients to give adaptable and customized Java development solutions.'}
        title2={'Java Mobile & Web Application Development'}
        para2={'Software Pro has a team of certified Java developers that are adept in developing secure, reliable, and scalable Java Mobile and Web applications. Our experts combine their hands-on experience to deliver multilevel & cross-platform Java applications to clients. We deliver best in class Java solutions tailored to meet business-specific requirements.'}
        title3={'J2EE App & Software Development'}
        para3={'Using the J2EE platform, our highly skilled developers are serving the industry with large scale, multi-tier enterprise software development solutions. Leveraging the advanced J2EE framework, we build robust, high-end application and software solutions with scalable architecture.'}
        title4={'Java Cloud Application Development'}
        para4={'We offer highly secure, and flexible Cloud Application development solutions through advanced Java technologies. Our expert cloud architects and Java experts build full cycle custom cloud apps using Spring Cloud framework. With easy application setup and integration capabilities, we build cost-effective cloud applications.'}
        title5={'Java API Development'}
        para5={'Software Pro’s certified developers are well-versed with Java technologies and advanced frameworks. Building high performance API’s to give augmented efficiency and functionalities of existing applications. At Software Pro, we offer Secure, Well structured, and Custom Java API development & Integration service for Mobile, Web, and Cloud Apps.'}
        title6={'Java Application Maintenance and Support'}
        para6={'Software Pro offers full-fledged Java Application Maintenance and support services. We do performance monitoring of your application and provide technical support to ensure seamless workflow of your Java application. Our maintenance team provides consistent support, upgrade, and debugging services round the clock.'} />
      <ClientReviews />
      <SoftwareOtherServices title={'JAVA DEVELOPMENT SERVICES'}
        title1={'Java Technologies & Frameworks'}
        title2={'Java Development Services'}
        title3={'Industries'}
        array1={['Spring MVC', 'JSF', 'Spring Boot/ REST API', 'Hibernate', 'JAVA EE & SE', 'Tomcat', 'Jetty', 'JDBC', 'MongoDB', 'MySQL & Microsoft SQL', 'AWS RDS']}
        array2={['Java Application Development', 'Enterprise Solution Development', 'CRM and ERP Solutions', 'Java API & Plugin Development', 'SaaS Cloud Applications']}
        array3={['Fintech', 'Healthcare', 'Oil & Gas Mining', 'Retail & Ecommerce', 'Education', 'Logistics & Distribution', 'Enterprises']}
      />
      <PartnerWith />
      <TechStack />
      <ClientsPartners />
      <GetConnectedSection />
    </React.Fragment>
  )
}
