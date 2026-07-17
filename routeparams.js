const express = require('express');
const app = express();

app.get('/user/:username', (req, res) => {
    const username = req.params.username;
    console.log( req.params);
    res.send(`Hello, ${username}!`);
}
);

// multiple route parameters
// Example: /user/john/123
app.get('/user/:username/:id', (req, res) => {
    const username = req.params.username;
    const id = req.params.id;
    res.send(`Hello, ${username}! Your ID is ${id}.`);
}
);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});