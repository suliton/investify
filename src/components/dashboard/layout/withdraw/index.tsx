import { BsArrowLeftShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Withdraw = () => {
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
                  You can withdraw your balance anytime but you can't withdraw your profit until the investment date is complete
                </p>
                <div className="w-[50%] h-[250px] rounded-[8px] flex flex-col bg-white justify-center gap-[20px] max-[650px]:w-[100%]">
                    <button className="w-[100px] h-[50px] p-[5px] bg-[#264653] rounded-[8px] text-white ml-[50px]" onClick={() => navigate('/dashboard/withdraw-profit')}>Profit</button>
                    <button className="w-[120px] h-[50px] p-[10px] bg-[#264653] rounded-[8px] text-white ml-[50px]" onClick={() => navigate('/dashboard/withdraw-balance')}>Balance</button>
                </div>
            </div>
            {/* <Outlet /> */}
        </div>
    )
}

export default Withdraw