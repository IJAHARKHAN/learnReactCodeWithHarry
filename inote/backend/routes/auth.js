// const express = require("express");
// const router = express.Router();
// const User = require('../models/User')

// router.get("/", (req, res) => {

//   console.log(req.body)
 

// const user = User(req.body)
// user.save()
// res.send(req.body)
   

 
// })

// module.exports = router

const express = require("express");
const router = express.Router();
const User = require('../models/User');

// ✅ POST request for creating user
router.post("/", async (req, res) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save(); // ✅ await for saving
    res.json(savedUser);
    console.log(savedUser)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;

