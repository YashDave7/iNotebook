const express = require('express');
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchUser = require('../middleware/fetchUser');

JWT_SECRET = 'Harryisagoodboy'

const router = express.Router();

// ROUTE 1: Create a User using: POST "/api/auth/createuser". NO login required.
router.post('/createuser', [
    body('name', 'Enter a value Name').isLength({ min: 2 }),
    body('email', 'Enter a value Email').isEmail(),
    body('password', 'Enter a 8 character password').isLength({ min: 8 }),
], async (req, res) => {
    // If there are errors, return the bad request and the errors.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // Check whether user with this Email already exists.
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "User with this Email already exist" })
        }

        // Hashing Password.
        const salt = await bcrypt.genSalt();
        securePassword = await bcrypt.hash(req.body.password, salt);
        // creating a new user.
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: securePassword
        })

        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        console.log(authToken);
        res.json({ authToken });
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Some Error Occured");
    }
})

// ROUTE 2: Authenticate a User using : POST "api/auth/login". NO login required.
router.post('/login', [
    body('email', 'Enter a value Email').isEmail(),
    body('password', 'Enter a value Email').exists()
], async (req, res) => {
    // If there are errors, return the bad request and the errors.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "Please Login with correct credentials" });
        }

        const comparePassword = await bcrypt.compare(password, user.password);
        if (!comparePassword) {
            return res.status(400).json({ error: "Pleas Login with correct credentials" });
        }

        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        res.json({ authToken });
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Some Error Occured");
    }
})

// ROUTE 3: Get logged in User's Detail using : POST "api/auth/getuser". Login required.
router.post('/getuser', fetchUser, async (req, res) => {
    try {
        userid = req.user.id;
        const user = await User.findById(userid).select("-password");
        res.send(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Some Error Occured");

    }
})

module.exports = router;