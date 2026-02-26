import React from "react";


export default function  Sucess({ name = "User" }) {
  return (
    <div style={styles.page} className="totp">
      <div style={styles.card}>
        <div style={styles.dot} aria-hidden="true" />
        <h1 style={styles.Font}>Authenticated</h1>
        <p style={styles.text}>
          {name} is being authenticated successfully.
        </p>
      </div>
    </div>
  );
}

const styles = {

  Font:{
    fontfamily:'poppins',
  },

  page: {
    minHeight: "100vh",
    display: "grid",
    placeItems: "center",
    background: "#0b3d1a", // dark green background
    padding: 24,
  },
  card: {
    width: "min(520px, 100%)",
    background: "#0f6a2a", // green panel
    border: "1px solid rgba(255,255,255,0.18)",
    borderRadius: 16,
    padding: "28px 24px",
    textAlign: "center",
    color: "white",
    boxShadow: "0 18px 50px rgba(0,0,0,0.35)",
  },
  dot: {
    width: 18,
    height: 18,
    borderRadius: 999,
    background: "#22c55e", // bright green “signal”
    margin: "0 auto 14px",
    boxShadow: "0 0 0 6px rgba(34,197,94,0.25)",
  },
  title: {
    margin: "0 0 8px",
    fontSize: 34,
    letterSpacing: 0.3,
  },
  text: {
    margin: 0,
    opacity: 0.95,
    fontSize: 16,
  },
};