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

export const SocialMedia = () => {
  return (
    <React.Fragment>
      <NavBar background={softwareBackground} linkText={'Contact Us'}
        title={'Social Media Management Services'} linkTo={'#'}
        firstLiText={'Certified Social Media Marketers'}
        secondLiText={'Tailored SMM Strategy'}
        thirdLiText={'90+ Successful Projects'}
        fourthLiText={'97% Customer Satisfaction'} />
      <TrustedBy />
      <OtherFeatures maintitle={'Award-Winning Social Media Management Agency'}
        mainpara={'Result-driven social media management and advertising strategies helpings brands to grow on different social media channels.'}
        title1={'Brand Reputation Management Services'}
        para1={'We help businesses with social brand reputation management services to build strong brand identity on different channels and nurture relationship with the prospects. Our services are focused to increase customer lifetime value and amplify brand loyalty by positioning your brand in front of your targeted audience. As a top brand reputation management company, we create brand focused user-generated content (UGC) to promote your brand, products, and services. We do strategic monitoring of negative and positive to ensure online brand reputation, credibility and encourage positive brand message across all channels.'}
        title2={'Social Media Advertising'}
        para2={'Software Pro\'s expert team of social media marketers is fully-equipped to drive business growth for your business. We curate social advertising strategies that get your business required results in the given budget. From implementation and monitoring to optimization of paid advertising campaigns, you can rely on us to drive results and online success. Our conversion-focused social media advertising services amplify conversion rate, customer retention rate, and boost customer acquisition by attracting and converting qualified leads. We continually monitor campaigns and dive deep into insights to help your business with tailored solution.'}
        title3={'Social Media Optimization'}
        para3={'Let us optimize your social media channels to reach new leads, drive engagements, and grow followers online. We provide social media optimization services to craft the right and competitive social media strategy that resonates with your goals and position your brand to better reach targeted audience. Our SMO experts have worked with multiple brands and niches to boost brand visibility and drive conversions organically —- getting businesses online success with the right optimization. Leveraging the optimization strategies, we help businesses to create a strong social media presence and attract organic traffic.'}
        title4={'Lead Generation'}
        para4={'We help businesses to reach potential leads that want to hear from you with our lead generation services. Our social media marketers devise tailored marketing strategies to meet your revenue goals and drive maximized return on investment. From curating content to optimizing social media channels, we leverage irresistible strategies and technologies to attract, connect, and convert hot leads through social media channels for your business. To get your business required and desired results, we analyze and take advantage of the data and render the top-quality lead generation services to your business.'}
        title5={'Community Management'}
        para5={'At Software Pro, we provide the best community management services to manage, monitor, and promote your brand\'s identity and community across all social channels. We house an experienced team of community managers who are focused to humanize your brand, manage, and grow your brand followers efficiently. We are well-versed with social community management and create content strategies that resonate with your targeted audience and keep them engaged with the brand. Take advantage of our approachable and proactive community management services and grow your brand.'}
        title6={'Social Media Channels Growth'}
        para6={'Growing social media channels can be challenging — Pro marketers at Software Pro work with businesses of multiple niches to cultivate potential audience and grow social media channels. Utilizing the best practices and superlative strategies, we help you in improving brand visibility and connecting with the right audience. As your social media partner agency, we take full responsibility to optimize, manage, and grow different channels where your targeted audience is engaging.'} />
      <ClientReviews />
      <SoftwareOtherServices title={'Website Maintenance Services & Support Company'}
        title1={'Website Maintenance Services:'}
        title2={'Website Management Services:'}
        title3={'Platforms We Maintain:'}
        array1={['Facebook Management', 'Instagram Management', 'Pinterest Management', 'TikTok Management', 'Snapchat Management', 'GMB Management', 'YouTube Management', 'Twitter Management', 'Twitter Management']}
        array2={['Social PPC Services', 'Account Setup and Optimization', 'Social Ads Copywriting', 'Data-driven Paid Ads Strategy', 'Transparent Reporting and Analysis', 'Advanced Marketing Process', 'Boosted Post Ads Management']}
        array3={['Social Advertising Consulting', 'Social Media Audit and Analysis', 'Social Brand Voice Management', 'Personalized Social Media Strategies', 'Social listening', 'Influencer Marketing Consulting', 'Social Funnel Consulting']} />
      <PartnerWith />
      <TechStack />
      <ClientsPartners />
      <GetConnectedSection />
    </React.Fragment>
  )
}