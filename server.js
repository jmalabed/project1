// =============================
//         DEPENDENCIES
// =============================
const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const methodOverride = require('method-override')
mongoose.connect('mongodb://localhost:27017/resources',{useNewUrlParser: true});

const db = mongoose.connection
db.once('open',()=>{
  console.log('connected to mongo');
});


// =============================
//         MIDDLEWARE
// =============================
app.use(express.urlencoded({extended: true}))
app.use(methodOverride("_method"))
// =============================
//         ROUTING
// =============================
app.get('/index',(req,res)=>{
  res.send
})












// =============================
//           LISTEN

app.listen(port, ()=>{
  console.log("listening on port", port);
})
