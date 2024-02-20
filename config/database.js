const mongoose=require("mongoose");

require("dotenv").config();

const dbConnect= () => {
    mongoose.connect(process.env.DATABASE_URL,{

    })
    .then(()=> 
    console.log(" DB Success"))
    .catch((error)=>{
        console.log("Error");
        console.log(error.message);
        process.exit(1);
    });
}
module.exports=dbConnect;