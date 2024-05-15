import { ReactNode, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/userSlice";
import { AuthProviderValue } from "../../models/types";
import { DefaultUrls } from "../../models/enums";

interface Props {
  children: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [token, setToken] = useState<string>(
    localStorage.getItem("token") || ""
  );
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      console.log(location.state?.from.pathname);
      const origin = location.state?.from.pathname; //|| "/main";
			console.log(origin,' path--------')
      navigate(DefaultUrls.main);
    } else {
      navigate(DefaultUrls.auth);
    }
  }, [token]);

  const handleLogin = async (token: string) => {
    setToken(token);
    localStorage.setItem("token", token);
		navigate(DefaultUrls.main);
  };

  const handleLogout = () => {
    setToken("");
    localStorage.removeItem("token");
    dispatch(logout());
		navigate(DefaultUrls.auth);
  };

  const value: AuthProviderValue = {
    token,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
