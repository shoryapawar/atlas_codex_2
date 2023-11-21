
import Questions from "../models/quizModels/questionSchema.js";
import Results from "../models/quizModels/resultSchema.js";
import questions , {answers} from "../database/data.js"


/*************** get all questions ********************** */
export const getQuestions = async(req, res) => {
    try{
      const q = await  Questions.find();
      res.json(q);
    }catch(error){
       res.json({error})
    }
}

/****************** Insert all questions **************** */
export const insertQuestion = async(req , res) => {
    try{
       Questions.insertMany({ questions ,  answers}).then(function(err , data ){ 
        res.json({
            msg : "Data Saved Successfully...!"
        })
       }) 
    }catch(error){
        res.json({error}) 
    }
}

/*******************Delete All questions *************** */

export const deleteQuestions = async(req , res) =>{
     try{
         await Questions.deleteMany();
         res.json({
            msg : "Data Deleted Successfully...!"
         })
     }catch(error){
        res.json({error}) 
     }
}

/*************get all result************************** */
export const getResult = async(req, res) => {
    try{
      const r = await Results.find();
      res.json(r);

    }catch(error){
        res.json({error});
    }
}

/****************** Insert all Result **************** */
export const insertResult = async(req , res) => {
    try{
         const {username , result , attempts , points , achieved} = req.body;

         if(!username && !result) throw new Error('Data Not Provided...!');

         Results.create( {username , result , attempts , points , achieved} ).then(function(err , data ){
               res.json({msg:"Result Saved Successfully...!"});
         })
    }catch(error){
       res.json({error}); 
    }
}

/*******************Delete All Result *************** */

export const deleteResult = async(req , res) =>{
   
    try{
       await Results.deleteMany();
       res.json({msg:"Result Deleted Successfully...!"})
    }catch(error){
        res.json({error});
    }
}