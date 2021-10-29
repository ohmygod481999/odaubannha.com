import React from "react";

function Badge({ children, color }) {
    let backgroundColor = '#28a745'
    let textColor = '#fff'
    switch (color) {
        case "danger":
            backgroundColor = "#dc3545"
            break;
        case "primary":
            backgroundColor = "#007bff"
            break;
        case "warning":
            backgroundColor = "#ffc107"
            textColor = "#212529"
            break;
        case "success":
            backgroundColor = "#28a745"
            break;
        case "secondary":
            backgroundColor = "#6c757d"
            break;
    
        default:
            break;
    }
  return (
    <span
      style={{
        display: "inline-block",
        padding: "2px 5px",
        backgroundColor: backgroundColor,
        color: textColor,
        fontWeight: 700,
        textAlign: "center",
        borderRadius: ".25rem"
      }}
    >
      {children}
    </span>
  );
}

export default Badge;
