// // register view engine
// app.set('view engine', 'ejs');
// // app.set('views', 'myviews');

// app.get('/', (req, res) => {
//   const blogs = [
//     {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
//     {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
//     {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
//   ];
//   res.render('index', { title: 'Home', blogs });
// });

// // blog routes
// app.get('/blogs/create', (req, res) => {
//     res.render('create', { title: 'Create a new blog' });
//   });
  
//   app.get('/blogs', (req, res) => {
//     Blog.find().sort({ createdAt: -1 })
//       .then(result => {
//         res.render('index', { blogs: result, title: 'All blogs' });
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   });
  
//   app.post('/blogs', (req, res) => {
//     // console.log(req.body);
//     const blog = new Blog(req.body);
  
//     blog.save()
//       .then(result => {
//         res.redirect('/blogs');
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   });
  
//   app.get('/blogs/:id', (req, res) => {
//     const id = req.params.id;
//     Blog.findById(id)
//       .then(result => {
//         res.render('details', { blog: result, title: 'Blog Details' });
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   });
  
//   app.delete('/blogs/:id', (req, res) => {
//     const id = req.params.id;
    
//     Blog.findByIdAndDelete(id)
//       .then(result => {
//         res.json({ redirect: '/blogs' });
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   });
  
const express = require('express');
const blogController = require('../controllers/blogController');

const router = express.Router();

router.get('/create', blogController.blog_create_get);
router.get('/', blogController.blog_index);
router.post('/', blogController.blog_create_post);
router.get('/:id', blogController.blog_details);
router.delete('/:id', blogController.blog_delete);

module.exports = router;