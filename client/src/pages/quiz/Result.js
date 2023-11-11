import React from 'react'
import  '../.././styles/result.css';
import "../../styles/default.css";
import {Link} from 'react-router-dom';
import  ResultTable from './ResultTable';
export default function Result() {

   function onRestart(){
      console.log('Restarted');
   }
  return (
    <div className='container'>
        <h1 className='title text-light'>Quiz</h1>
        <div className='result flex-center'>
          <div className='flex'>
             <span>Username</span>
             <span className='bold'> Daily Tution</span>
          </div>

          <div className='flex'>
             <span>Total Quiz Points:</span>
             <span className='bold'> 50</span>
          </div>

          <div className='flex'>
             <span>Total Question:</span>
             <span className='bold'> 05</span>
          </div>

          <div className='flex'>
             <span>Total Attempts:</span>
             <span className='bold'> 03</span>
          </div>

          <div className='flex'>
             <span>Total Earn Points:</span>
             <span className='bold'> 30</span>
          </div>

          <div className='flex'>
             <span>Quiz Result</span>
             <span className='bold'> Passed</span>
          </div>
        </div>
        <div className='start'>
         <Link className='btn' to = {'/main '} onClick={onRestart}>Restart</Link>
        </div>

        <div className='container'>
      
    { /**********************  Result Table**********************************/}
          <ResultTable></ResultTable>
        </div>

    </div>
  )
}