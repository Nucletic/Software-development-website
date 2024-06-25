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

export const SEO = () => {
  return (
    <React.Fragment>
      <NavBar background={softwareBackground} linkText={'Contact Us'}
        title={'Search Engine Optimization Services'} linkTo={'#'}
        firstLiText={'Highly Skilled SEO Specialists'}
        secondLiText={'200+ Well-ranked Website Projects'}
        thirdLiText={'99% Client Satisfaction & Retention'}
        fourthLiText={'12-Year Proven Industry Experience'} />
      <TrustedBy />
      <OtherFeatures maintitle={'Invest in Our SEO Services to Rank Your Websites Higher'}
        mainpara={'We use strong analytical skills and high-performance optimization strategies to transform the landscape of your online business. Our collaborative teams work tirelessly in order to give your website a competitive edge and help it secure a top-ranking position on the search engine result pages.'}
        title1={'Comprehensive Site Audit'}
        para1={'We thoroughly analyze your website in order to determine where it stands from the SEO perspective. Everything including site structure, loading speed, content, meta tags, links, source code, and robots.txt is carefully examined in order to identify the underlying issues affecting your site\'s visibility and ranking. We make sure to prepare detailed audit reports and keep you updated about your website\'s performance.'}
        title2={'In-depth Keyword Research'}
        para2={'We capitalize on the potential of every intuitive tool and resource that can provide us with insights into market trends and hot topics. Afterwards, we track down every traffic-driving keyword (with respect to your target niche) that you can target in your content. We plan and implement effective keyword strategies, making sure that your content is more relevant to the user queries and thus ranks higher on SERPs.'}
        title3={'Full On-page Optimization'}
        para3={'We are well aware that content becomes rankable only when it is created and optimized in compliance with the webmaster\'s guidelines. This is why we apply effective on-page strategies to ensure that your content is well-optimized and rank-worthy. Whether your website already has content or you need new content to publish on it, we make sure that your content is unique, readable, keyword-focused, and crawl-friendly.'}
        title4={'Effective Off-page Strategies'}
        para4={'We know that the search engine wants your website to be credible and reputable. This is why we focus on link building and other off-page strategies that can boost your website\'s authority and drive more traffic to it. We pay special attention to acquiring high-quality backlinks to your website which can significantly enhance its ranking strength. We just make sure that your website gains exposure with a credible image.'}
        title5={'Complete Technical SEO'}
        para5={'We understand that search engine crawlers require no more than a website which is easy to crawl, assess, and index. This is why we place a great deal of emphasis on the technical aspects of your site in order to ensure that it is crawlable and indexable. We simply make sure that each page on your website is easy to navigate and load. Indeed, we leave no room for any issues that can hold back your website from ranking.'}
        title6={'Full-scale E-commerce SEO'}
        para6={'We plan and execute high-performance optimization strategies that can simplify your customer\'s journey and boost the ranking of your e-commerce store. From creating well-optimized content for your products to ensuring that your website is easy to explore and crawl, we do everything that\'s required to make it SEO-friendly. We not only audit and fix your site errors, but take extra steps to help you generate leads as well.'} />
      <ClientReviews />
      <SoftwareOtherServices title={'SEARCH ENGINE OPTIMIZATION SERVICES'}
        title1={'Complete SEO Consultancy'}
        title2={'SEO Strategy Planning'}
        title3={'Website SEO Management'}
        array1={['Niche Research', 'Market Trends', 'SEO Audits', 'Growth Opportunities']}
        array2={['Audience Requirnments', 'Audit Reports', 'Keyword Research', 'Content Cluster']}
        array3={['Content Optimization', 'Link Building', 'Speed Boosting', 'Ranking Progress']}
      />
      <PartnerWith />
      <TechStack />
      <ClientsPartners />
      <GetConnectedSection />
    </React.Fragment>
  )
}
