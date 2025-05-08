import User from "../Model/User_model.js";
import bcrypt from "bcrypt";

export const SignUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // console.log("Incoming Body:", req.body);
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All the fields are required!" });
    }
    // email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format." });
    }
    // password format validation
    const passRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passRegex.test(password)) {
      return res.status(400).json({
        message:
          "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.",
      });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10); // hash with salt rounds
    const createUser = new User({
      name,
      email,
      password: hashedPassword,
    });
    await createUser.save();
    res.status(200).json({ message: "User created successfully!" });
  } catch (error) {
    // console.log("Error :", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // console.log(req.body);
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email" });
    }
    const passMatch = await bcrypt.compare(password, user.password);
    if (!passMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }
    return res.status(200).json({
      success: true,
      message: "Login Successfully!",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    }); // also sending  user data to further use in frontend
  } catch (error) {
    // console.log("Error :", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
