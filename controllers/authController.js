
const User = require('../models/User.js');
const bcrypt = require('bcrypt');

const signup =async (req,res)=>{
    console.log(req.body)
    const hashpassword =await bcrypt.hashSync(req.body.password, 10);
    const user =await User.create({
        'username':req.body.username,
        'password':hashpassword
    })
    res.send(user)

}

const login= async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) {
        return res.send("Invalid Username");
    }

    const isMatch = await bcrypt.compare(
        password,
        user.password
    );

    if (isMatch) {
        res.send("Login Successful");
    } else {
        res.send("Invalid Password");
    }

}
module.exports = { signup, login };