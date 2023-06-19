const express = require('express');
const User = require('../models/User');
const { body,validationResult } = require('express-validator');

const router = express.Router();

router.post('/', [
    body('name','Enter a value Name').isLength({ min: 2 }),
    body('email', 'Enter a value Email').isEmail(),
    body('password', 'Enter a 8 character password').isLength({ min: 8 }),
], (req, res) => {
    const errors  = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(200).json({ errors: errors.array() });
    }
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }).then(user => res.json(user))
    .catch(err => { console.log(err)
    res.json( {error: 'Please enter a unique Email'} ) });
})

module.exports = router;