// Create web server

const express = require("express");
const app = express();
const port = 8080;

// Importing data from the data.js file
const { comments } = require("./data");

// Importing the commentsRouter
const commentsRouter = require("./commentsRouter");

// Importing the usersRouter
const usersRouter = require("./usersRouter");

// Importing the postsRouter
const postsRouter = require("./postsRouter");

// Importing the likesRouter
const likesRouter = require("./likesRouter");

// Importing the trendingRouter
const trendingRouter = require("./trendingRouter");

// Importing the searchRouter
const searchRouter = require("./searchRouter");

// Importing the profileRouter
const profileRouter = require("./profileRouter");

// Importing the cors package
const cors = require("cors");

// Importing the body-parser package
const bodyParser = require("body-parser");

// Importing the helmet package
const helmet = require("helmet");

// Importing the morgan package
const morgan = require("morgan");

// Using the body-parser package
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Using the cors package
app.use(cors());

// Using the helmet package
app.use(helmet());

// Using the morgan package
app.use(morgan("tiny"));

// Using the commentsRouter
app.use("/comments", commentsRouter);

// Using the usersRouter
app.use("/users", usersRouter);

// Using the postsRouter
app.use("/posts", postsRouter);

// Using the likesRouter
app.use("/likes", likesRouter);

// Using the trendingRouter
app.use("/trending", trendingRouter);

// Using the searchRouter
app.use("/search", searchRouter);

// Using the profileRouter
app.use("/profile", profileRouter);

// Listening to the port
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});