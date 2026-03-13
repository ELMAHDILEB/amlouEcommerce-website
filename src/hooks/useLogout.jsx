import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { apiSlice } from "../services/apiSlice.js";
import { logout } from "../features/auth/authSlice.js";


const useLogout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = ()=>{
        dispatch(logout());
        dispatch(apiSlice.util.resetApiState())
        navigate("/login", {replace: true});
    }
  return handleLogout;
}

export default useLogout
