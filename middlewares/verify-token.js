const jwt = require("jsonwebtoken");
const { User } = require("../models");

module.exports = async (req, res, next) => {
    try {
        // Get auth token
        const token = req.headers.authorization;

        if (!token) {
            return res.status(401).json({
                message: "Incorrect credentials",
            });
        }

        const JWTToken = token.split(" ").pop();

        // Verify token
        const data = jwt.verify(JWTToken, "dahsdhalsdh");

        // Find user by ID from token
        const user = await User.findByPk(data.data.id);

        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        // Assign user to the request object
        req.user = user;
        next();
    } catch (error) {
        // Handle token verification errors
        console.error(error);

        return res.status(401).json({
            message: "Incorrect credentials",
        });
    }
};
