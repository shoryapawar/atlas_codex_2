
/*************** get all questions ********************** */
export const getQuestions = async(req, res) => {
    res.json("questions api get request");
}

/****************** Insert all questions **************** */
export const insertQuestion = async(req , res) => {
    res.json("questions api post request");
}

/*******************Delete All questions *************** */

export const deleteQuestions = async(req , res) =>{
    res.json("questions api delete request");
}

/*************get all result************************** */
export const getResult = async(req, res) => {
    res.json("result api get request");
}

/****************** Insert all Result **************** */
export const insertResult = async(req , res) => {
    res.json("Result api post request");
}

/*******************Delete All Result *************** */

export const deleteResult = async(req , res) =>{
    res.json("Result api delete request");
}