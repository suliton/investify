import SideBar from "./sidebar";
import Layout from "./layout";


const DashboardMain = () => {
    return (
        <div className="w-[100%] flex bg-[white]">
            <div className="w-[20%] bg-[white] max-[650px]:hidden">
                <div className="w-[100%] h-[100vh] bg-[#182536] p-[10px] text-white">
                    <SideBar />
                </div>
            </div>
            <div className="w-[80%]  flex justify-center max-[650px]:ml-[0px] max-[650px]:w-[100%]">
                <div className="w-[100%] h-[100vh] bg-[#F5F6FA] ">
                    <Layout />
                </div>
            </div>
        </div>
    );
};

export default DashboardMain;
