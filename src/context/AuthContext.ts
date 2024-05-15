import { createContext } from "react";
import { AuthContextType } from "../models/types";

export const AuthContext = createContext<AuthContextType>(null);
