import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);

  const handleClick = () => {
    alert("Congratulations! You've taken the first step towards achieving your learning goals!");
  };

  return (
    <div>
      <h1>Welcome!</h1>
      <p style={{ fontSize: 18 }}>
        We are a team of dedicated professionals who are passionate about education and technology. Our goal is to create an online platform that helps educators and students alike to manage their courses more effectively and efficiently. Our team consists of experienced software developers and education experts. We have combined our expertise to create a system that caters to the needs of both instructors and learners.
        <br />
        <br />
        Thank you for choosing us! We are excited to be part of your educational journey and look forward to helping you achieve your learning goals.
      </p>
      <button onClick={handleClick} style={{ padding: "10px 20px", fontSize: 16, borderRadius: 5, background: "#007bff", color: "#fff", cursor: "pointer" }}>
        Get Started
      </button>
    </div>
  );
};

export default Home;
