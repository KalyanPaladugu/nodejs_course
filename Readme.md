#### Backend Development Course Notes

##### Authentication Middleware, jwt.verify() & next()
##### Authentication Middleware

- Definition
- Authentication middleware is an Express middleware that checks whether a request contains a valid JWT token. It runs before the protected route and allows only authenticated users to continue.
- Why is it Important?
- Instead of writing token verification logic inside every protected route, authentication middleware lets you write it once and reuse it across multiple routes.
- Real-World Example
- Before entering a secure office, a security guard checks your ID card. If it is valid, you are allowed to enter. Otherwise, access is denied. The security guard acts like authentication middleware.
- Authentication Middleware Example
```
const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {

    const token = req.headers.authorization;

    if (!token) {
        return res.send("Token Required");
    }

    try {

        const decoded = jwt.verify(token, "mysecretkey");

        req.user = decoded;

        next();

    } catch (err) {

        res.send("Invalid Token");

    }

}

module.exports = authMiddleware;

```
- Using the Middleware
```
app.get("/profile", authMiddleware, (req, res) => {

    res.send("Welcome " + req.user.username);

});
```
 - What is `jwt.verify()`?
 - `jwt.verify()` checks whether the received JWT was signed with the correct secret key and whether it has expired or been modified. If the token is valid, it returns the decoded payload.
``` 
const decoded = jwt.verify(token, "mysecretkey");

console.log(decoded);
```

- What is `next()`?
- `next()` is an Express function that passes control to the next middleware or the final route handler. If next() is not called and no response is sent, the request will remain pending.
```
function logger(req, res, next) {

    console.log("Request Received");

    next();

}

Authentication Flow
Client
   │
Authorization Header
   │
Authentication Middleware
   │
jwt.verify()
   │
Valid Token?
 ┌────┴────┐
Yes       No
 │          │
next()   Access Denied
 │
Protected Route
 │
Response

```
- Code Explanation
- req.headers.authorization reads the JWT.
- jwt.verify() validates and decodes the token.
- req.user stores the decoded payload.
- next() forwards the request to the protected route.
- Invalid or missing tokens stop the request.
- Common Mistakes
- Forgetting to call next() after successful verification.
- Using a different secret key in jwt.verify().
- Reading the token from req.body instead of req.headers.authorization.
- Not handling invalid tokens with try...catch.
- Interview Questions
1. What is authentication middleware?
2. What does jwt.verify() do?
3. Why do we store decoded data in req.user?
4. What is the purpose of next()?
5. What happens if next() is not called?

- Summary
- Authentication middleware protects routes by verifying JWT tokens before allowing access. jwt.verify() validates the token, req.user stores the decoded information, and next() transfers control to the protected route.

