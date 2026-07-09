let express = require('express');
let app = express();
const fs = require('fs');
const path = require('path');

// app.get

app.get('/anes', (req, res) => {
    console.log('User hit the server');
    res.status(200).send('Anes 67');
});

// app.use
// setup static and middleware

app.use(express.static('./app-11-content/public'));


// app.post
// app.put
// app.delete

// app.all
// using app.all for 404 error handling 

// Required syntax in Express v5.1.0+

app.all('/*splat', (req, res) => {
  res.status(404).json({ status: 'fail', message: 'Route not found' });
});

// app.use



// app.listen

app.listen(5000, () => {
    console.log('server is listening on 5000...')
})
