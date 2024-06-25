import React, { useState, useEffect } from 'react'

export const FAQs = ({ FaqArray }) => {
  return (
    <div className="fIAeBIsY ">
      <div className="wwGBan5b ">
        <h1>FAQ's</h1>
        <div className="k1qEM6R1 ">
          {FaqArray.map((item) => {
            return (<Faq id={item.id} question={item.question} answer={item.answer} />)
          })}
        </div>
      </div>
    </div>
  )
}


const Faq = ({ id, question, answer }) => {

  const [show, setShow] = useState(false);
  useEffect(() => {
    const svg = document.querySelectorAll('.omr2O7ot button svg');
    if (show === true) {
      svg[id].style.transform = 'rotate(180deg)';
    } else {
      svg[id].style.transform = 'rotate(0deg)';
    }
  }, [show])

  return (
    <div className="ZOfiIiEO ">
      <div className="omr2O7ot ">
        <h2>{question}</h2>
        <button onClick={() => { setShow(!show) }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
          </svg>
        </button>
      </div>
      {show && (
        <p>{answer}</p>
      )}
    </div>
  )
}