const jwt = require('jsonwebtoken');
const User = require('../models/user');

module.exports = (req, res, next) => {
    const { auth_token } = req.headers;
    try {
        const { user_id } = jwt.verify(auth_token, require("../config").APP_SECRET);
        req.params.user_id = user_id;
        next();
    }
    catch (error) {
        return res.redirect('http://localhost:8000/login');

    }
}