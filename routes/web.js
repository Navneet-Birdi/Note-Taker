//create router instance
const router = require('express').Router();
const path = require('path');
const publicPath = path.join(__dirname, '..', 'public');

//* `GET /' should return the index.html file
router.get('/', (req,res) => {
    //transfer file to given path
    res.sendFile(path.join(publicPath, 'index.html'));
});

// * `GET /notes` should return the notes.html file
router.get('/notes', (req,res) => {
    //transfer file to given path
    res.sendFile(path.join(publicPath, 'notes.html'));
});


//export router
module.exports = router;