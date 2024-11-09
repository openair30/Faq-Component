import React, { useCallback, useEffect, useState } from 'react'
import './App.css'

const FaqInfo = ({faq, index}) => {
  const [show, setShow] = useState(false);
  useEffect(() =>{
    if(index == 0){
      setShow(true);
    }
  }, [])
  const handleClick = useCallback(() => {
    setShow(show => !show);
  }, []);
  return (
    <div className='faq-box'>
      <div className='que' onClick={handleClick}>
        <button className= {show? 'arrow' : '' } >{'>'}</button>
        <div>
          <text>{faq.question}</text>
        </div>
      </div>
      <div className='ans'> 
        <text>
          {show ? faq.answer : null }
        </text>
      </div>
    </div>
  )
}

export default FaqInfo
