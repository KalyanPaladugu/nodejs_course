const express= require('express');

const app= express();
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/signup', (req, res) => {
   console.log('data inserted successfully');
    res.send('data inserted successfully');
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});