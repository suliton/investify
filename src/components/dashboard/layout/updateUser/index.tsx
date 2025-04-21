import { BsArrowLeftShort } from "react-icons/bs"
import { useNavigate } from "react-router-dom";

const UpdateUserProfile = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full mt-[40px] flex items-center justify-center ">
            <div className="w-[90%] flex flex-col gap-[20px] mb-[30px]">
                <span className="w-[100%] flex items-center cursor-pointer" onClick={() => navigate('/dashboard')}>
                    <BsArrowLeftShort />
                    <p>Dashboard</p>
                </span>
                <p className="text-[32px] text-[#364a63]">Update profile</p>
                <p className="w-[80%] leading-normal text-[#8492A6] max-[650px]:w-[100%]">
                    Ensure that your profile is up to date, complete the neccessary information and submit.
                </p>

                <form className="w-[50%] rounded-[8px] flex flex-col bg-white justify-center gap-[30px] max-[650px]:w-[100%] p-[20px]">
                    <span className="w-[100%] flex flex-col gap-[10px]">
                        <label>Email</label>
                        <input
                            type="password"
                            className="w-[90%] h-[50px] border border-[lightgray] p-[10px] rounded-[6px] outline-none"
                            required
                        />
                    </span>
                    <span className="w-[100%] flex flex-col gap-[10px]">
                        <label>Full name</label>
                        <input
                            type="password"
                            className="w-[90%] h-[50px] border border-[lightgray] p-[10px] rounded-[6px] outline-none"
                            required
                        />
                    </span>
                    <span className="w-[100%] flex flex-col gap-[10px]">
                        <label></label>
                        <input
                            type="password"
                            className="w-[90%] h-[50px] border border-[lightgray] p-[10px] rounded-[6px] outline-none"
                            required
                        />
                    </span>
                    <span className="w-[100%] flex flex-col gap-[10px]">
                        <label>Confirm New Password</label>
                        <input
                            type="password"
                            className="w-[90%] h-[50px] border border-[lightgray] p-[10px] rounded-[6px] outline-none"
                            required
                        />
                    </span>
                    <span className="w-[100%] flex flex-col gap-[10px]">
                        <label>Confirm New Password</label>
                        <input
                            type="password"
                            className="w-[90%] h-[50px] border border-[lightgray] p-[10px] rounded-[6px] outline-none"
                            required
                        />
                    </span>
                    <div className="w-[100%]">
                        <button
                            type="submit"
                            className="w-[60%] h-[50px] text-white rounded-[8px] bg-[#6E00FF]"
                        >
                            Update Password
                        </button>
                    </div>
                </form>
                <div></div>
            </div>
        </div>
    )
}

export default UpdateUserProfile
