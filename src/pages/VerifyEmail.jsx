import axios from "axios";
import { useState } from "react";
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
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setMessage("");
        setLoading(true);

        try {
            const res = await axios.post("http://localhost:5000/api/auth/verify", { email, code });
            setMessage(res.data.message);
            setTimeout(() => {
                navigate("/dashboard/user", { replace: true });
            }, 1000);
        } catch (error) {
            setError(error.response?.data?.message || "Verification failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div 
            className="min-h-screen flex items-center justify-center p-4" 
            style={{ backgroundColor: 'var(--colorBody)', fontFamily: 'var(--font-poppins)' }}
        >
            <div 
                className="max-w-md w-full rounded-3xl shadow-2xl p-10 border border-opacity-20 border-black"
                style={{ backgroundColor: 'var(--cardColor)' }}
            >
                {/* Header with Lobster Font */}
                <div className="text-center mb-8">
                    <h1 
                        className="text-4xl mb-2" 
                        style={{ fontFamily: 'var(--font-lobster)', color: 'var(--blackColor)' }}
                    >
                        Verify Identity
                    </h1>
                    <p style={{ color: 'var(--SubColor)' }} className="text-sm font-medium">
                        We sent a code to <br/>
                        <span className="font-bold underline italic opacity-80">{email}</span>
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Enter Code"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            className="w-full px-4 py-4 rounded-xl text-center text-2xl font-bold tracking-widest outline-none border-2 border-transparent focus:border-opacity-50 transition-all placeholder:opacity-30"
                            style={{ 
                                backgroundColor: 'var(--colorBody)', 
                                color: 'var(--SubColor)',
                                borderColor: 'var(--primary)'
                            }}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 rounded-xl font-bold text-white uppercase tracking-wider transition-transform active:scale-95 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        style={{ backgroundColor: 'var(--primary)' }}
                    >
                        {loading ? "Checking..." : "Confirm Code"}
                    </button>

                    {message && (
                        <div className="p-3 rounded-lg text-center text-sm font-semibold bg-white bg-opacity-50" style={{ color: 'var(--primary)' }}>
                            {message}
                        </div>
                    )}
                    
                    {error && (
                        <div className="p-3 rounded-lg text-center text-sm font-semibold text-white" style={{ backgroundColor: 'var(--removeButton)' }}>
                            {error}
                        </div>
                    )}
                </form>

                <button 
                    onClick={() => navigate(-1)}
                    className="mt-8 w-full text-center text-sm font-semibold hover:underline"
                    style={{ color: 'var(--SubColor)' }}
                >
                    Back to registration
                </button>
            </div>
        </div>
    );
};

export default VerifyEmail;