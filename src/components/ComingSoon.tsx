import React from "react";

const ComingSoon: React.FC = () => {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      textAlign: "center",
      fontFamily: "Segoe UI, sans-serif",
      backgroundColor: "#f0f0f0"
    }}>
      <h1 style={{ color: "#333" }}>Meu Portfólio</h1>
      <p style={{ color: "#666", fontSize: "1.2rem" }}>
        Ainda vou colocar alguma coisa aqui, paciência 😄
      </p>
      <footer style={{ marginTop: "2rem", fontSize: "0.9rem", color: "#999" }}>
        © 2025 Mateus Moura
      </footer>
    </div>
  );
};

export default ComingSoon;
