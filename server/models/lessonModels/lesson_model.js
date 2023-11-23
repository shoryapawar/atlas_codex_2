import mongoose from "mongoose";

const {Schema} = mongoose;

const lessonModel = new Schema({
    id: String,
    Header: String,
    url: String,
    desc: {
      title: String,
      body: String,
    },
    sub1: {
      title: String,
      body: String,
      imgurl: String,
    },
    sub2: {
      title: String,
      body: String,
      imgurl: String,
    },
    sub3: {
      title: String,
      body: String,
      imgurl: String,
    },
    sub4: {
      title: String,
      body: String,
      imgurl: String,
    },
    sub5: {
      title: String,
      body: String,
      imgurl: String,
    },
    sub6: {
      title: String,
      body: String,
      imgurl: String,
    },
    sub7: {
      title: String,
      body: String,
      imgurl: String,
    },
});


export default mongoose.model('Lesson' , lessonModel);


