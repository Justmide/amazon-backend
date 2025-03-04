const UsersModel = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const generateRandomString = require("../middlewares/generateString");
const sendVerificationEmail = require("../services/nodemailer/sendVerificationEmail");
const sendConfirmedEmail = require("../services/nodemailer/sendConfirmedEmail");

const signup = async (req, res) => {
  const { password, name, email } = req.body;
  try {
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    // generate token
    const verificationToken = generateRandomString(10)
    // expiration time
    const verificationExp = Date.now() + 3600000
    
    const user = await UsersModel.create({
        ...req.body,
        password: hashedPassword,
        verificationToken,
        verificationExp
    });
    
    if (!user) {
        res.status(400).json({
            status: "error",
            message: "Failed to signup",
        });
        return;
    }

    // send verification email
    sendVerificationEmail(name, email, verificationToken)
    
    res.status(201).json({
      status: "success",
      message: "Signup successuful, Check email to verify account",
      user,
    });
  } catch (error) {
    console.error(error);
  }
};

const verifyAccount = async (req, res) => {
    const {token} = req.params
    try {
        const user = await UsersModel.findOne({verificationToken:token, verificationExp: {$gt: Date.now()}})
        if(!user){
            res.status(404).json({
                status:"error",
                message: "Token invalid or has expired"
            })
            return
        }
  
        await UsersModel.findByIdAndUpdate(user._id, {isVerified:true, verificationToken:null, verificationExp:null})

           // send Confirmed email
    await sendConfirmedEmail(user.email)

        res.status(201).json({
            status:"success",
            message: "congratulation! Your account has been verified..Check your mail for confirmation!",
            user
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status: "error",
            message: "An error occurred while verifying the account.",
        });
    }
}

const login = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);

  try {
    // look for the user with this email
    const user = await UsersModel.findOne({ email }).select("+password");
    if (!user) {
      res.status(404).json({
        status: "error",
        message: "Email or password incorrect.",
      });
      return;
    }

    const passwordCorrect = await bcrypt.compare(password, user.password);
    if (!passwordCorrect) {
      res.status(404).json({
        status: "error",
        message: "Email or password incorrect.",
      });
      return;
    }

    // generate token
    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.jwt_secret_key,
      { expiresIn: process.env.jwt_exp }
    );

    res.status(200).json({
      status: "success",
      message: "login successful",
      token,
      user
    });
  } catch (error) {
    console.log(error);
  }
};
const logout = () => {
  console.log("login out...");
};

module.exports = {
  signup,
  logout,
  login,
  verifyAccount
};
