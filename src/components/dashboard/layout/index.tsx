import { useEffect, useState } from "react"
import { HiMenuAlt2 } from "react-icons/hi"
import { ImUser } from "react-icons/im"
import { Outlet } from "react-router-dom"
import { getUser } from "../../../api/query"
import { useQuery } from "react-query"
import SideBar from "../sidebar"
import { FaTimes } from "react-icons/fa"
const { VITE_TOKEN_CLIENT } = import.meta.env;

const Layout = () => {
    const [showSideBar, setShowSidebar] = useState<boolean>(false)
    const handleResize = () => {
        if (window.innerWidth >= 768) {
            setShowSidebar(false); 
        }
    };

    // Add event listener for window resize
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);  // Cleanup listener on component unmount
        };
    }, []);

    const {
        data
    } = useQuery(["getUser"], getUser, {
        enabled: !!localStorage.getItem(VITE_TOKEN_CLIENT),
        onSuccess: () => {
        },
        onError: () => {

        },
    });
    // console.log(data)
    const firstName = data?.data?.data?.first_name
    return (
        <div className="w-full h-full">
            <div className="w-[100%] h-[10%] shadow-lg  p-[10px] flex items-center max-[650px]:w-[100%]">
                <span className="w-[30%] max-[650px]:w-[50%]">
                    <HiMenuAlt2 className=" text-[30px] hidden max-[650px]:flex" onClick={() => setShowSidebar(!showSideBar)} />
                </span>
                {
                    showSideBar && (
                        <div className="absolute flex top-0 left-0 bg-[#364a6358] h-[100vh] w-[100%] overflow-hidden z-[100] min-[768px]:hidden">
                            <div className="w-[80%] mb-[10px] h-full bg-[#111D29] p-[10px]">
                                <SideBar setShowSidebar={setShowSidebar}/>
                            </div>
                            <div className="p-[10px] h-full w-[20%] flex justify-end  " onClick={() => setShowSidebar(!showSideBar)}>
                                <FaTimes className="text-[20px]" onClick={() => setShowSidebar(!showSideBar)}/>
                            </div>
                        </div>
                    )
                }
                <span className="w-[100%] flex justify-end items-center max-[650px]:w-[80%] gap-2 sticky">
                    <ImUser className="text-[25px]" />
                    <p className="text-[18px]">{firstName}</p>
                </span>
            </div>
            <div className="w-[100%] h-[90%] overflow-auto">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout