const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
// app.get("/",(req,res)=>{
//  return {"messsage":"Server is up and running"}
// }) // JSON parser

// Connect Database
connectDB();

// Routes
app.use("/api/users", require("./routes/login"));
app.use("/api/users", require("./routes/reg"));
app.use("/api/transactions", require("./routes/transactionRoutes"));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));
