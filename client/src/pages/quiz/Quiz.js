import React, { useEffect } from 'react'
import Question from './Question';

/*******************redux store import********** */
import {useSelector } from 'react-redux';




export default function Quiz() {

  const {state} = useSelector(state =>state)

  useEffect(() =>{
    console.log(state);
  })

  //**********************next button evenet handler******************************* */
  function onNext(){
    console.log('on prev click');
  }

   //**********************prev button evenet handler******************************* */
  function onPrev() {
     console.log('on next click');
  }
  return (
    <div className='container'>
        <h1 className='title text-light'>Quiz</h1>

        {/**************display Question*******************/}
           <Question/>
         <div className='grid'> 
           <button className='btn prev' onClick={onPrev}>Previous</button>
           <button className='btn next' onClick={onNext}>Next</button>

         </div>
    </div>
  )
}
