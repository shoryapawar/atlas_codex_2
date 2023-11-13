import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";



export function attempts_Number(result){
      return result.filter(r => r !== undefined).length;
}

export function earnPoints_Number(result , answers ,point){
   return result.map((element , i) => answers[i] ===element ).filter(i=>i).map(i => point).reduce((prev , curr) => prev + curr , 0); 
   /*****filter(i=>i) provides only the true value of the questions ******* */
   /******map(i => 10 ) return 10 points for each correct value******* */
   /*****reduce() adds up all the true value to give the total sum i.e. add all the 10s******** */
}

export function flagResult(totalPoints , earnPoints){
     return (totalPoints *50/100) < earnPoints;/***************if marks are less than 50 % u r fail */
}

/***********************  check user authentication   ********************************************* */

export function CheckUserExist({children}){
  const auth  = useSelector(state => state.result.userId);
  return auth ? children : <Navigate to = {'/main'} replace = {true}></Navigate>
}