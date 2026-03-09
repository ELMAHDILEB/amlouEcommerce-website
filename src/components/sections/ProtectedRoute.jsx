import { BiLoader } from "react-icons/bi";
import { useSelector } from "react-redux"
import { Navigate, Outlet, useLocation } from "react-router-dom";

export const ProtectedRoute = ({ allowedRoles }) => {
    const { token: reduxToken, user } = useSelector((state) => state.auth);
    const location = useLocation();

    const token = reduxToken || localStorage.getItem("token");

    if (!token) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }

    if (!user) {
        return (
            <div className="flex justify-center items-center h-screen">
                <BiLoader className="animate-spin text-4xl" />
            </div>
        );
    }

    if (allowedRoles && !allowedRoles.includes(user.role)) {
        return <Navigate to="/unauthorized" replace />;
    }

    return <Outlet />;
}