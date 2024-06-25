import React, { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import review1 from '../Images/review1.png'
import review2 from '../Images/review2.png'
import review3 from '../Images/review3.png'
import review4 from '../Images/review4.png'
import review5 from '../Images/review5.png'
import review6 from '../Images/review6.jpg'
import review7 from '../Images/review7.jpg'
import review8 from '../Images/review8.png'
import review9 from '../Images/review9.jpg'
import review10 from '../Images/review10.jpg'
import review11 from '../Images/review11.png'
import ico_1 from '../Images/ico-01.png'
import ico_2 from '../Images/ico-02.png'
import ico_3 from '../Images/ico-03.png'

export const ClientReviews = () => {

  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, []);

  return (
    <div className='jmVVPNMc'>
      <div className='E70xSexB'>
        <div className="ONnG8QyQ ">
          <h2>CLIENT REVIEWS</h2>
          <p>Software Pro clients are always excited about the state of the art work and tremendous customer support given to them.</p>
        </div>
        <motion.div className="RVOBVZrf" ref={carousel} style={{ overflow: 'hidden' }} whileHover={{ cursor: "grab" }} whileTap={{ cursor: "grabbing" }}>
          <motion.div className="RVOBVZrf" drag='x' draggable='true' dragConstraints={{ right: 0, left: -width }}>
            <Review image={review1} name={'Jason Galli'}
              desc={'I worked with the company on multiple projects and continue to come back to them. They are professional, personable and deliver a great project. They work well with my project feedback, often times able to read between the lines of what I am saying, and are very timely with their turnaround times. I will continue to work with them going forward.'} />
            <Review image={review2} name={'Chandra Keyser'}
              desc={'Excellent communication, follow thru and very dedicated! Complete ease working with Hamid and his team. All are organized and very efficient with their processes.'} />
            <Review image={review3} name={'Jordan Hawkeys'}
              desc={'I needed assistance in integrating a form to collect additional customer info after checkout on Shopify. Thanks for the team\'s help, does what is needed now!'} />
            <Review image={review4} name={'Ryan Donnelly'}
              desc={'Amazing company to work with. They were extremely knowledgeable and did an amazing job on our website design and conversion to the Shopify platform. They were very patient with us and were very fair in price. Very very happy with the outcome!'} />
            <Review image={review5} name={'Katherine Kitfeild'}
              desc={'Hamid and his team were great to work with. Highly recommend. We successfully completed development of our custom Shopify templates. He and his team were professional and easy to communicate with throughout the entire duration of the project. It was an enjoyable experience to work with the team and I would highly recommend them for development.'} />
            <Review image={review6} name={'Keem Schultz-Fares'}
              desc={'The team\'s expertise and accuracy set them apart from competitors. They are highly professional and responsive, qualities that contribute to a productive partnership.'} />
            <Review image={review7} name={'Christan Nelson'}
              desc={'The team emphasizes communication to provide guidance and achieve optimal outcomes. They\'ve been easy to work with and prompt in managing all site-related responsibilities.'} />
            <Review image={review8} name={'Timothy Luong'}
              desc={'The company kept in constant contact throughout the process, providing regular updates and responding quickly to questions. Their effective communication style and personable team made for an effortless collaboration.'} />
            <Review image={review9} name={'Dylan DeSantis'}
              desc={'They delivered a high-quality and efficient experience through effective communication. The team leverages their professional expertise to create a successful engagement.'} />
            <Review image={review10} name={'Robert Roque'}
              desc={'Even though the product is still not accessible to the public, each department of the team executed well-designed landing pages in a quick and painless process. Their team responded promptly to messages and worked efficiently throughout the project.'} />
            <Review image={review11} name={'Vickie Wheeler'}
              desc={'The team\'s communication skills are very good, and I felt I was always \'in the loop\' when it came to updates and my requests. I would highly recommend them!'} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}


const Review = (props) => {
  return (
    <motion.div className="vJ24x8fR" transition={{ duration: 0.3 }}>
      <div className="PTZn5v1b ">
        <img src={props.image} alt="img" />
      </div>
      <div className="JUr6hqXO ">
        <h2>{props.name}</h2>
        <p>{props.desc}</p>
      </div>
      <div className="oEP2mn4k ">
        <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" stroke-literlimit="2" height={24} width={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z" fillRule="nonzero" /></svg>
        <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" stroke-literlimit="2" height={24} width={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z" fillRule="nonzero" /></svg>
        <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" stroke-literlimit="2" height={24} width={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z" fillRule="nonzero" /></svg>
        <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" stroke-literlimit="2" height={24} width={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z" fillRule="nonzero" /></svg>
        <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" stroke-literlimit="2" height={24} width={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z" fillRule="nonzero" /></svg>
      </div>
    </motion.div>
  )
}


export const SoftwareOtherServices = (props) => {
  return (
    <div className='GE1gTrmZ'>
      <div className="q0hdvUH0 ">
        <h2>{props.title}</h2>
        <div className="gvr4R7sI">
          <div className="L5A2AUV3 ">
            <div className="zYAMd8i3">
              <img src={ico_1} alt="img" />
              <h2>{props.title1}</h2>
            </div>
            {props.array1.map((text, i) => {
              return (
                <p key={i}>{text}</p>
              )
            })}
          </div>
          <div className="L5A2AUV3 ">
            <div className="zYAMd8i3">
              <img src={ico_2} alt="img" />
              <h2>{props.title2}</h2>
            </div>
            {props.array2.map((text, i) => {
              return (
                <p key={i}>{text}</p>
              )
            })}
          </div>
          <div className="L5A2AUV3 ">
            <div className="zYAMd8i3">
              <img src={ico_3} alt="img" />
              <h2>{props.title3}</h2>
            </div>
            {props.array3.map((text, i) => {
              return (
                <p key={i}>{text}</p>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

