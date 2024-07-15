import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const useResetPassword = () => {
  const navigate = useNavigate();
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const resetButtonFunc = (email, Token, password, confirmPassword) => {
    if (password === confirmPassword) {
      axios
        .post(
          `${import.meta.env.VITE_API_URL}api/Auth/ResetPassword`,
          {
            email: email,
            token: Token,
            newPassword: password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(() => {
          alert("data sudah berhasil di reset");
          navigate("/login");
        })
        .catch((err) => {
          setErrorMessage(err.response.data);
        });
    } else {
      alert("password tidak boleh berbeda");
    }
  };

  return {
    resetButtonFunc,
//     setPassword,
//     setConfirmPassword,
//     password,
//     confirmPassword,
//     setErrorMessage,
//     errorMessage,
  };
};

export default useResetPassword;
