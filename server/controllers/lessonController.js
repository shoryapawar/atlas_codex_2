
import celestialData from '../database/lesson_data.js';
import Lesson from "../models/lessonModels/lesson_model.js";

/*************** get all bodies ********************** */
export const getAllCelestial = async(req, res) => {
    try{
      res.json("got data")
    }catch(error){
       res.json({error})
    }
}
/****************** Insert all bodies **************** */
export const addCelestial = async(req , res) => {
    try{
        res.json("inserted data")
    }catch(error){
        res.json({error}) 
    }
}
/*******************Delete All questions *************** */

export const deleteCelestial = async(req , res) =>{
    try{
        res.json("deleted data")
    }catch(error){
       res.json({error}) 
    }
}

/**const celestialController = {
  getAllCelestial: (req, res) => {
    res.json(celestialData);
  },

  addCelestial: (req, res) => {
    // Logic to add a new celestial body
    // You might want to use a database (MongoDB) for this
    res.json({ message: 'Add Celestial functionality not implemented yet' });
  },

  deleteCelestial: (req, res) => {
    const celestialId = req.params.id;
    // Logic to delete a celestial body by ID
    // You might want to use a database (MongoDB) for this
    res.json({ message: 'Delete Celestial functionality not implemented yet' });
  },
};

export default celestialController; */
 
