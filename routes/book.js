const express = require('express');
const router = express.Router();

// @route    GET api/book
// @desc     Get all room to book
//@access    Private Public  

router.get('/' (req, res) =>{
   res.send('Get all room')
})

// @route    POST api/book
// @desc     book a room
//@access    Private Public  

router.post('/' (req, res) =>{
   res.send('Book a room')
})

// @route    PUT api/book/
// @desc     update 
//@access    Private   

router.post('/' (req, res) =>{
   res.send('Make an update book a room')
})

module.exports = router;