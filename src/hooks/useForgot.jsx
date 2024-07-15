import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const useForgot = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const forgotButtonFunc = () => {
    axios
      .post(
        `${import.meta.env.VITE_API_URL}api/Auth/ForgotPassword`,
        {
          email: email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(() => {
        alert("silahkan cek email"); // "Please check your email" in Indonesian
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((err) => {
        // setErrorMessage(err.response.data);
        setErrorMessage(err.response.data);
      });
  };
  return {
    forgotButtonFunc,
    setEmail,
    errorMessage,
    email,
  };
};

export default useForgot;
