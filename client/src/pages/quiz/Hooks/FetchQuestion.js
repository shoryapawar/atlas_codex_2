/*********fetch question hook to fetch api data to set values to store***********/

/***********************************making custom hooks *****************/

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { getServerData } from "../helper/helper.js";

/** redux actions */
import * as Action from "../redux/question_reducer";

/** fetch question hook to fetch api data and set value to store */
export const useFetchQuestion = () => {
  const dispatch = useDispatch();
  const [getData, setGetData] = useState({
    isLoading: false,
    apiData: [],
    serverError: null,
  });
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  useEffect(() => {
    setGetData((prev) => ({ ...prev, isLoading: true }));
   

    /** async function fetch backend data */
    (async () => {
      try {
        const [{ questions, answers }] = await getServerData(
          `${
            process.env.REACT_APP_SERVER_HOSTNAME || "http://localhost:4000"
          }/api/quiz/questions`,
          (data) => data
        );
        if (questions.length > 0) {
          const shuffledData = shuffleArrays(questions, answers);

          // Get the first 10 shuffled questions and answers
          const selectedData = shuffledData.slice(0, 10);

           const selectedQuestions = selectedData.map((q) => q.question);

          const selectedAnswers = selectedData.map((q) => q.answer); 
       
          //console.log(selectedQuestions);
          //console.log(selectedAnswers);
          setGetData((prev) => ({ ...prev, isLoading: false }));
          setGetData((prev) => ({
            ...prev,
            apiData: selectedQuestions,
            selectedAnswers,
          }));
          setSelectedAnswers(selectedAnswers);
          /** dispatch an action */
          dispatch(Action.startExamAction({ question: selectedQuestions, answers : selectedAnswers}));
        } else {
          throw new Error("No Question Available");
        }
      } catch (error) {
        setGetData((prev) => ({ ...prev, isLoading: false }));
        setGetData((prev) => ({ ...prev, serverError: error }));
      }
    })();
  }, [dispatch]);

  

  return [getData, setGetData , selectedAnswers];
};


/*************Move Action Dispatch Function **************** */

export const MoveNextQuestion = () => async (dispatch) => {
  try {
    dispatch(Action.moveNextAction()); /**********increase trace value by 1 */
  } catch (error) {
    console.log(error);
  }
};

/*************Prev Action Dispatch Function **************** */
export const MovePrevQuestion = () => async (dispatch) => {
  try {
    dispatch(
      Action.movePrevAction()
    ); /*******************decrease trace value by 1 */
  } catch (error) {
    console.log(error);
  }
};
// radnom functions
const shuffleArrays = (questions, answers) => {
  const shuffledData = questions.map((question, index) => ({
    question,
    answer: answers[index],
  }));
  for (let i = shuffledData.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledData[i], shuffledData[j]] = [shuffledData[j], shuffledData[i]];
  }
  return shuffledData;
};


