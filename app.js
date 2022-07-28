const express = require('express');
const PORT = process.env.PORT || 3001;
const webRoutes = require('./routes/web');
const apiRoutes = require('./routes/api'); 


//app instance, calling express function
const app = express();

//to serve the folder statically
app.use(express.static('public'));

//teaching express on how to understand incoming json request body
app.use(express.json());

//teaching express on how to understand incoming form data request body
app.use(express.urlencoded({extended:true}));

//load the web routes
app.use(webRoutes);
app.use('/api', apiRoutes);

//sending back status code to 404 and give message page not found
app.get("*", (req, res) => {
    res.status(404).send('page not found');
})


//call app.listen to listen to port and providing callback function to give message
app.listen(PORT, () => {
    console.log('App is running on http://localhost:${PORT}');
})








