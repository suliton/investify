import DashLeftMain from './DashboardLeft'
import Layout from './layout'

const AdminDashboard = () => {
    return (
        <div className="w-[100%] flex bg-[white]">
            <div className="w-[100%] bg-[white] flex">
                <div className="w-[15%] h-[100vh] bg-[#182536] p-[10px] text-white max-[650px]:hidden">
                    <DashLeftMain />
                </div>
                <div className="w-[85%]  flex justify-center max-[650px]:ml-[0px] max-[650px]:w-[100%]">
                    <div className="w-[100%] h-[100vh] bg-[#F5F6FA] ">
                        <Layout/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard