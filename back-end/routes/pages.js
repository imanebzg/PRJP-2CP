const express = require('express'); 
const router = express.Router();

// HOMEPAGE
router.get("/" , (req, res) => {
    res.render("homepage"); 
});

// REGISTER PAGE
router.get("/register", (req, res) => {
    res.render("registerpage");
}) 

// LOGIN PAGE
router.get('/login', (req, res) => {
    res.render("loginpage"); 
})

// PROFILE PAGE
router.get("/user" , (req, res) => {
    res.render("profilepage"); 
});

router.get("/calc" , (req, res) => {
    res.render("calcpage"); 
});





module.exports = router;