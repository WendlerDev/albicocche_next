import { useContext } from "react"; // Adicione React aqui
import AppContext from "../context/AppContext";

const useAppData = () => useContext(AppContext);

export default useAppData;