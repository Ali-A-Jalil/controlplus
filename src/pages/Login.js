import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberPassword, setRememberPassword] = useState(false);
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
      avatar:
        "https://img.freepik.com/free-vector/mysterious-mafia-man-wearing-hat_52683-34829.jpg?semt=ais_hybrid",
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
    const canvas = document.getElementById("spider-animation");
    const ctx = canvas.getContext("2d");
    let width, height;

    const resizeCanvas = () => {
      width = canvas.width = canvas.clientWidth;
      height = canvas.height = canvas.clientHeight;
    };

    const animateSpider = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#fff";
      ctx.beginPath();
      ctx.arc(Math.random() * width, Math.random() * height, 20, 0, Math.PI * 2);
      ctx.fill();
    };

    const animate = () => {
      animateSpider();
      setTimeout(animate, 500);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to("#project-name", { opacity: 1, duration: 1.5 })
      .to("#project-name", { opacity: 0.3, duration: 1.5 });
  }, []);

  return (
    <div className="flex h-screen">
      {/* Left side animation */}
      <div className="w-1/2 bg-black flex flex-col justify-center items-center relative">
        <h1
          id="project-name"
          className="text-white text-5xl font-bold mb-8 opacity-30"
        >
          ControlPlus
        </h1>
        <canvas
          id="spider-animation"
          className="absolute w-full h-full pointer-events-auto"
        ></canvas>
      </div>

      {/* Right side login form */}
      <div className="w-1/2 flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 p-3 w-full mb-4 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 p-3 w-full mb-4 rounded"
          />
          <div className="flex justify-between items-center mb-4">
            <a href="#" className="text-blue-500 text-sm hover:underline">
              Forgot Password?
            </a>
            <label className="flex items-center text-sm">
              <input
                type="checkbox"
                checked={rememberPassword}
                onChange={(e) => setRememberPassword(e.target.checked)}
                className="mr-2"
              />
              Remember Password
            </label>
          </div>
          <button
            onClick={handleLogin}
            className="bg-blue-500 text-white py-3 px-6 rounded w-full hover:bg-blue-600 transition"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
