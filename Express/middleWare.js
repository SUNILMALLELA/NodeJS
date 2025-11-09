const express = require('express');
const app = express();
const port = 3000;
//A middleware is a function that runs between the request and response.
//app.use(express.json())Built in Middle ware
//checkLogin customMiddleware

function checkLogin(req, res, next) {
    const isLoggedIn =true; 

    if (isLoggedIn) {
        console.log(' User is logged in');
        next(); 
    } else {
        console.log(' User not logged in');
        res.send('Access Denied! Please log in to continue.');
    }
}

app.get('/', (req, res) => {
    res.send('Welcome to the Home Page');
});
app.get('/dashboard', checkLogin, (req, res) => {
    res.send('Welcome to your Dashboard');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
