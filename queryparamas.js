const express = require('express');
const app = express();
const students = require('./students.json');

// http://localhost:3000/student?course=react
app.get('/students', (req, res) => {
    const course = req.query.course;
   if (course) {
        const filteredStudents = students.filter(student => student.course.toLocaleLowerCase() ===
         course.toLocaleLowerCase());
        res.json(filteredStudents);
    }
    res.json(students);
}
);



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});