// useRegister.js
import axios from "axios";
import { useState } from "react";

const useRegister = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isEmailRegistered, setIsEmailRegistered] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const registerButtonFunc = async () => {
    if (password === confirmPassword) {
      try {
        // Mengirim permintaan registrasi ke server
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}api/Auth/Register`,
          {
            nama: userName,
            password: password,
            email: email,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        // Jika registrasi berhasil, set status ke 0
        setIsEmailRegistered(false);
        setErrorMessage('');
        alert("Silahkan cek email!!");

        // Mengkonfirmasi email setelah registrasi
        await confirmEmail();
      } catch (err) {
        setErrorMessage(err.response.data);
      }
    } else {
      setErrorMessage("Password dan Confirm password tidak sama");
    }
  };

  // Fungsi untuk mengubah status menjadi 1 setelah link di klik
  const confirmEmail = async () => {
    try {
      // Mengirim permintaan ke server untuk mengkonfirmasi email
      await axios.post(
        `${import.meta.env.VITE_API_URL}api/Auth/ConfirmEmail`,
        {
          email: email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Setelah berhasil dikonfirmasi, set status ke 1
      setIsEmailRegistered(true);
      setErrorMessage('');
    } catch (err) {
      setErrorMessage(err.response.data);
    }
  };

  return {
    registerButtonFunc,
    setUserName,
    setEmail,
    setPassword,
    setConfirmPassword,
    password,
    confirmPassword,
    setErrorMessage,
    errorMessage,
    isEmailRegistered,
  };
};

export default useRegister;