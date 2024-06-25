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

export const AiDev = () => {
  return (
    <React.Fragment>
      <NavBar background={softwareBackground} linkText={'Contact Us'}
        title={'AI & ML Development Services'} linkTo={'#'} firstLiText={'Certified AI/ML Developers'} />
      <TrustedBy />
      <OtherFeatures maintitle={'Hire AI/ML Development Company in Las Vegas and NYC, USA | Software Pro'}
        mainpara={'Software Pro provides AI software solutions and ML development solutions to build result-driven intelligent applications for multiple businesses.'}
        title1={'Dedicated AI/ML Developers'}
        para1={'Software Pro has a team of dedicated AI/ML developers who have extended expertise in developing Artificial Intelligence and Machine Learning solutions for multiple businesses. From custom development to AI/ML integration, they are proficient in building and deploying complex Machine Learning models and algorithms.'}
        title2={'Intelligent Chatbot Development'}
        para2={'At Software Pro, we offer intelligent chatbot development services to diverse business domains and verticals. Our expert AI developers develop interactive chatbots that can give personalized interaction and chat experience to your customers.'}
        title3={'Image Processing & Data Mining'}
        para3={'We provide end-to-end Image Processing and Data Mining solutions to businesses that can help them in critical business decisions. By integrating neural networks and machine learning engines, our image processing solution allows text translation. Our mining experts implement data mining algorithms for in-depth data exploration and extraction for real-time use.'}
        title4={'Custom Artificial Intelligence Applications Development'}
        para4={'We build AI-based powerful applications to help business processes with intelligent solutions. Leveraging the AI tools, our AI developers have extended expertise in AI-One, Apache Mahout, and Tamr, etc., and develop intelligently driven AI apps for businesses. From design to code, setting up cloud-based AI models to intelligent human experiences, Our AI development team is efficient in Artificial Intelligence solutions development.'}
        title5={'Custom Machine Learning Applications Development'}
        para5={'Software Pro offers Machine Learning development solutions to businesses. We have a team of experienced Machine Learning developers that can help you to solve complex problems and automate business processes. Hire our ML developers to develop custom and enterprise-level machine learning applications that cater to your business needs.'}
        title6={'AI-based Robotic Process Automation Solution'}
        para6={'To minimize man-power & effort and increase productivity, Software Pro offers AI-based Robotic process automation solutions in Las Vegas, USA. We supplement automation technology to businesses that provide intelligent support reducing human error. Our specialized RPA team helps in automatic report generation and data exploration.'} />
      <ClientReviews />
      <SoftwareOtherServices title={'AI/ML DEVELOPMENT SERVICES'}
        title1={'Frameworks & Libraries'}
        title2={'Toolkits & Platforms'}
        title3={'Industry Verticals & Domains'}
        array1={['Tensorflow', 'PyTorch', 'MXNet', 'Caffe2', 'Sonnet', 'Tensor2Tensor', 'Tf-slim']}
        array2={['Microsoft Cognitive Toolkit', 'Core ML', 'Kurento\'s Computer vision', 'Azure Machine Learning', 'Amazon Machine Learning', 'Cloud Speech API', 'Cloud Machine Learning Engine', 'Cloud Vision API']}
        array3={['AdTech', 'Finance', 'Manufacturing', 'Healthcare', 'Retail', 'Automotive', 'Education']}
      />
      <PartnerWith />
      <TechStack />
      <ClientsPartners />
      <GetConnectedSection />
    </React.Fragment>
  )
}
