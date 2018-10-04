const express = require('express');
const router = express.Router();

const mongoose = require('mongoose')
const User = require('../models/userModel')

/* GET users listing. */
router.get('/', (req, res, next) => {
  User.find({}, (err, data) => {
    if (err) return console.log(err)
    res.json(data)
  })
})

/* GET new user form */
router.get('/new', function (req, res, next) {
  res.render('create', { title: "New User Form" });
});

/* POST create new user route  */
router.post('/', function (req, res, next) {
  console.log('from user.post route', req.body)
  User.create({ username: req.body.username, password: req.body.password })
  res.redirect('/users');
});

/* GET list individual user  */
router.get('/:id', function (req, res, next) {
  User.findById(req.params.id, (err, data) => {
    if (err) return console.log(err)
    res.json(data)
  })
});

/* GET edit individual user form  */
router.get('/:id/edit', function (req, res, next) {
  User.findById(req.params.id, (err, data) => {
    if (err) return console.log(err)
    res.render('edit', data)
  })
    ;
});

/* PUT edit individual user  */
router.put('/:id', function (req, res, next) {
  User.findOneAndUpdate({ _id: req.params.id },
    { username: req.body.username },
    { new: true },
    (err, data) => {
      if (err) return console.log(err)
      res.redirect('/users');
    })
});

/* DELETE delete individual user  */
router.delete('/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id, err => {
    if (err) return console.log(err)
    res.redirect('/users');
  })
});


module.exports = router;
