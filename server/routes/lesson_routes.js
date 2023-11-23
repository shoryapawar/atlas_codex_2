
import {Router} from 'express';
const router = Router();
import {getAllCelestial, addCelestial , deleteCelestial} from '../controllers/lessonController.js';



// Routes
router.route('/celestial')
            .get(getAllCelestial)     /*GET Request */
            .post(addCelestial)  /**POST Request */
            .delete(deleteCelestial)


export default router;