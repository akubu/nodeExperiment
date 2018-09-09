const express = require('express');
const hbs = require('hbs');

const app = express();

hbs.registerPartials(__dirname+'/views/partials');
hbs.registerHelper('getCurrentYear',()=>{
    return new Date().getFullYear();
})
app.set('view_engine','hbs');
app.use(express.static(__dirname+'/public'));

app.use((req,res,next) => {
    var now = new Date().toString();
    console.log(`${now} : ${req.method} : ${req.url}`);
    next();
});

app.use((req,res,next) => {
    res.render('maintenance.hbs');
})

app.get('/',(req,res)=>{
    res.render('home.hbs', {
        Title: 'about page',
        // year: new Date().getFullYear(),
        welcome: 'Hey babe!'
        }
    );
});
app.get('/about',(req,res)=>{
    res.render('about.hbs', {
            Title: 'about page',
            // year: new Date().getFullYear()
        }
    );
});


app.listen(3000);