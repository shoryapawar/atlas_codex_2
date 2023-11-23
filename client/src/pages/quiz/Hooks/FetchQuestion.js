/*********fetch question hook to fetch api data to set values to store***********/

/***********************************making custom hooks *****************/

import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";

import { getServerData } from "../helper/helper.js";

/** redux actions */
import * as Action from '../redux/question_reducer'


/** fetch question hook to fetch api data and set value to store */
export const useFetchQuestion = () => {
    const dispatch = useDispatch();   
    const [getData, setGetData] = useState({ isLoading : false, apiData : [], serverError: null});

   
    useEffect(() => {
        setGetData(prev => ({...prev, isLoading : true}));

        /** async function fetch backend data */
        (async () => {
            try {

               
                const [ {questions , answers} ] =  await getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME || "http://localhost:4000" }/api/quiz/questions`, (data) => data); 
                if(questions.length > 0){
                    setGetData(prev => ({...prev, isLoading : false}));
                    setGetData(prev => ({...prev, apiData : questions , answers}));

                    /** dispatch an action */
                    dispatch(Action.startExamAction({question : questions , answers}))

                } else{
                    throw new Error("No Question Available");
                }
            } catch (error) {
                setGetData(prev => ({...prev, isLoading : false}));
                setGetData(prev => ({...prev, serverError : error}));
            }
        })();
    }, [dispatch]);

    return [getData, setGetData];
}

/*************Move Action Dispatch Function **************** */

export const MoveNextQuestion = () => async(dispatch)=> {
    try{
      dispatch(Action.moveNextAction());  /**********increase trace value by 1 */
    }catch(error){
        console.log(error);
    }
}

/*************Prev Action Dispatch Function **************** */
export const MovePrevQuestion = () => async(dispatch)=> {
    try{
      dispatch(Action.movePrevAction());  /*******************decrease trace value by 1 */
    }catch(error){
        console.log(error);
    }
}






 

                   

