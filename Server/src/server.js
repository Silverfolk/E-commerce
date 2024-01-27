const express = require("express");
const connectDB=require('./db/connect');//fetching the function to make connection btw application and database 
require("dotenv").config();
const app = express();
var cors = require("cors");

const mainrouter=require("./routes/mainrouter");

app.use(cors());
app.use(express.json());
// after this i'll make a central file for routing 
app.use("/api", mainrouter);

//Port and Connect to DB
const port = process.env.PORT || 5000;
const start = async () => {
  try {
  
    connectDB();
    app.listen(port, () => {
         console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
      console.log("error =>", error);
  }
};
start();