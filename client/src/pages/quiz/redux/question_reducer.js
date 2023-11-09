import { createSlice } from "@reduxjs/toolkit";

/**********************Creating reducer with initial value*********************** */
export const questionReducer = createSlice({

    name : 'questions',          /****provides name to the reducer */
    initialState :{
        queue:[],  /***************stores question**** */
        answer:[],  /***************stores answer**** */
        trace:0    /**********stores the index of question */
    },
    reducers : {
        startExamAction : (state, action) => {
            let { question, answers} = action.payload
            return {
                ...state,
                queue : question,
                answers
            }
        }
    },
})

/*********************dispatching actions ********************* */
export const { startExamAction } = questionReducer.actions;

export default questionReducer.reducer;

