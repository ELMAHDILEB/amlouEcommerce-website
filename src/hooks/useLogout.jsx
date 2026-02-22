import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { logout } from "../features/auth/authSlice";
import { authApi } from "../features/auth/authApi.js";

const useLogout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = ()=>{
        dispatch(logout());
        dispatch(authApi.util.resetApiState())
        navigate("/login", {replace: true});
    }
  return handleLogout;
}

export default useLogout
