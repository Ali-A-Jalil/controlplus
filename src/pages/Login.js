import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Sample users database
  const users = [
    {
      email: "admin@example.com",
      password: "admin",
      name: "Admin",
      nickname: "AdminBoss",
      avatar: "https://via.placeholder.com/150",
    },
    {
      email: "aliabdelgalil101@gmail.com",
      password: "123456",
      name: "Ali",
      nickname: "AliTheGreat",
      avatar: "https://img.freepik.com/free-vector/mysterious-mafia-man-wearing-hat_52683-34829.jpg?semt=ais_hybrid",
    },
  ];

  const handleLogin = () => {
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!email || !password) {
      setError("Please fill in all fields.");
    } else if (!user) {
      const isRegistered = users.some((u) => u.email === email);
      if (isRegistered) {
        setError("Invalid email or password.");
      } else {
        setError("User not registered.");
      }
    } else {
      onLogin(user);
      navigate("/dashboard");
    }
  };

  useEffect(() => {
    const canvas = document.getElementById("spider-web");
    const ctx = canvas.getContext("2d");
    let width, height;

    const resizeCanvas = () => {
      width = canvas.width = canvas.clientWidth;
      height = canvas.height = canvas.clientHeight;
    };

    const drawSpiderWeb = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 1;

      const centerX = width / 2;
      const centerY = height / 2;
      const maxRadius = Math.min(width, height) / 2;
      const numRings = 6;
      const numLines = 12;

      // Draw concentric circles
      for (let i = 1; i <= numRings; i++) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, (i / numRings) * maxRadius, 0, 2 * Math.PI);
        ctx.stroke();
      }

      // Draw radial lines
      for (let i = 0; i < numLines; i++) {
        const angle = (i / numLines) * 2 * Math.PI;
        const x = centerX + maxRadius * Math.cos(angle);
        const y = centerY + maxRadius * Math.sin(angle);
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.stroke();
      }
    };

    const animate = () => {
      drawSpiderWeb();
      requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    animate();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <div className="flex h-screen">
      {/* Left side animation */}
      <div className="w-1/2 bg-black flex justify-center items-center relative">
        <canvas id="spider-web" className="absolute w-full h-full"></canvas>
      </div>

      {/* Right side login form */}
      <div className="w-1/2 flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-80">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 p-2 w-full mb-4 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 p-2 w-full mb-4 rounded"
          />
          <button
            onClick={handleLogin}
            className="bg-blue-500 text-white py-2 px-4 rounded w-full hover:bg-blue-600 transition"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
