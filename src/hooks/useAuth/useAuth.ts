import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { AuthContextType } from "../../models/types";

export const useAuth = () => useContext<AuthContextType>(AuthContext);
