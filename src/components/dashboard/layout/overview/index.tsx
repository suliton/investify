import { useNavigate } from "react-router-dom";
import TickerTap from "./Ticker-Tape"
import { IoCloudDownloadOutline, IoCloudUploadOutline } from "react-icons/io5";
import TradingViewWidget from "./TrandingViewWiddget";
import { useQuery } from "react-query";
import { getUser } from "../../../../api/query";
import { useState } from "react";
const { VITE_TOKEN_CLIENT } = import.meta.env;

const Overview = () => {
    const navigate = useNavigate()
    const [copied, setCopied] = useState(false)
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
    const total_balance = data?.data?.data?.total_balance || 0;
    const withdrawable_balance = data?.data?.data?.withdrawable_balance || 0;
    const total_invest = data?.data?.data?.total_invest || 0;
    const total_withdrawal = data?.data?.data?.total_withdrawal || 0

    const referral_code = data?.data?.data?.referral_code

    const referralLink = `https://investifyedge.com/${referral_code}`;

    const copyToClipboard = () => {
        navigator.clipboard.writeText(referralLink).then(() => {
            setCopied(true);  // Show feedback after copying
            setTimeout(() => setCopied(false), 3000);  // Reset after 3 seconds
        }).catch(err => {
            console.error("Failed to copy text: ", err);
        });
    };
    return (
        <div className="w-full h-[100%]  flex flex-col items-center overflow-auto">
            <div className="mt-[20px] w-[95%]">
                <TickerTap />
            </div>
            <div className="w-[95%] flex flex-wrap items-center p-[10px] max-[650px]:gap-[20px] max-[650px]:p-[0px] mb-[20px]">
                <div className="w-[65%] max-[650px]:w-[100%]">
                    <p className="text-[30px]">Dashboard</p>
                    <p>Welcome {firstName}!, what would you like to do today?</p>
                </div>
                <div className="w-[35%] flex items-center justify-end gap-[10px] max-[650px]:w-[100%] max-[650px]:justify-start">
                    <button
                        onClick={() => navigate('/dashboard/deposit')}
                        className="w-[100px] h-[40px] border text-[13px] flex items-center rounded-[4px] justify-center gap-[5px] "
                    >
                        Deposit <IoCloudDownloadOutline />
                    </button>
                    <button
                        onClick={() => navigate('withdraw')}
                        className="w-[100px] h-[40px] bg-[#182536] text-white rounded-[4px] text-[13px] flex items-center justify-center gap-[5px]"
                    >
                        Withdraw <IoCloudUploadOutline />
                    </button>
                </div>
            </div>
            <div className="w-[95%] flex flex-wrap  gap-[10px] justify-center mb-[20px]">
                <div className="w-[49%] h-[120px] bg-white flex rounded-[5px] p-[10px] max-[650px]:w-[45%] max-[500px]:w-[100%]">
                    <span className="w-[45%] ml-[10px] h-[100%] flex flex-col justify-center">
                        <p className="text-[16px] font-semibold text-[#364a63]">Account Balance</p>
                        <p className="text-[32px] font-medium text-[#364a63]">${withdrawable_balance}</p>
                    </span>
                    <span className="w-[40%]">

                    </span>
                </div>
                <div className="w-[49%] h-[120px] bg-white  rounded-[5px] max-[650px]:w-[45%] max-[500px]:w-[100%]">
                    <span className="w-[45%] ml-[10px] h-[100%] flex flex-col justify-center">
                        <p className="text-[16px] font-semibold text-[#364a63]">Total Deposit</p>
                        <p className="text-[32px] font-medium text-[#364a63]">${total_invest}</p>
                    </span>
                    <span className="w-[40%]">

                    </span>
                </div>
                <div className="w-[49%] h-[120px] bg-white  rounded-[5px] max-[650px]:w-[45%] max-[500px]:w-[100%]">
                    <span className="w-[45%] ml-[10px] h-[100%] flex flex-col justify-center">
                        <p className="text-[16px] font-semibold text-[#364a63]">Total Withdrawals</p>
                        <p className="text-[32px] font-medium text-[#364a63]">${total_withdrawal}</p>
                    </span>
                    <span className="w-[40%]">

                    </span>
                </div>
                <div className="w-[49%] h-[120px] bg-white  rounded-[5px] max-[650px]:w-[45%] max-[500px]:w-[100%]">
                    <span className="w-[45%] ml-[10px] h-[100%] flex flex-col justify-center">
                        <p className="text-[16px] font-semibold text-[#364a63]">Accumulated Interest</p>
                        <p className="text-[32px] font-medium text-[#364a63]">${total_balance}</p>
                    </span>
                    <span className="w-[40%]">

                    </span>
                </div>
            </div>
            <div className="w-[95%] flex gap-[20px] flex-col items-center justify-center bg-white p-[10px]">
                <span className="w-[95%]">
                    <p className="w-[95%] text-[18px] font-medium text-[#364a63]">Market Price</p>
                    <p className="w-[95%] text-[14px] text-[#364a63]">Live market prices as seen on trading view</p>
                </span>
                <TradingViewWidget />
            </div>
            <div className="w-[95%] mt-[30px] mb-[20px] flex flex-col gap-[10px]">
                <p className="text-[20px] text-[#364a63] text-bold max-[650px]:text-[16px]">
                    Invite members to InvestifyEdge and earn more
                </p>
                < p className=" max-[650px]:text-[14px]">
                    Your unique link you can use to invite more members to join you on InvestifyEdge. Click the button below to copy.
                </p>
                <div className="w-full flex flex-col gap-2">
                    <p>
                        Affiliate Link
                    </p>
                    <span className="w-[100%] h-[50px] border border-[lightgrey] flex items-center p-2 ">
                        <p>{referralLink}</p>
                    </span>
                </div>
                <button
                    onClick={copyToClipboard}
                    className="w-[200px] bg-[#364a63] h-[40px] text-white rounded-[4px] max-[650px]:w-[100%]"
                >
                    {copied ? "Copied!" : "Copy your affiliate link"}
                </button>
            </div>
        </div>
    )
}

export default Overview 