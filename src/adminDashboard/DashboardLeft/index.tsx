
import { MdDashboard } from 'react-icons/md'
import './DashboardLeft.css'
// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCoins, FaUserFriends } from "react-icons/fa";
import { useEffect, useRef } from 'react';
export interface ToggleSidebar {
    isOpen?: boolean;
    setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}
const DashLeftMain = ({ isOpen, setIsOpen }: ToggleSidebar) => {
    const navigate = useNavigate()
    const sidebarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
                if (setIsOpen) {
                    setIsOpen(!isOpen);
                }
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, setIsOpen]);

    const handleNavigation = (path: string) => {
        navigate(path);
        if (setIsOpen) {
            setIsOpen(false);
        }
    };
    return (
        <div ref={sidebarRef} className="w-full h-full">
            <div className="w-full flex flex-col gap-[30px]">
                <img src="/BigLogo.png" alt="logo" className="w-[200px]" />
                <div className="w-full h-[80%] flex flex-col items-center gap-[50px]">
                    <span className="flex items-center gap-2 w-[90%] text-[#6e82a5] cursor-pointer hover:text-white" onClick={() => {
                        handleNavigation('/admin-dashboard')
                    }}>
                        <MdDashboard />
                        <p>Dashboard</p>
                    </span>
                    <span className="flex items-center gap-2 w-[90%] text-[#6e82a5] cursor-pointer hover:text-white" onClick={() => {
                        handleNavigation('/admin-dashboard/alltransaction')
                    }}>
                        <FaCoins />
                        <p>Transaction</p>
                    </span>
                    <span className="flex items-center gap-2 w-[90%] text-[#6e82a5] cursor-pointer hover:text-white" onClick={() => {
                        handleNavigation('/admin-dashboard/alluser')
                    }}>
                        <FaUserFriends />
                        <p>All User</p>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default DashLeftMain