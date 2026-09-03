import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";

const app = express();

const PORT = 5000;
const JWT_SECRET = "practice-secret";

app.use(cors());
app.use(express.json());

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

const user: User = {
  id: 1,
  name: "Akshay",
  email: "akshay@example.com",
  password: "123456",
};

// Test API
app.get("/", (req, res) => {
  res.json({
    message: "Backend server is running",
  });
});

// Login API
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  if (email !== user.email || password !== user.password) {
    return res.status(401).json({
      message: "Invalid email or password",
    });
  }

  const token = jwt.sign(
    {
      userId: user.id,
      email: user.email,
    },
    JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );

  return res.json({
    message: "Login successful",
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
    token,
  });
});

// JWT authentication middleware
const authenticateToken = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const authHeader = req.headers.authorization;

  const token = authHeader?.startsWith("Bearer ")
    ? authHeader.substring(7)
    : undefined;

  if (!token) {
    return res.status(401).json({
      message: "Token required",
    });
  }

  try {
    jwt.verify(token, JWT_SECRET);

    next();
  } catch {
    return res.status(403).json({
      message: "Invalid or expired token",
    });
  }
};

// Protected API
app.get("/api/me", authenticateToken, (req, res) => {
  return res.json({
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});