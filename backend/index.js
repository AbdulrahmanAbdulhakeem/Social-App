require("dotenv").config();
require("express-async-errors");
const colors = require("colors");
const multer = require("multer")
const cors = require("cors");
const morgan = require("morgan")
const express = require("express");
const app = express();
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const commentRoutes = require("./routes/commentRoutes");
const notFoundMiddleware = require("./middleware/not-found");
const authMiddleware = require("./middleware/authMiddleware");
const bodyParser = require('body-parser');

connectDB();

const storage = multer.diskStorage({
  destination:(req,file,cb) => {
    cb(null,'images')
  },
  filename:(req,file,cb) => {
    cb(null,new Date().toISOString() + '-' + file.originalname)
  }
})

const fileFilter = (req,file,cb) => {
  if(
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg'
  ){
    cb(null , true)
  }else{
    cb(null,false)
  }
}

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'))
app.use(cors());
app.use(multer({storage:storage, fileFilter:fileFilter}).single('photo'))
app.use(express.static('images'))

//Routes
app.get("/", (req, res) => {
  res.send("Welcome To The Beginning");
});

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/post", authMiddleware, postRoutes);
app.use("/api/v1/post", authMiddleware, commentRoutes);

app.use(notFoundMiddleware);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Listening On Port ${port}`));
