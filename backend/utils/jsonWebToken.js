import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d", // Token expires in 15 days
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
    httpOnly: true, // Ensures the cookie is only sent with HTTP requests
    sameSite: "strict", // Prevents the cookie from being sent in cross-site requests
    // secure: process.env.NODE_ENV !== "development",
  });
};

export default generateTokenAndSetCookie;
