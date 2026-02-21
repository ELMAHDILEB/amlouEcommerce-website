import { BiLoader } from "react-icons/bi";
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";

const GuestRoute = () => {
    const { token, user } = useSelector((state)=> state.auth);
    const storedToken  = token || localStorage.getItem("token");

    if (storedToken && !user) {
        return <div className="loading-screen"><BiLoader className="animate-spin" /></div>;
    }

    if(storedToken && user){
        const redirectPath = user.role === "admin"  ? "/dashboard/admin" : "/dashboard/user";
        return <Navigate to={redirectPath} replace/>;
    }

  return <Outlet/>
}

export default GuestRoute
