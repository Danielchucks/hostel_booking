const express = require("express");

const app = express();

app.get("/", (req, res) =>
   res.json({ msg: "Welcome to the Hostel Booking API... " })
);

// Define Routes
app.use("/api/admin", required("./routes/admin"));
app.use("/api/users", required("./routes/users"));
app.use("/api/auth", required("./routes/auth"));
app.use("/api/book", required("./routes/book"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT} `));
