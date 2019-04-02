var express=require('express');
var mongoose=require('mongoose');

const route=require('./router/router');
var cors=require('cors');

//router.get();
//router.post();
//router.delete();

//to connect to database ue methode mongose.connect()
mongoose.connect('mongodb://localhost:27017/mycgdb',{ useNewUrlParser: true })
mongoose.connection.on('connected',()=>
{
    console.log('mongodb connected on port number 27017')
});
var app=express();
app.get('/', (req,res)=>
{
    res.send('hello from the root path')
});

//add middleware to parse the data  in json
app.use(express.json());

app.use(cors())

//add an middle ware to configure the routes
app.use('/api', route)
const port=5000;
app.listen(port,function()
{
    console.log('Server stated on port number'+port)
});



