import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberPassword, setRememberPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const AUTO_LOGOUT_TIME = 60 * 60 * 1000; // 1 hour
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpInput, setOtpInput] = useState("");


  useEffect(() => {
    let logoutTimer;

    // Reset logout timer
    const resetLogoutTimer = () => {
      clearTimeout(logoutTimer);
      logoutTimer = setTimeout(() => {
        alert("You have been logged out due to inactivity.");
        navigate("/"); // Redirect to login page
      }, AUTO_LOGOUT_TIME);
    };

    // Add activity listeners
    const addActivityListeners = () => {
      window.addEventListener("mousemove", resetLogoutTimer);
      window.addEventListener("keydown", resetLogoutTimer);
      window.addEventListener("click", resetLogoutTimer);
    };

    // Delete activity listeners
    const removeActivityListeners = () => {
      window.removeEventListener("mousemove", resetLogoutTimer);
      window.removeEventListener("keydown", resetLogoutTimer);
      window.removeEventListener("click", resetLogoutTimer);
    };

    // Add event listeners
    resetLogoutTimer();
    addActivityListeners();

    // clearTimeout(logoutTimer);
    return () => {
      clearTimeout(logoutTimer);
      removeActivityListeners();
    };
  }, [navigate]);


  // Sample users database
  const users = [
    {
      email: "admin@admin.com",
      password: "123456",
      name: "Admin",
      nickname: "AdminBoss",
      avatar: "https://via.placeholder.com/150",
      phoneNumber: "1234567890",
    },
    {
      email: "aliabdelgalil101@gmail.com",
      password: "123456",
      name: "Ali",
      nickname: "AliTheGreat",
      avatar:
        "https://img.freepik.com/free-vector/mysterious-mafia-man-wearing-hat_52683-34829.jpg?semt=ais_hybrid",
      phoneNumber: "01140263019",

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
    if (!canvas) return; // تأكد من أن canvas موجود
    const ctx = canvas.getContext("2d");
    let width, height;

    const resizeCanvas = () => {
      width = canvas.width = canvas.clientWidth;
      height = canvas.height = canvas.clientHeight;
    };

    const drawSpider = (x, y, size) => {
      // Draw body
      ctx.beginPath();
      ctx.ellipse(x, y, size, size, 0, 0, Math.PI * 2);
      ctx.fillStyle = "#fff";
      ctx.fill();

      // Draw legs
      const legLength = size * 2;
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        const legX = x + Math.cos(angle) * legLength;
        const legY = y + Math.sin(angle) * legLength;

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(legX, legY);
        ctx.strokeStyle = "#fff";
        ctx.stroke();
      }
    };

    const animateSpider = () => {
      ctx.clearRect(0, 0, width, height);
      drawSpider(
        Math.random() * width,
        Math.random() * height,
        20 // Spider size
      );
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
    tl.to("#project-name", { opacity: 1, duration: 1.5 }).to("#project-name", {
      opacity: 0.3,
      duration: 1.5,
    });
  }, []);


  const handleForgotPassword = () => {
    const user = users.find((u) => u.email === email);
    if (!user) {
      setError("Email not found. Please check and try again.");
    } else {
      const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
      setOtp(generatedOtp);
      setOtpSent(true);
      alert(`OTP sent to your email or phone: ${generatedOtp}`); // Simulated
    }
  };
  
  const verifyOtp = () => {
    if (otpInput === otp) {
      alert("OTP verified! Redirecting to reset password page...");
      navigate("/reset-password");
    } else {
      setError("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left side animation */}
      <div className="w-1/2 bg-black flex flex-col justify-center items-center relative">
        <h1
          id="project-name"
          className="text-white text-5xl font-bold mb-8 opacity-30"
        >
          AnwarIstanbul
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
      {!otpSent && (
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 p-3 w-full mb-4 rounded"
        />
      )}

      {/* Add the OTP fields here */}
      {otpSent && (
        <input
          type="text"
          placeholder="Enter OTP"
          value={otpInput}
          onChange={(e) => setOtpInput(e.target.value)}
          className="border border-gray-300 p-3 w-full mb-4 rounded"
        />
      )}

      {/* Replace the Login button based on the OTP state */}
      {otpSent ? (
        <button
          onClick={verifyOtp}
          className="bg-green-500 text-white py-3 px-6 rounded w-full hover:bg-green-600 transition"
        >
          Verify OTP
        </button>
      ) : (
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white py-3 px-6 rounded w-full hover:bg-blue-600 transition"
        >
          Login
        </button>
      )}

      <div className="flex justify-between items-center mb-4 mt-5">
        <a
          href="#"
          onClick={handleForgotPassword}
          className="text-blue-500 text-sm hover:underline "
        >
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
    </div>

      </div>
    </div>
  );
};

export default Login;

