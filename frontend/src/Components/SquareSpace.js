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

export const SquareSpace = () => {
  return (
    <React.Fragment>
      <NavBar background={softwareBackground} linkText={'Contact Us'}
        title={'Squarespace Design and Development Services'} linkTo={'#'} firstLiText={'Certified Squarespace Developers'} />
      <TrustedBy />
      <OtherFeatures maintitle={'Checkout Our Squarespace Services For Your Online Stores'}
        mainpara={'From web development to post-deployment support, our Squarespace team covers everything! We provide you the top-class Squarespace design and development services to build you a highly responsive and tailor-made online store to meet your unique business needs.'}
        title1={'Squarespace UI/UX Designs'}
        para1={'Connect your brand and your customers much closer using their shopping experience at your online store and your brand\'s back story. Our Squarespace experts strategically blend the user experience and your brand storytelling technique in our UI/UX designs to create personalized relationships and gain brand loyalty for long-term business success.'}
        title2={'Squarespace Web Development'}
        para2={'Our Squarespace web development solution can go a long way in helping your brand succeed. We use custom-made themes, tailored modules, and user-friendly navigations to guarantee you an outstanding shopping experience, more returning customers, and attract a lot more prospective customers for higher sales of your products.'}
        title3={'Squarespace Seamless Migration'}
        para3={'With a rapidly growing online store, you are bound to have more products, more traffic, and more stuff to manage. This can lead your online store to perform at a crawling speed during peak hours and large traffic volumes. This is where we - as the Squarespace experts - help you to make a perfect migration to Squarespace for optimal performance of your online stores.'}
        title4={'Squarespace Wishlist Extension'}
        para4={'Using a wishlist, your customers can keep a list of your products to buy them later. We develop the Squarespace wishlist extension with additional features such as customer wishlist insights, out-of-stock items, and more. Our Squarespace team can further customize it to follow up with your customers for their wishlists to grow sales and drive traffic for particular products.'}
        title5={'Squarespace Multilingual Support'}
        para5={'Based on the region, you can effectively load your online store with the native language of your customers. We create multiple versions of your online store with Squarespace multilingual support. It uses the auto geo-detects and directs your customers to the online store built in their language, giving you an opportunity of capturing more customers for your brand globally.'}
        title6={'Squarespace SMS and Email Integration'}
        para6={'We integrate the Squarespace SMS and email modules into your online stores and help you put your product right in front of your target customers to boost sales. Our Squarespace developers can also customize these modules to directly inform your customers about the ongoing promotions, product availability, order information, and more at your online stores.'} />
      <ClientReviews />
      <SoftwareOtherServices title={'Squarespace Module Integration'}
        title1={'Squarespace Extension Integration'}
        title2={'Squarespace Custom Solutions'}
        title3={'Squarespace Support Services'}
        array1={['Squarespace ERP Integration', 'Squarespace CRM Integration', 'Squarespace Payment Integration', 'Squarespace POS Integration', 'Squarespace Email Marketing Integration']}
        array2={['Squarespace Web Development', 'Squarespace Custom Template', 'Squarespace Dashboard Development', 'Squarespace 3D/2D Design', 'Squarespace Enterprise UX']}
        array3={['Squarespace Bug-Fixing', 'Squarespace Prototyping', 'Squarespace Performance', 'Squarespace Replatforming', 'Squarespace Technical Support']}
      />
      <PartnerWith />
      <TechStack />
      <ClientsPartners />
      <FAQs FaqArray={
        [
          {
            id: 0,
            question: 'As a Squarespace expert, why do you think that I should choose this platform for my online store development?',
            answer: 'Every platform caters to a different set of business owners. That includes the kind of product you want to sell, the complexity of your business operations, and your budget to set up and run the online store. Everything that involves building your online store on the Squarespace platform. You can consult our e-commerce experts to find which platform can fulfill your business needs.'
          }, {
            id: 1,
            question: 'Do you focus on developing optimized Squarespace online stores?',
            answer: 'We believe that an online store must perform exceptionally across every device. Because it can practically provide you unlimited opportunity to gain customers, get sales, and build a strong presence of your brand in the digital market. That\'s why we take mobile optimization seriously and implement it in every solution to deliver the best results.'
          }, {
            id: 2,
            question: 'How much time will your team take to develop a Squarespace online store?',
            answer: 'We deliver the Squarespace online store solutions as soon as possible. But this factor highly depends on the requirements of your online stores, business processes, and budget. The more complex your project is, the more time it will take to deliver your online store.'
          }, {
            id: 2,
            question: 'Do you offer ongoing support and help once my online store launches on the Squarespace platform?',
            answer: 'Yes, we have a dedicated support team that handles all the support and maintenance tasks of the online stores. If you want to know more, then feel free to contact our Squarespace team to discuss your maintenance project.'
          }
        ]
      } />
      <GetConnectedSection />
    </React.Fragment>
  )
}
