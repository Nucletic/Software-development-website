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

export const DotNetDev = () => {
  return (
    <React.Fragment>
      <NavBar background={softwareBackground} linkText={'Contact Us'}
        title={'Dot Net Development Company in NYC'} linkTo={'#'} firstLiText={'Certified Dot Net Developers'} />
      <TrustedBy />
      <OtherFeatures maintitle={'.NET Development Company in New York City, USA'}
        mainpara={'Software Pro offers trusted and most reliable .NET development services in New York City, USA and rendering .NET application development services to diverse business domains.'}
        title1={'Custom ASP.NET Development'}
        para1={'Through Microsoft technologies support, Software Pro helps clients with scalable and flexible .NET application development solutions. Our .NET developers have deep knowledge and experience in dot NET web development and build custom .NET solutions incorporating the latest .NET frameworks and libraries.'}
        title2={'.NET CMS Application Development'}
        para2={'Software Pro\'s developers deliver fast, secure, and reliable .NET based CMS solutions to clients. We specialize in developing usable and simple interfaces to manage content efficiently. From enterprise CMS to custom CMS development solutions, our developers create cutting-edge CMS solutions using the latest Microsoft frameworks.'}
        title3={'.NET Mobile & Desktop Application Development'}
        para3={'We offer mobile application development services on Windows platforms to our clients. Our developers are proficient in building feature-rich windows mobile apps with excellent user experience. Using best practices and Windows Presentation Foundation, we develop robust and highly scalable Desktop applications, Smart client apps, and Windows GUI applications.'}
        title4={'.NET Enterprise Application Development'}
        para4={'Using .NET framework, we develop custom full cycle enterprise solutions for enterprises. Being a leading Dot NET development company, our developers develop enterprise applications, corporate web portals, ERP solutions, B2B & B2C document management, Enterprise Intranet & extranet apps, and scalable web applications using the .NET framework.'}
        title5={'.NET Migration & Integration'}
        para5={'Our expert developers ensure the seamless migration of existing applications to .NET technology. Software Pro provides ASP.NET migration support for desktop applications to web applications. We offer .NET legacy application modernization, upgrade & update service in the USA.'}
        title6={'.NET Maintenance & Support Service'}
        para6={'Our ASP.NET maintenance team is 24/7 available to assist you and provides maintenance services to take care of the smooth and fast performance of your application. We provide dedicated support services to ensure the optimal performance of your application without any security lags.'} />
      <ClientReviews />
      <SoftwareOtherServices title={'DOT NET DEVELOPMENT SERVICES'}
        title1={'.NET Technologies & Platforms'}
        title2={'.NET Services'}
        title3={'.NET Development Solutions'}
        array1={['.NET WPF', '.NET Core', 'ADO.NET', 'Azure IoT Hub', 'DNX', 'WCF', 'Power BI', 'Google Cloud', '.NET MVC']}
        array2={['Microservices', 'NET Cloud Development', 'UI/UX Design', 'WPF Web Services', 'Azure AI Services', 'Azure Cognitive Services']}
        array3={['Cloud based Application Development', 'Data Storage Application Development', 'Xamarin Cross Platform Application Development', 'CRM and ERP System Development', 'Enterprise Portal Development']}
      />
      <PartnerWith />
      <TechStack />
      <ClientsPartners />
      <GetConnectedSection />
    </React.Fragment>
  )
}
