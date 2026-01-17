const db = require("../config/db");
const apiResponse = require("../utils/apiResponse");

exports.getUsers = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM users");
    return apiResponse.success(
      res,
      "users",
      "User list fetched successfully",
      rows
    );
  } catch (err) {
    return apiResponse.error(res, "users", "Failed to fetch user list");
  }
};

exports.createUser = async (req, res) => {
  const { name, email } = req.body;

  try {
    const [result] = await db.query(
      "INSERT INTO users (name, email) VALUES (?, ?)",
      [name, email]
    );

    return apiResponse.success(res, "users", "User created successfully", {
      id: result.insertId,
    });
  } catch (err) {
    return apiResponse.error(res, "users", "Failed to create user");
  }
};
