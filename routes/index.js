/*
    File name: index.ejs (defining routes)
    Student name: Chandni Patel
    Student ID: 300990555
    Date: Febuary 16, 2019
*/
let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/about', function(req, res, next) {
  res.render('../views/about/index', { title: 'About' });
});

router.get('/contact', function(req, res, next) {
  res.render('../views/contact/index', { title: 'Contact' });
});

router.get('/givedetail', function(req, res, next) {
  res.render('../views/contact/add', { title: 'Fill your detail here' });
});

router.get('/projects', function(req, res, next) {
  res.render('../views/projects/index', { title: 'Projects' });
});

router.get('/services', function(req, res, next) {
  res.render('../views/services/index', { title: 'Services' });
});

module.exports = router;
