const { VITE_TOKEN_CLIENT } = import.meta.env;
import { useState } from "react";
import toast from "react-hot-toast";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../../api/mutation";
import { IErrorResponse, IResponseData } from "../../../interface";
 import { FaEye, FaEyeSlash } from 'react-icons/fa';
const Login = () => {
    const navigate = useNavigate();

    // State variables for form inputs
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    // Mutation to handle login
    const { mutate, isLoading } = useMutation(userLogin, {
        onSuccess: async (data: IResponseData) => {
            toast.success(data?.data?.ststus);
            navigate('/dashboard');
            localStorage.setItem(VITE_TOKEN_CLIENT, data?.data?.data?.token);
        },
        onError: (err: IErrorResponse) => {
            toast.error(err.response?.data?.message || "Login failed");
        }
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const userData = {
            email,
            password,
            rememberMe,
        };
        mutate(userData);
    };

    return (
        <div className="w-full h-[100vh] flex items-center justify-center bg-[#364a63] flex-col gap-[30px]">
            <img src="/BigLogo.png" alt="" className='w-[250px] max-[650px]:w-[300px]' />
            <div className="w-[30%] h-[60vh] bg-white flex justify-center items-center flex-col max-[650px]:w-full p-5 shadow-lg">
                <h2 className="font-semibold text-[20px] mb-4">Welcome back to InvestifyEdge</h2>
                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full h-[50px] p-3 border border-gray-300 rounded outline-none"
                            required
                        />
                    </div>
                    <span className="w-[100%] flex flex-col gap-[10px] relative">
                        <label>Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="w-[100%] h-[40px] p-[10px] border border-[lightgrey] outline-none"
                        />
                        <span
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-[50px] cursor-pointer"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </span>
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        <label>Remember me</label>
                    </div>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full h-[50px] bg-[#364a63] text-white rounded flex items-center justify-center"
                    >
                        {isLoading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <p>Don't have an account? <span className="text-[#364a63] cursor-pointer" onClick={() => navigate('/signup')}>Create Account</span></p>
                    <p className="text-[12px] mt-2 cursor-pointer hover:text-red-500" onClick={() => navigate('/forgot-password')}>Forgot Password</p>
                </div>
            </div>
        </div>
    );
};

export default Login;
