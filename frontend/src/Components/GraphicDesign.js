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

export const GraphicDesign = () => {
  return (
    <React.Fragment>
      <NavBar background={softwareBackground} linkText={'Contact Us'}
        title={'Graphic Designing Services'} linkTo={'#'}
        firstLiText={'Professional Graphic Designing Team'}
        secondLiText={'1000+ Creative Graphic Design Projects'}
        thirdLiText={'100% Client Satisfaction & Approval'}
        fourthLiText={'12-Year Successful Industry Experience'} />
      <TrustedBy />
      <OtherFeatures maintitle={'Our Graphic Designing Services Make it Iconic'}
        mainpara={'We see through your ideas and work our best to visualize them. With our exceptional services, all types of innovative and optimized graphic designs are now at your fingertips.'}
        title1={'Logo & Brand Identity'}
        para1={'We unify our creativity and your values to create visuals that reflect your brand identity in an impeccable manner. Our team conducts in-depth market research to uncover visual trends and then come up with innovative ideas to create your brand image. We produce unique, appealing logo and other design elements for your brand that gives it a chance to stand out.'}
        title2={'Image & Video Editing'}
        para2={'We can\'t deny that there\'s a high demand for digital imaging and video editing professionals in the industry. This is simply because not any one can enhance the visuals to the required standard. We work the best to edit all types of images and videos including infographics, posters, product shots, and banners, reels, slideshows, and social media videos.'}
        title3={'Ads & Marketing Collateral'}
        para3={'We understand that persuasive and appealing designs are important to ensure the success of your marketing campaigns. This is why we create effective posters and image designs for social media posts, email newsletters, whitepapers, and other forms of marketing collateral. We design creatives that immediately hook your target audience, promoting your services and products.'}
        title4={'Web & App Designs'}
        para4={'We skillfully create one-of-a-kind UI designs for your websites and applications which never fail to deliver an enriched user experience. We innovate the market trends and combine them with your goals in a way that creates highly intuitive Ui/UX designs. From strategizing the best UI designs to actually implementing the interface, we do everything to bring your vision to life.'}
        title5={'Visual & Print Creatives'}
        para5={'We are experts at transforming your visions into crisp and clear prints. You can create awareness about your business with our expertly-designed promotional graphics including brochures, menu cards, marketing books, and flyers. Everything from the layout to palette and format is well considered, making us your one-stop creative solution that drives results.'}
        title6={'Copy Content & SEO'}
        para6={'We are well-aware that an effective copy content is the key component of graphics that you may use to display on your websites and social media platforms, or simply distribute as a marketing collateral. Therefore, we provide you with a persuasive and keyword-based copy content that\'s crafted to appeal to your target audience and improve your search engine rankings.'} />
      <ClientReviews />
      <SoftwareOtherServices title={'GRAPHIC DESIGNING SERVICES'}
        title1={'Consultancy For Branding'}
        title2={'Creating Brand Identity'}
        title3={'Web Design Services'}
        array1={['Vision, Values & Visuals', 'New Brand Identity', 'Modify Brand Identity', 'Branding Elements', 'Brand Identity Ideas']}
        array2={['Logo Creation & Redesign', 'Business Card Designs', 'Flyers & Brochures', 'Website Designs', 'Marketing Collateral']}
        array3={['UI/UX Designs', 'Web Banners', 'Landing Page Designs', 'Icon Designs', 'E-commerce Designs']}
      />
      <PartnerWith />
      <TechStack />
      <ClientsPartners />
      <GetConnectedSection />
    </React.Fragment>
  )
}
