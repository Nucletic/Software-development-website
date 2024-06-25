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
export const PythonDev = () => {
  return (
    <React.Fragment>
      <NavBar background={softwareBackground} linkText={'Contact Us'}
        title={'Python Development Company in NYC'} linkTo={'#'} firstLiText={'Certified Python Developers'} />
      <TrustedBy />
      <OtherFeatures maintitle={'Python Development Company in New York City USA'}
        mainpara={'Trusted Python development agency in Las Vegas, offering highly scalable and robust Python solutions ranging from custom to complex Python application development.'}
        title1={'Custom Python Web Development'}
        para1={'As a reliable and trusted Python Development Company, Software Pro delivers Full-cycle custom Python web development services in the USA. Our Python developers are proficient in creating robust web solutions on different frameworks including Django, Flask, and CherryPy. We help our clients in creating dynamic websites, custom CMS and cloud apps in a powerful Python programming language.'}
        title2={'Custom Saas Development'}
        para2={'Hire Software Pro\'s expert Python developers who are highly skilled in developing the right SaaS solution in Python. Implementing architectural and functional components, we deliver Python based scalable SaaS solutions with efficient data storage, API integration, and cloud hosting support.'}
        title3={'Custom Python Software Development'}
        para3={'Leveraging the advanced Python frameworks, We provide a full range of Custom Python Software Development services in the USA. We build robust, secure, and user-friendly enterprise applications and ERP solutions. Through machine learning, our custom software development solutions help businesses to analyze large and complex sets of data.'}
        title4={'Python Maintenance and Support'}
        para4={'With years of experience, our dedicated team of Python developers and testers offer maintenance and support services for Python-based applications. Our Python maintenance team ensures the seamless operation of developed Python apps and available 24/7 to provide technical support.'}
        title5={'Python Migration and Integration'}
        para5={'Software Pro offers migration support to migrate your mobile and web application from any other technologies to Python. Hire our Python developers to migrate from other Python frameworks and versions to new ones. We provide hassle-free and secure migration for different technologies including ASP.net, Java, PHP, and Perl.'}
        title6={'Python Web Application Development'}
        para6={'At Software Pro, We offer robust and secure custom Python Web Application development services. With integration capabilities, our developers create scalable Web Application solutions in Python. From enterprise applications to console-based applications, we deliver flexible and reliable solutions to our clients.'} />
      <ClientReviews />
      <SoftwareOtherServices title={'PYTHON DEVELOPMENT SERVICES'}
        title1={'Python Technology Stack'}
        title2={'Superlative Python Development Services'}
        title3={'Python Frameworks & Libraries'}
        array1={['SQLAlchemy', 'SQLite', 'MySQL', 'PostgreSQL', 'MSSQL', 'Tastypie', 'RabbitMQ', 'Redis', 'Gearman', 'Pylint']}
        array2={['Web Crawler Development', 'Web & Mobile Application Development', 'AI & Data Science Solution', 'Game Development', 'Python UI Design & Development', 'Python Custom Prototype Development']}
        array3={['Django', 'Zope', 'Flask', 'Pyramid', 'wxPython', 'Scrapy', 'Pillow', 'Web2py', 'Tornado', 'CheryPy', 'NumPy', 'SciPy']}
      />
      <PartnerWith />
      <TechStack />
      <ClientsPartners />
      <GetConnectedSection />
    </React.Fragment>
  )
}
