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
import { FAQs } from './FAQs';

export const Joomla = () => {
  return (
    <React.Fragment>
      <NavBar background={softwareBackground} linkText={'Contact Us'}
        title={'Joomla Design and Development Services'} linkTo={'#'} firstLiText={'Certified Joomla Developers'} />
      <TrustedBy />
      <OtherFeatures maintitle={'Our Professional Joomla Services For Your Online Stores'}
        mainpara={'Give your online stores, the customer winning advantage with our comprehensive Joomla design and development services. We ensure better performance, more e-commerce features, and higher scalability for your business\'s future growth.'}
        title1={'Joomla Store Development'}
        para1={'We offer Joomla stores that make the optimal use of Jlayouts, retina-ready graphics, advanced plugins, template framework, backend coding, and other e-commerce features to provide fast performance. We also make customization options super easy, so that you can do a few configurations of your store on your own to support your business requirements.'}
        title2={'Joomla Easy Migration'}
        para2={'Migrate from any e-commerce platform to another for gaining multiple benefits - like improved site optimization, third-party integrations, and more. Our Joomla experts run a detailed cost/benefit analysis to figure out value-added functions, particularly for your online store. Then, implement a smooth migration to Joomla for more productivity and high sales.'}
        title3={'Joomla Frontend Development'}
        para3={'Developing the front end of your online store in the right way can do wonders for your online business. Just like our Joomla front-end development solution puts your relevant products where your customers won\'t miss looking at them directly. It instantly boosts the conversion rates and sales - which is extremely useful for the long run of your growing business.'}
        title4={'Joomla Product Review Integration'}
        para4={'Integrate the Joomla product review tool to get more conversions, build trust, and gain credibility for your brand. We create a user-friendly product review tool and add it to your product pages in a way to encourage customers to post their real-time and genuine reviews about your products. This practice lets you grow your sales consistently through organic reviews and traffic.'}
        title5={'Joomla Store Optimization'}
        para5={'As the Joomla experts, we optimize your online store to be super functional with fast-loading pages in every possible couple of seconds. This lets your online store reduce the bounce rates, and improve its ranking on any search engines. Not to mention, you can also get better organic traffic for more sales and high conversion rates.'}
        title6={'Joomla Breadcrumbs Designs'}
        para6={'Adding our well-designed breadcrumbs to your Joomla stores increases the sales chances of other products too. As you can make your customers look into multiple products within the same category and let them choose the best one for them. It also helps Google understand how your store site is structured and rank it on its search engines.'} />
      <ClientReviews />
      <SoftwareOtherServices title={'Joomla Tool Integrations'}
        title1={'E-Commerce Module Development'}
        title2={'Joomla Designing & Development'}
        title3={'Joomla Help & Support Services'}
        array1={['Joomla Payment Integration', 'Joomla POS Integration', 'Joomla Shipping Integration', 'Joomla SMS marketing automation', 'Joomla CRM Integration']}
        array2={['Joomla Custom Website', 'Joomla Theme Development', 'Joomla Interactive Designing', 'Joomla Module Development', 'Joomla Product Review Development']}
        array3={['Joomla Site Services', 'Joomla Quick Migration', 'Joomla Bug-Fixing', 'Joomla Store Upgrades', 'Joomla QA & Testing Team']}
      />
      <PartnerWith />
      <TechStack />
      <ClientsPartners />
      <FAQs FaqArray={
        [
          {
            id: 0,
            question: 'Can you provide Joomla responsive web design services?',
            answer: 'You can get our Joomla responsive web design services by contacting us here. Our team ensures that your online store not only looks beautiful but also functions perfectly across any device and browser.'
          }, {
            id: 1,
            question: 'What are your Joomla maintenance and support practices?',
            answer: 'Our Joomla maintenance and support practices install necessary updates, security patches, and quick tweaks to keep your online stores up-to-date with the latest e-commerce features. You can discuss more with our Joomla experts to get our support services.'
          }, {
            id: 2,
            question: 'Do you develop mobile-friendly Joomla online stores?',
            answer: 'Knowing that every device holds your potential customers, we develop a Joomla online store that is highly optimized. This lets it adjust and function seamlessly on any device while giving your target customers the same consistent experience.'
          }, {
            id: 2,
            question: 'How can my Joomla store\'s template affect my site\'s SEO?',
            answer: 'Every element that concerns your online store\'s speed, structure, and sales affect your site\'s SEO. So, our Joomla experts ensure to utilize every second to make your online store fast, stunning, and loaded with useful Joomla features. As the better the site is structured, the better your site’s SEO will become. Get your online store optimized with our Joomla experts here.'
          }
        ]
      } />
      <GetConnectedSection />
    </React.Fragment>
  )
}
