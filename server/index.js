import { app } from './app.js';

/********import connection file******************** */
import connect from './database/connection.js';

app.listen(process.env.PORT,()=>{
    console.log(`Server is connected on port ${process.env.PORT}`);
})

connect().then(() =>{
    try{
         console.log("Database connected Successfully");
    }catch(error){
           console.log("Database Disconnected");
           console.log(error);
    }
 });

