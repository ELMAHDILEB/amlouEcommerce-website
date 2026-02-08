import axios from "axios";
import { useState } from "react"
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const VerifyEmail = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const email = location.state?.email;

    if (!location.state?.fromRegister && !email) {
        return <Navigate to="/register" replace />;
      }

    const [error, setError] = useState("");
    const [code, setCode] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError("");
        setMessage("");

        try {
            const res = await axios.post("http://localhost:5000/api/auth/verify", { email: location.state.email, code});
            setMessage(res.data.message);
            setTimeout(() => {
                navigate("/dashboard/user", { replace: true });
              }, 1000);
        } catch (error) {
            setError(error.response?.data?.message);
;        }
    }
  return (

    <form onSubmit={handleSubmit} className="space-y-4">
    <p>We sent a verification code to {location.state.email}</p>
    <input type="text" placeholder="Enter code" value={code} onChange={e => setCode(e.target.value)} />
    <button type="submit" className="cursor-pointer">Verify</button>

    {message && <p style={{ color: "green" }}>{message}</p>}
    {error && <p style={{ color: "red" }}>{error}</p>}
  </form>
      
  )
}

export default VerifyEmail
