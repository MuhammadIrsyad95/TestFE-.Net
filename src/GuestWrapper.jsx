import { useContext, useEffect } from 'react';
import { AuthContext } from './contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function GuestWrapper({ children }) {
  const { isAuth, userRole } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth && userRole === 'user') {
      navigate('/landing');
    } else if (isAuth && userRole === 'admin') {
      navigate('/admin');
    }
  }, [isAuth, navigate]);

  return !isAuth ? children : null;
}
