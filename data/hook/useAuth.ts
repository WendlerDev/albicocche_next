import { useContext } from "react"; // Adicione React aqui
import AuthContext from "../context/AuthContext";

const useAuth = (user?: any, loginGoogle?: any) => useContext(AuthContext);

export default useAuth;

