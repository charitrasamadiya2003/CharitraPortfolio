const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const compression = require("compression");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
require("dotenv").config();

// Routes
const contactRoutes = require("./routes/contactRoutes");
const visitorRoutes = require("./routes/visitorRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Middlewares
app.use(cors());
app.use(express.json());
app.use(compression()); // Compress responses
app.use(helmet()); // Set secure headers

// ✅ Rate Limiting
app.use(rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 100, // limit each IP
}));

// Optional: Cache control
app.use((req, res, next) => {
  res.setHeader("Cache-Control", "public, max-age=600");
  next();
});

// ✅ API Routes
app.use("/api/contact", contactRoutes);
app.use("/api/track-visitor", visitorRoutes);

// ✅ MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ Health check
app.get("/", (req, res) => {
  res.send("🚀 Backend is running successfully!");
});

// ✅ Global error handler
app.use((err, req, res, next) => {
  console.error("❌ Server Error:", err);
  res.status(500).json({ message: "Something went wrong" });
});
