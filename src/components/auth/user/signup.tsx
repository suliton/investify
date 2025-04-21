import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from 'react-query';
import { userSignup } from "../../../api/mutation";
import toast from "react-hot-toast";
import { IErrorResponse } from "../../../interface";
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const CreateAccount = () => {
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [referralCode, setReferralCode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('')
    const [showPassword, setShowPassword] = useState(false);

    const { mutate, isLoading } = useMutation(userSignup, {
        onSuccess: async () => {
            navigate('/verify');
        },
        onError: (err: IErrorResponse) => {
            console.log(err);

            toast.error(err?.response?.data?.message);
        }
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const userData = {
            firstName,
            lastName,
            email,
            password,
            referralCode,
            phoneNumber
        };

        mutate(userData);
    };

    return (
        <div className="w-full h-[] flex items-center justify-center bg-[#364a63] overflow-scroll flex-col gap-[10px]">
            <img src="/BigLogo.png" alt="" className='w-[250px] max-[650px]:w-[200px] mt-[20px]' />
            <div className="w-[40%] p-[20px] bg-white flex justify-center items-center flex-col max-[650px]:w-[100%] gap-4 mb-[20px]">

                <span className="w-[100%] flex flex-col gap-[10px]">
                    <p className="text-[26px]">Become a Member</p>
                    <p className="text-[16px]">Complete the form to become a investifyEdge  member</p>
                </span>
                <form className="w-[100%] flex flex-col gap-[10px]" onSubmit={handleSubmit}>
                    <span className="w-[100%] flex flex-col gap-[10px]">
                        <label>First Name</label>
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="First Name"
                            className="w-[100%] h-[40px] p-[10px] border border-[lightgrey]  outline-none text-[14px]"
                            required
                        />
                    </span>
                    <span className="w-[100%] flex flex-col gap-[10px]">
                        <label>Last Name</label>
                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Last Name"
                            className="w-[100%] h-[40px] p-[10px] border border-[lightgrey]  outline-none text-[14px]"
                            required
                        />
                    </span>
                    <span className="w-[100%] flex flex-col gap-[10px]">
                        <label>Email Address</label>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            className="w-[100%] h-[40px] p-[10px] border border-[lightgrey]  outline-none text-[14px]"
                            required
                        />
                    </span>
                    <span className="w-[100%] flex flex-col gap-[10px]">
                        <label>Phone Number</label>
                        <input
                            type="text"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            placeholder="Phone Number"
                            className="w-[100%] h-[40px] p-[10px] border border-[lightgrey]  outline-none text-[14px]"
                            required
                        />
                    </span>
                    <span className="w-[100%] flex flex-col gap-[10px] relative">
                        <label>Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="w-[100%] h-[40px] p-[10px] border border-[lightgrey] outline-none text-[14px]"
                        />
                        <span
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-[50px] cursor-pointer"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </span>
                    <span className="w-[100%] flex flex-col gap-[10px]">
                        <label>Referral Code</label>
                        <input
                            type="text"
                            value={referralCode}
                            onChange={(e) => setReferralCode(e.target.value)}
                            placeholder="(optional)"
                            className="w-[100%] h-[40px] p-[10px] border border-[lightgrey]  outline-none text-[14px]"
                        />
                    </span>
                    <span className="w-[100%] flex flex-col gap-[10px]">
                        <button
                            type="submit"
                            className="w-[100%] h-[50px] p-[10px] bg-[#364a63] text-white rounded-[4px]"
                        >
                            {isLoading ? 'Creating Account...' : 'Create Account'}
                        </button>
                    </span>
                </form>
                <span className="w-full flex gap-1 items-center justify-center">
                    <p>Already have an account?</p>
                    <p className="text-[#364a63] cursor-pointer text-[14px]" onClick={() => navigate('/login')}>Login</p>
                </span>
            </div>
        </div>
    );
};

export default CreateAccount;
