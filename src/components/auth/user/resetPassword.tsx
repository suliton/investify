import { useState } from "react";
import toast from "react-hot-toast";
import { useMutation } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { userResetPassword } from "../../../api/mutation";
import { IErrorResponse } from "../../../interface";

const ResetPassword = () => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    // State variable for password input
    const [password, setPassword] = useState<string>('');

    const { mutate, isLoading } = useMutation(userResetPassword, {
        onSuccess: async () => {
            toast.success('Password reset successfully');
            navigate('/login');
        },
        onError: (err: IErrorResponse) => {
            toast.error(err.response?.data?.message || 'Something went wrong');
        }
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (id && password) {
            mutate({ id, password });
        }
    };

    return (
        <div className="w-full h-[100vh] flex items-center justify-center bg-[#364a63]">
            <div className="w-[30%] h-[60vh] bg-white flex justify-center items-center flex-col max-[650px]:w-full p-5 shadow-lg">
                <h2 className="font-semibold text-[20px] mb-4">Reset your password</h2>
                <p>Please enter your new password below.</p>
                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label>New Password</label>
                        <input
                            type="password"
                            placeholder="Enter new password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full h-[50px] p-3 border border-gray-300 rounded outline-none"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full h-[50px] bg-[#364a63] text-white rounded flex items-center justify-center"
                    >
                        {isLoading ? 'Resetting...' : 'Reset Password'}
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <p>Remember Password? <span className="text-[#364a63] cursor-pointer" onClick={() => navigate('/login')}>Login</span></p>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
