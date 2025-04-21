import { RiDashboardFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { HiMiniUserGroup } from "react-icons/hi2";
import { BiLogOut } from "react-icons/bi";
import { FaLock, FaUser } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";

interface SideBarProps {
    setShowSidebar?: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideBar: React.FC<SideBarProps> = ({ setShowSidebar }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('client/token');
        navigate('/');
        if (setShowSidebar) {
            setShowSidebar(false);
        }
    };

    const handleNavigation = (path: string) => {
        navigate(path);
        if (setShowSidebar) {
            setShowSidebar(false);
        }
    };

    return (
        <div className="w-full h-full">
            <div className="w-full flex flex-col gap-[30px]">
                <img src="/BigLogo.png" alt="logo" className="w-[200px]" />
                <div className="w-full flex flex-col gap-[40px] max-[650px]:gap-[20px]">
                    <div className="w-full h-[80%] flex flex-col items-center gap-4">
                        <p className="w-[90%] text-[13px] text-white ">MEMBER ACCOUNT</p>
                        <span className="flex items-center gap-2 w-[90%] text-[#6e82a5] cursor-pointer hover:text-white" onClick={() => handleNavigation('/dashboard')}>
                            <RiDashboardFill />
                            <p>Dashboard</p>
                        </span>
                        <span className="flex items-center gap-2 w-[90%] text-[#6e82a5] cursor-pointer hover:text-white" onClick={() => handleNavigation('/dashboard/affiliate')}>
                            <HiMiniUserGroup />
                            <p>Affilliate</p>
                        </span>
                    </div>
                    <div className="w-full h-[80%] flex flex-col items-center gap-[25px]">
                        <p className="w-[90%] text-[13px] text-white">FINANCE</p>
                        <span className="flex items-center gap-2 w-[90%] text-[#6e82a5] cursor-pointer hover:text-white" onClick={() => handleNavigation('/dashboard/deposit-history')}>
                            <RiDashboardFill />
                            <p>Deposits</p>
                        </span>
                        <span className="flex items-center gap-2 w-[90%] text-[#6e82a5] cursor-pointer hover:text-white" onClick={() => handleNavigation('/dashboard/deposit')}>
                            <HiMiniUserGroup />
                            <p>Our Packages</p>
                        </span>
                        <span className="flex items-center gap-2 w-[90%] text-[#6e82a5] cursor-pointer hover:text-white" onClick={() => handleNavigation('/dashboard/withdraw-history')}>
                            <HiMiniUserGroup />
                            <p>Withdrawals</p>
                        </span>
                    </div>
                    <div className="w-full h-[80%] flex flex-col items-center gap-[25px]">
                        <p className="w-[90%] text-[13px] text-white">SETTINGS</p>
                        <span className="flex items-center gap-2 w-[90%] text-[#6e82a5] cursor-pointer hover:text-white" onClick={() => handleNavigation('/dashboard/user-profile')}>
                            <FaUser />
                            <p>Profile</p>
                        </span>
                        <span className="flex items-center gap-2 w-[90%] text-[#6e82a5] cursor-pointer hover:text-white" onClick={() => handleNavigation('/dashboard/update-wallet')}>
                            <FiSettings />
                            <p>Withdrawal Gateway</p>
                        </span>
                        <span className="flex items-center gap-2 w-[90%] text-[#6e82a5] cursor-pointer hover:text-white" onClick={() => handleNavigation('/dashboard/update-password')}>
                            <FaLock />
                            <p>Password</p>
                        </span>
                        <span className="flex items-center gap-2 w-[90%] text-[#6e82a5] cursor-pointer hover:text-white" onClick={handleLogout}>
                            <BiLogOut />
                            <p>Log out</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar
