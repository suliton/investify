import { BsArrowLeftShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Deposits = () => {
    const navigate = useNavigate()

    return (
        <div className="w-full flex items-center justify-center mt-[30px]">
            <div className="w-[90%] flex flex-col gap-[20px]">
                <span className="w-[100%] flex items-center" onClick={() => navigate('/dashboard')} >
                    <BsArrowLeftShort />
                    <p>Dashboard</p>
                </span>
                <p className="text-[32px] text-[#364a63]">Financial Service</p>
                <p className="w-[60%] leading-normal text-[#8492A6] max-[650px]:w-[100%]">
                    We offer investments to investifyEdge  members in various financial services. You can select any service that interest you the most to start your investment.
                    Please kindly note that the accrued interest on each financial service differ.
                </p>
                <div className="w-[50%] h-[250px] rounded-[8px] flex flex-col bg-white justify-center gap-[20px] max-[650px]:w-[100%]">
                    <button className="w-[180px] h-[50px] p-[10px] bg-[#264653] rounded-[8px] text-white ml-[50px]" onClick={() => navigate('/dashboard/real-estate')}>Real Estate Plans</button>
                    <button className="w-[150px] h-[50px] p-[10px] bg-[#264653] rounded-[8px] text-white ml-[50px]" onClick={() => navigate('/dashboard/crypto')}>Crypto Plans</button>
                </div>
            </div>
            {/* <Outlet /> */}
        </div>
    )
}

export default Deposits