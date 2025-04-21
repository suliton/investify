import { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { verifyUser } from "../../../api/mutation";
import { IErrorResponse } from "../../../interface";
import toast from "react-hot-toast";

const Verify = () => {
    const navigate = useNavigate();
    // State variable for verification code input
    const [verificationCode, setVerificationCode] = useState('');

    // React-query mutation hook
    const { mutate, isLoading } = useMutation(verifyUser, {
        onSuccess: async () => {
            toast.success('Account verified successfully!');
            navigate('/login');
        },
        onError: (err: IErrorResponse) => {
            toast.error(err.response?.data?.message || 'Verification failed');
        }
    });

    const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const code = e.target.value;
        setVerificationCode(code);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const userData = {
            verifyCode: parseInt(verificationCode)
        };
        mutate(userData);
    };

    return (
        <div className="w-full flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-[30%] h-[60vh] bg-white flex justify-center items-center flex-col max-[650px]:w-full p-5 shadow-lg">
                <h2 className="font-semibold text-[20px] mb-4">Verify your account</h2>
                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label>Verification code</label>
                        <input
                            type="text"
                            placeholder="Verification code"
                            value={verificationCode}
                            onChange={handleCodeChange}
                            className="w-full h-[50px] p-3 border border-gray-300 rounded outline-none"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full h-[50px] bg-[#364a63] text-white rounded flex items-center justify-center"
                    >
                        {isLoading ? 'Verifying...' : 'Verify'}
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

export default Verify;
