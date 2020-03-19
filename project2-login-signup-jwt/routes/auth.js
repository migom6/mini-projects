const router = require("express").Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');


router.post("/register", async (req, res) => {

  // finding if already exist
  const userQuery = User.find({ email: req.body.email });
  try {
    const userData = await userQuery.exec();
    if (userData.length != 0) {
      return res.status(409).json({ error: "Email already registered" });

    }
  }
  catch (error) {
    return res.status(400).json({ error });
  }

  // registering a new user

  // hash using bcrypt
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(req.body.password, salt);

  const newUser = new User({
    name: req.body.name,
    password: hashedPassword,
    email: req.body.email
  });

  try {
    user = await newUser.save();
    // user successfully registered
    return res.status(200).json({ _id: user['_id'] });
  }
  catch (error) {
    return res.status(400).json({ error });
  }
});


router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) { // user doesnt exists
      res.status(404).json({ error: 'Email or password is incorrect' })
    }
    else {
      if (bcrypt.compareSync(password, user.password)) { // logged in 
        const token = jwt.sign({ user_id: user['_id'] }, require('../config').APP_SECRET);
        res.set("access-control-expose-headers", "auth-token").set("auth-token", token);
        return res.status(200).json({ _id: user['_id'] });
      }
      else { // wrong password
        return res.status(400).json({ error: "Email or password is incorrect" })
      }
    }
  }
  catch (error) {
    return res.status(400).json({ error });
  }

});

router.get('/details', require("../middlewares/verify"), async (req, res) => {
  try {
    const user = await User.findById(req.params.user_id);
    return res.status(200).json({ name: user.name, date: user.date })
  }
  catch (error) {
    console.log("yo")
    return res.redirect('http://localhost:8000/login');
  }

})

module.exports = router;