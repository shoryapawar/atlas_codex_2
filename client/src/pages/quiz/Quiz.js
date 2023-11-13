import React, { useEffect, useState } from 'react'
import Question from './Question';

import { MoveNextQuestion ,MovePrevQuestion  } from './Hooks/FetchQuestion';
import { PushAnswer } from './Hooks/setResult';

/*******************redux store import********** */
import {useSelector,useDispatch } from 'react-redux';

import {Navigate} from 'react-router-dom';



export default function Quiz() {

  const [check , setChecked] = useState(undefined)

  const result = useSelector(state =>state.result.result);
  const {queue , trace} = useSelector(state =>state.questions);

  const dispatch = useDispatch();

  

  //**********************next button evenet handler******************************* */
  function onNext(){
    

    if(trace < queue.length){

      /**************Update the trace value by one using move next action *************** */
       dispatch(MoveNextQuestion());
        /********insert a new result in tthe array************************ */
       if(result.length <= trace){
        dispatch(PushAnswer(check));
       }
       
    }
    
    /**************Reset  the value of the checked variable  ****************** */

    setChecked(undefined)
  }

   //**********************prev button evenet handler******************************* */
  function onPrev() {
    

     if(trace > 0){

       /**************Update the trace value by one using move prev action *************** */
          dispatch(MovePrevQuestion());
     }

     
  }

  function onChecked(check){
    console.log(check);
    setChecked(check);
  }

  /**************************** finished exam after the last question************************************************* */
       if(result.length && result.length >= queue.length){
        return <Navigate to  = {'/main/result'} replace = {true}></Navigate>
       }

  return (
    <div className='container'>
        <h1 className='title text-light'>Quiz</h1>

        {/**************display Question*******************/}
           <Question onChecked = {onChecked}/>
         <div className='grid'> 
         { trace > 0 ? <button className='btn prev' onClick={onPrev}>Previous</button> : <div></div>}
           <button className='btn next' onClick={onNext}>Next</button>

         </div>
    </div>
  )
}









  

