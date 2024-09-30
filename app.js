const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
// const Blog = require('./models/blog');
const blogRoutes = require('./routes/blogRoutes');

// express app
const app = express();

// connect to mogodb
const dbURI="mongodb+srv://ruthvikmt:royalaccount001@cluster0.gl372.mongodb.net/nodejs?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(dbURI)
  .then((result) => {
    console.log('Connected to MongoDB!');
    app.listen(3000);
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
    // You can also handle the error by exiting the application or retrying the connection
  });



// register view engine
app.set('view engine','ejs');

// middleware and static files
app.use(express.static('public'));
app.use(express.urlencoded({extended : true}));
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});


// mongoose & mongo tests
// app.get('/add-blog', (req, res) => {
//   const blog = new Blog({
//     title: 'new blog 2',
//     snippet: 'about my new blog',
//     body: 'more about my new blog'
//   });

//   blog.save()
//   .then(result => {
//     res.send(result);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// });

// app.get('/all-blogs', (req, res) => {
//   Blog.find()
//     .then(result => {
//       res.send(result);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// });

// app.get('/single-blog', (req, res) => {
//   Blog.findById('66f05970755f6cc4db8743d4')
//     .then(result => {
//       res.send(result);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// });

// routes
app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// blog routes
app.use('/blogs', blogRoutes);

// 404 page
app.use((req,res)=>{
    res.status(404).render('404',{title : '404'});
});