import { useState } from "react";
import axios from "axios";
import image from "../assets/image.png";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Replace with the API endpoint
      const response = await axios.post(
        "https://api.yourservice.com/login",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer YOUR_API_KEY", // Add your API key here if required
          },
        }
      );

      console.log("Login successful:", response.data);
      // Handle login success (e.g., navigate to another page)
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      setError(error.response?.data?.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="wrapper">
      <div className="left-side">
        <img className="network" src={image} alt="network illustration" />
      </div>
      <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
          <h2>Welcome back!</h2>
          <p>Enter your email and password</p>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
             
            />
          </div>
          <div className="form-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="forgot-password">
              Forgot Password?
            </a>
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
          {error && <p className="error-message">{error}</p>}
          <p className="separator">or login with</p>
          <div className="social-login">
            <button className="google">Google</button>
            <button className="facebook">Facebook</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
