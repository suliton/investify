import { BsArrowLeftShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import { useMutation } from 'react-query';
import { IErrorResponse, IResponseData } from "../../../../interface";
import { userUpdatePassword } from "../../../../api/mutation";

interface PasswordUpdateData {
    old_password: string;
    new_password: string;
}

const UpdatePassword = () => {
    const navigate = useNavigate();
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    // Define mutation
    const { mutate, isLoading } = useMutation((data: PasswordUpdateData) => userUpdatePassword(data.old_password, data.new_password), {
        onSuccess: (data: IResponseData) => {
            toast.success(data?.data?.message);
            navigate('/dashboard');
        },
        onError: (error: IErrorResponse) => {
            toast.error(error?.response?.data?.message);
        },
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (newPassword !== confirmNewPassword) {
            toast.error('New password and confirm password do not match');
            return;
        }

        mutate({ old_password: oldPassword, new_password: newPassword });
    };

    return (
        <div className="w-full mt-[40px] flex items-center justify-center ">
            <div className="w-[90%] flex flex-col gap-[20px]">
                <span className="w-[100%] flex items-center cursor-pointer" onClick={() => navigate('/dashboard')}>
                    <BsArrowLeftShort />
                    <p>Dashboard</p>
                </span>
                <p className="text-[32px] text-[#364a63]">Password Reset</p>
                <p className="w-[80%] leading-normal text-[#8492A6] max-[650px]:w-[100%]">
                    Fill the form below to change your password
                </p>
                <form onSubmit={handleSubmit} className="w-[50%] rounded-[8px] flex flex-col bg-white justify-center gap-[40px] max-[650px]:w-[100%] p-[20px]">
                    <span className="w-[100%] flex flex-col gap-[10px]">
                        <label>Old Password</label>
                        <input
                            type="password"
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                            className="w-[60%] h-[50px] border border-[lightgray] p-[10px] rounded-[6px] outline-none"
                            required
                        />
                    </span>
                    <span className="w-[100%] flex flex-col gap-[10px]">
                        <label>New Password</label>
                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="w-[60%] h-[50px] border border-[lightgray] p-[10px] rounded-[6px] outline-none"
                            required
                        />
                    </span>
                    <span className="w-[100%] flex flex-col gap-[10px]">
                        <label>Confirm New Password</label>
                        <input
                            type="password"
                            value={confirmNewPassword}
                            onChange={(e) => setConfirmNewPassword(e.target.value)}
                            className="w-[60%] h-[50px] border border-[lightgray] p-[10px] rounded-[6px] outline-none"
                            required
                        />
                    </span>
                    <div className="w-[100%]">
                        <button
                            type="submit"
                            className="w-[60%] h-[50px] text-white rounded-[8px] bg-[#6E00FF]"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Updating Password...' : 'Update Password'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdatePassword;
