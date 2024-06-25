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

export const LandingPage = () => {
  return (
    <React.Fragment>
      <NavBar background={softwareBackground} linkText={'Contact Us'}
        title={'Landing Page Design & Development Services'} linkTo={'#'}
        firstLiText={'Collaborative Teams of Designers & Marketers'}
        secondLiText={'1000+ Landing Page Design Deliveries'}
        thirdLiText={'100% Client Approval, Satisfaction & Retention'}
        fourthLiText={'12-Year Effort-Proven Industry Experience'} />
      <TrustedBy />
      <OtherFeatures maintitle={'Get High-conversion Landing Page Designs'}
        mainpara={'With our intuitive design approach, we strive to maximize your conversion rate and ROI. We create user-centric landing page designs that effectively compels your prospects to convert into potential leads.'}
        title1={'Comprehensive Site Audit'}
        para1={'We create user-centric landing page designs which effectively appeal to your target audience. Our holistic approach serves the best to make sure that your landing page is engaging enough to entertain and retain your users. We thoughtfully combine your business goals with our creativity, enabling you to deliver an enhanced user experience.'}
        title2={'Landing Page Development'}
        para2={'Visualizing your ideas is what we do best and therefore, we develop your landing page just the way you want. From ensuring that each component is clickable, interactive, and navigable to making certain that the visuals resonate with the band identity, our team does everything that a persuasive landing page design demands.'}
        title3={'HTML Code Conversion'}
        para3={'We facilitate PSD to HTML conversion in order to make your landing page design and development process simpler. Whatever the format of your design file, our designers can convert it into a fully-functional web page with well-structured code. We easily work with different design file formats including Figma, Sketch, Ai, and XD.'}
        title4={'Landing Page Copywriting'}
        para4={'Your landing page design is incomplete without persuasive copy content. This is why we craft a compelling copy for your landing page that clearly highlights your unique selling proposition and hooks your target audience at first glance. In addition, we target the right and relevant keywords to optimize your landing page for search engine rankings as well.'}
        title5={'Conversion Rate Optimization'}
        para5={'All you need is a well-designed user interface with powerful call-to-actions that can convert prospective visitors into paying consumers. This is exactly what we do in order to increase your conversion rate and thus, revenue. We tailor the landing page design based on your business goals and market trends, ensuring that it generates qualified leads.'}
        title6={'Conversion Rate Optimization'}
        para6={'Responsiveness is the key to success and that\'s the reason we work harder to make sure that your landing page is cross-compatible. We design and develop it in a way that it can run smoothly on all types of devices and browsers. When your landing page design is effectively responsive then nothing can stop you from capturing leads.'} />
      <ClientReviews />
      <SoftwareOtherServices title={'LANDING PAGE DESIGN & DEVELOPMENT SERVICES'}
        title1={'Consultancy From Landing Page Design Porfessionals'}
        title2={'Result-driven Landing Page Design and Development'}
        title3={'Result-driven Landing Page Design and Development'}
        array1={['Landing Page Design Audits', 'Landing Page Design Types', 'Landing Page Design Objectives', 'Landing Page Design Strategies', 'Landing Page Design Ideas', 'Landing Page Design SEO']}
        array2={['Conversion-oriented UI', 'Compelling Call-to-Actions', 'Loading Speed Optimization', 'All-device Responsiveness', 'HTML Code Conversions', 'Persusive Copywriting']}
        array3={['HubSpot', 'Klaviyo', 'Salesforce', 'Unbounce', 'Mailchimp', 'Marketo']}
      />
      <PartnerWith />
      <TechStack />
      <ClientsPartners />
      <GetConnectedSection />
    </React.Fragment>
  )
}