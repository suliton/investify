import { BsArrowLeftShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const GateWay = () => {
    const navigate = useNavigate();

    const [bitcoinAddress, setBitcoinAddress] = useState('');
    const [ethereumAddress, setEthereumAddress] = useState('');
    const [usdtAddress, setUsdtAddress] = useState('');
    const [solAddress, setSolAddress] = useState('');

    useEffect(() => {
        const savedBitcoinAddress = localStorage.getItem('bitcoinAddress');
        const savedEthereumAddress = localStorage.getItem('ethereumAddress');
        const savedUsdtAddress = localStorage.getItem('usdtAddress');
        const savedSolAddress = localStorage.getItem('solAddress');
        

        if (savedBitcoinAddress) setBitcoinAddress(savedBitcoinAddress);
        if (savedEthereumAddress) setEthereumAddress(savedEthereumAddress);
        if (savedUsdtAddress) setUsdtAddress(savedUsdtAddress);
        if (savedSolAddress) setSolAddress(savedSolAddress);
    }, []);


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        localStorage.setItem('bitcoinAddress', bitcoinAddress);
        localStorage.setItem('ethereumAddress', ethereumAddress);
        localStorage.setItem('usdtAddress', usdtAddress);
        localStorage.setItem('solAddress', solAddress);

        toast.success('Wallet address saved successfully ')
    };

    return (
        <div className="w-full mt-[40px] flex items-center justify-center ">
            <div className="w-[90%] flex flex-col gap-[20px]">
                <span className="w-[100%] flex items-center cursor-pointer" onClick={() => navigate('/dashboard')}>
                    <BsArrowLeftShort />
                    <p>Dashboard</p>
                </span>
                <p className="text-[32px] text-[#364a63]">Add Wallet Address</p>
                <p className="w-[80%] leading-normal text-[#8492A6] max-[650px]:w-[100%]">
                    Fill the form below to add your wallet addresses.
                </p>
                <form 
                    className="w-[50%] rounded-[8px] flex flex-col bg-white justify-center gap-[40px] max-[650px]:w-[100%] p-[20px]"
                    onSubmit={handleSubmit}
                >
                    <span className="w-[100%] flex flex-col gap-[10px]">
                        <label>Bitcoin Address</label>
                        <input
                            type="text"
                            className="w-[60%] h-[50px] border border-[lightgray] p-[10px] rounded-[6px] outline-none"
                            value={bitcoinAddress}
                            onChange={(e) => setBitcoinAddress(e.target.value)}
                            required
                        />
                        <p className="w-[80%] leading-normal text-[12px] text-[#8492A6] max-[650px]:w-[100%]">
                            Enter your Bitcoin Address that will be used to withdraw your funds.
                        </p>
                    </span>
                    <span className="w-[100%] flex flex-col gap-[10px]">
                        <label>Ethereum Address</label>
                        <input
                            type="text"
                            className="w-[60%] h-[50px] border border-[lightgray] p-[10px] rounded-[6px] outline-none"
                            value={ethereumAddress}
                            onChange={(e) => setEthereumAddress(e.target.value)}
                            required
                        />
                        <p className="w-[80%] leading-normal text-[12px] text-[#8492A6] max-[650px]:w-[100%]">
                            Enter your Ethereum Address that will be used to withdraw your funds.
                        </p>
                    </span>
                    <span className="w-[100%] flex flex-col gap-[10px]">
                        <label>USDT Address</label>
                        <input
                            type="text"
                            className="w-[60%] h-[50px] border border-[lightgray] p-[10px] rounded-[6px] outline-none"
                            value={usdtAddress}
                            onChange={(e) => setUsdtAddress(e.target.value)}
                            required
                        />
                        <p className="w-[80%] leading-normal text-[12px] text-[#8492A6] max-[650px]:w-[100%]">
                            Enter your USDT Address that will be used to withdraw your funds.
                        </p>
                    </span>
                    <div className="w-[100%]">
                        <button
                            type="submit"
                            className="w-[60%] h-[50px] text-white rounded-[8px] bg-[#6E00FF]"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default GateWay;
