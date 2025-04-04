import users, { find, isThisEmailInUse, isThisUsernameInUse, findOne } from "../models/users";
import { hash, compare } from "bcrypt";
import { config } from "dotenv";
import { sign } from "jsonwebtoken";
config();
const SECRET_KEY = process.env.SECRET_KEY;

// Getting All
const getAllUsers = async (req, res) => {
  try {
    const user = await find();
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Creating One
// Register
const register = async (req, res) => {
  // const { Username, RollNo, Hostel, Email, Password, Phone } = req.body;

  try {
    const newUser = new users({
      Username: req.body.Username,
      RollNo: req.body.RollNo,
      Hostel: req.body.Hostel,
      Email: req.body.Email,
      Password: req.body.Password,
      Phone: req.body.Phone,
    });
    const data = req.body;
    //hashpassword
    const hashpassword = await hash(data.Password, 10);
    //phone in numbers format
    const phone = Number(data.Phone);
    // email address unique
    const isNewUser = await isThisEmailInUse(req.body.Email);
    if (!isNewUser) {
      return res.json({
        success: false,
        message: "This email is already in use",
      });
    }
    // username unique
    const isNewUsers = await isThisUsernameInUse(req.body.Username);
    if (!isNewUsers) {
      return res.json({
        success: false,
        message: "This Username is already in use",
      });
    }
    const newUsers = new users({
      Username: req.body.Username,
      RollNo: req.body.RollNo,
      Hostel: req.body.Hostel,
      Email: req.body.Email,
      Password: hashpassword,
      Phone: phone,
    });
    const savedUser = await newUsers.save();
    //token
    const token = sign(
      {
        email: savedUser.Email,
        password: savedUser.Password,
        Username: savedUser.Username,
        Id: savedUser._id,
      },
      SECRET_KEY
    );

    res.status(201).json({ user: savedUser, token: token });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//Login
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const savedUser = await findOne({ Email: email });
    if (!savedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const matchPassword = await compare(password, savedUser.Password);
    if (!matchPassword) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = sign(
      {
        email: savedUser.Email,
        password: savedUser.Password,
        Username: savedUser.Username,
        Id: savedUser._id,
      },
      SECRET_KEY
    );

    res.status(201).json({ user: savedUser, token: token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export default {
  getAllUsers,
  register,
  login,
};
