import { useContext, useEffect } from "react";
import { AuthContext } from "./contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const AuthWrapper = ({ children }) => {
  const { isAuth, userRole } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (userRole === 'admin') {
      // document.cookie = `${authToken}=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      // document.cookie = `${role}=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      // document.cookie = `${auth}=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      
      navigate("/login"); // Directly navigate to the login route 
    } else if (!isAuth) {
      // document.cookie = `${authToken}=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      // document.cookie = `${role}=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      // document.cookie = `${auth}=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      
      navigate("/login"); // Directly navigate to the login route 
    }
  }, [isAuth, navigate]);

  return children;
};

export default AuthWrapper;
