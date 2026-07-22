"use client";
import { Toaster } from "react-hot-toast";

export default function ToastProvider() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 3000,
        style: {
          background: "#ffffff",
          border: "1px solid #f59e0b",
          color: "#374151",
          fontSize: "14px",
          borderRadius: "12px",
          padding: "12px 16px",
        },
        success: { iconTheme: { primary: "#f59e0b", secondary: "#fff" } },
        error: { iconTheme: { primary: "#ef4444", secondary: "#fff" } },
      }}
    />
  );
}

