
import celestialData from '../database/lesson_data.js';
import Lesson from "../models/lessonModels/lesson_model.js";

/*************** get all bodies ********************** */
export const getAllCelestial = async(req, res) => {
    try{
        const q = await  Lesson.find();
        res.json(q);
      }catch(error){
         res.json({error})
      }
}
/****************** Insert all bodies **************** */
export const addCelestial = async(req , res) => {
    try{
        Lesson.insertMany( celestialData).then(function(err , data ){ 
            res.json({
                msg : "Data Saved Successfully...!"
            })
        }) 
     }catch(error){
         res.json({error}) 
     }
}

export const deleteCelestial = async(req ,res) =>{
    try{
       await Lesson.deleteMany();
       res.json({
        msg : "Data deleted Successfully...!"
    })

    }catch(error){
        res.json({error}) 
    }
}

 
