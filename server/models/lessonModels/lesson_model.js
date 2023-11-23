import mongoose from "mongoose";

const {Schema} = mongoose;

const lessonModel = new Schema({
    id: { type: Number, required: true },
    title: { type: String, required: true },
    body: { type: String, required: true },
    imgurl: { type: String, default: '' },
});


export default mongoose.model('Lesson' , lessonModel);


