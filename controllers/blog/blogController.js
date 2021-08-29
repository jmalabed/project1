const express = require('express')
const router = express.Router()
const Blog = require('../../models/blog.js')
//NEW
router.get('/new', (req, res)=> {
  res.render('blog/new.ejs')
})

//INDEX
router.get('/', (req,res) =>{
  Blog.find({}, (err, allBlogs)=> {
    res.render('blog/index.ejs', {blogs: allBlogs})
  })
})

//SHOW
router.get('/:id', (req, res) =>{
const id = req.params.id
  Blog.findById(id, (err, foundBlog)=>{
    if (err) {
      res.send(err);
    } else {
      res.render('blog/show.ejs', {blog:foundBlog, id:id})
    }
  })
})

//POST
router.post('/',(req,res)=>{
  Blog.create(req.body,(err,newBlog)=>{
    if (err) {
      res.send(err);
    } else {
      res.redirect('/blog')
    }
  })
})

//EDIT
router.get('/:id/edit', (req, res)=>{
const id = req.params.id
  Blog.findById(id, (err, foundBlog)=>{
    if(err){
      res.send(err)
    } else {
      res.render('blog/edit.ejs', {blog:foundBlog})
    }
  })
})


//DELETE
router.delete('/:id',(req,res)=>{
  id = req.params.id
  Blog.findByIdAndRemove(id, (err,removeBlog)=>{
    if (err) {
      res.send(err);
    } else {
      res.redirect('/blog')
    }
  })
})

//UPDATE ROUTE - LIKE
router.put('/:blogId/like',(req,res)=>{
  bId = req.params.blogId
  console.log('like');
  // console.log(req.body);
  req.body.likes++
  console.log(req.body.likes);
  Blog.findByIdAndUpdate(bId,req.body,(err,foundBlog)=>{
    // console.log(foundResource);
    // res.send('testing in progress')
    res.redirect('/blog')
  })
})

//PUT
router.put('/:id', (req, res)=>{
const id = req.params.id
const updatedBlog = req.body
console.log(updatedBlog)
Blog.findByIdAndUpdate(id, updatedBlog, (err, callback) => {
  res.redirect('/blog')
  })
})

module.exports = router
