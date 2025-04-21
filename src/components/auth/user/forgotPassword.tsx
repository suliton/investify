import { useState } from "react";
import toast from "react-hot-toast";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { userForgetPassword } from "../../../api/mutation";
import { IErrorResponse, IResponseData } from "../../../interface";

const ForgotPassword = () => {
    const navigate = useNavigate();

    // State variable for email input
    const [email, setEmail] = useState('');

    const { mutate, isLoading } = useMutation(userForgetPassword, {
        onSuccess: async (data: IResponseData) => {
            toast.success(data?.data?.message);
            navigate('/login');
        },
        onError: (err: IErrorResponse) => {
            toast.error(err.response?.data?.message || 'Something went wrong');
        }
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        mutate(email );
    };

    return (
        <div className="w-full h-[100vh] flex items-center justify-center bg-[#364a63]">
            <div className="w-[30%] h-[60vh] bg-white flex justify-center items-center flex-col max-[650px]:w-full p-5 shadow-lg">
                <h2 className="font-semibold text-[20px] mb-4">Forgot your password</h2>
                <p className="text-center text-[14px]">Please Enter Your Email To Reset Your Password.</p>
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
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full h-[50px] bg-[#364a63] text-white rounded flex items-center justify-center"
                    >
                        {isLoading ? 'Sending...' : 'Send Reset Password Link'}
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <p>Remember Password? <span className="text-[#364a63] cursor-pointer" onClick={() => navigate('/login')}>Login</span></p>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
