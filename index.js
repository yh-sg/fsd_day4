//load up lib
const express = require('express')
const hbs = require('express-handlebars')

const PORT = parseInt(process.argv[2])||parseInt(process.env.PORT)||3000

//create an instance of express
const app = express(); 

//configure handlebars
app.engine('hbs',hbs({defaultLayout: 'default.hbs'}))
app.set('view engine', 'hbs')
app.set('views', __dirname + '/views')

app.get('/',(req,res,next)=>{
    res.status(200)
    res.type('text/html')
    res.render('index')
})

app.use((req,res,next)=>{
    res.redirect('/')
})

//start the server
app.listen(PORT,()=>{
    console.log(`app is on port ${PORT} at ${new Date()}`);
})