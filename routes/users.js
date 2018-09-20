const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('/users route');
})

/* GET new user form */
router.get('/new', function(req, res, next) {
  res.send('/users/new is working');
});

/* POST create new user route  */
router.post('/', function(req, res, next) {
  res.send('/users post route to create new user is working');
});

/* GET list individual user  */
router.get('/:id', function(req, res, next) {
  const id = req.params.id
  res.send(`/users post route to create new user is working with id of 
  ${id}`);
});

/* GET edit individual user form  */
router.get('/:id/edit', function(req, res, next) {
  const id = req.params.id
  res.send(`/users edit form page is working with id of 
  ${id}`);
});

/* PUT edit individual user  */
router.put('/:id', function(req, res, next) {
  const id = req.params.id
  res.send(`/users edit route to edit user is working with id of 
  ${id}`);
});

/* DELETE delete individual user  */
router.delete('/:id', function(req, res, next) {
  const id = req.params.id
  res.send(`/users delete route to delete user is working with id of 
  ${id}`);
});

/* 

delete - delete a user
*/


module.exports = router;
