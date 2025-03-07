"use client"; // Ensure this runs on the client

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ToastProvider() {
  return (
    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={true}
      newestOnTop={true}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      className="custom-toast-container"
      toastClassName={(context) =>
        context?.type === "success"
          ? "custom-toast custom-toast-success"
          : context?.type === "error"
          ? "custom-toast custom-toast-error"
          : "custom-toast"
      }
      bodyClassName="custom-toast-body"
      style={{ zIndex: 9999 }}
    />
  );
}
