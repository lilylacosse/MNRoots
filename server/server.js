const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

const sessionMiddleware = require("./modules/session-middleware");
const passport = require("./strategies/user.strategy");

// Route includes
const userRouter = require("./routes/user.router");
const trefleRouter = require("./routes/trefle.router");
const mnPlantRouter = require("./routes/mnPlant.router");
const myGardenRouter = require("./routes/myGarden.router");
const myNotesRouter = require("./routes/myNotes.router");
// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use("/api/user", userRouter);
app.use("/api/trefle", trefleRouter);
app.use("/api/mnplants", mnPlantRouter);
app.use("/api/mygarden", myGardenRouter);
app.use("/api/mynotes", myNotesRouter);

// Serve static files
app.use(express.static("build"));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
