import type { FC } from "react";
import {QRCodeSVG} from 'qrcode.react';

const TestQR: FC = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1
        style={{
          fontSize: "1.5rem",
          color: "#333",
          marginBottom: "16px",
          fontFamily: "Arial, sans-serif", // Fuente clara y accesible
        }}
      >
        Código QR
      </h1>
      <div
        style={{
          background: "white",
          padding: "16px",
          display: "inline-block",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Sombra profesional
          transition: "transform 0.2s ease-in-out",
        }}
        onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
          e.currentTarget.style.transform = "scale(1.05)"; // Efecto al pasar el mouse
        }}
        onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
          e.currentTarget.style.transform = "scale(1)"; // Restaurar tamaño
        }}
      >
        <QRCodeSVG
          value="https://mirefugiolmue.cl" // URL del sitio
          size={256} // Tamaño del código QR
          fgColor="#000000" // Color del QR
          bgColor="#FFFFFF" // Fondo del QR
        />
      </div>
    </div>
  );
};

export default TestQR;