##### Backend Development Course Notes

- Node Modules:

1. `http` module use toc reate server in nodejs

- User defined modules
    -  To export module we need to use `module.exports = {func..}`
- ![Routes](./images//routes.jpg)

- Section 18: MVC Architecture

- Models Folder
- Definition
- The models folder contains Mongoose schemas and models. It is responsible for communicating with the MongoDB database.
- Why is it Important?
- Separating responsibilities makes applications cleaner, easier to maintain, and scalable.
- Real-World Example
- A library database stores all book records. The model is responsible for accessing those records.

- Controllers Folder
- Definition
- The controllers folder contains business logic. Controllers receive requests from routes, process data, communicate with models, and send responses.
- Why is it Important?
- Separating responsibilities makes applications cleaner, easier to maintain, and scalable.
- Real-World Example
- A chef prepares food after receiving an order from the waiter.

- Routes Folder
- Definition
- The routes folder defines API endpoints and forwards requests to controllers.
- Why is it Important?
- Separating responsibilities makes applications cleaner, easier to maintain, and scalable.
- Real-World Example
- A receptionist directs visitors to the correct department.

- MVC Folder Structure
```
project/
│
├── controllers/
│   └── userController.js
├── models/
│   └── userModel.js
├── routes/
│   └── userRoutes.js
├── server.js
└── package.json
Model (models/userModel.js)
```
```
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String
});

module.exports = mongoose.model('User', userSchema);
```
```
Controller (controllers/userController.js)
const User = require('../models/userModel');

async function getUsers(req, res) {
    const users = await User.find();
    res.send(users);
}

module.exports = { getUsers };
```

```
Route (routes/userRoutes.js)
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getUsers);

module.exports = router;

```

- Server (server.js)
```
const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use('/users', userRoutes);

app.listen(3000);
```
```
MVC Request Flow
Client
   │
GET /users
   │
Routes
   │
Controllers
   │
Models
   │
MongoDB
   │
Controllers
   │
Response
```
- Responsibilities
- Folder
- Responsibility
- models
  - Database schemas and data operations
- controllers
  - Business logic and responses
- routes
  - API endpoints and request forwarding

- Common Mistakes
- Writing business logic directly in route files.
- Accessing the database from routes instead of controllers.
- Forgetting to export controllers or routes.
- Using incorrect file paths in require().
- Interview Questions
1. What is MVC Architecture?
2. What is the role of the Models folder?
3. Why do we use Controllers?
4. What is the purpose of Routes?
5. What are the advantages of MVC?
- Summary
- MVC Architecture separates an application into Models, Controllers, and Routes. This separation improves readability, maintainability, code reuse, and scalability, making it the preferred structure for real-world Express.js applications.
