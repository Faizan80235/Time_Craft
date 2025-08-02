const User = require("../Model/UserSchema");
const bcrypt = require('bcrypt');

const Registerd = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validation
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword
    });

    await newUser.save();

    res.status(200).json({ message: "User is registered successfully" });

  } catch (error) {
    console.error("Registration error:", error);
    res.status(400).json({ message: "Registration failed", error: error.message });
  }
};

module.exports = { Registerd };
