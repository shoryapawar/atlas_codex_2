import {Router} from 'express';

const router = Router();

/****** Controllers ********** */
import  {getQuestions , insertQuestion , deleteQuestions, getResult, insertResult, deleteResult}  from '../controllers/quiz_controller.js';

/********** Questions Routes API *********************** */



router.route('/questions')
            .get(getQuestions)     /*GET Request */
            .post(insertQuestion)  /**POST Request */
            .delete(deleteQuestions) /** DELETE Request */

router.route('/results')
            .get(getResult)     /*GET Request */
            .post(insertResult)  /**POST Request */
            .delete(deleteResult) /** DELETE Request */ 


export default router;