import { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

interface PaymentMethod {
    name: string;
    img: string;
    address: string;
}

interface InvestmentPlan {
    name: string;
    minAmount: number;
    maxAmount: number;
    percentage: string;
}

const RealEstate = () => {
    const navigate = useNavigate();
    const [amount, setAmount] = useState<string>('');
    const [selectedMethod, setSelectedMethod] = useState<PaymentMethod | null>(null);
    const [selectedPlan, setSelectedPlan] = useState<InvestmentPlan | null>(null);

    const paymentMethods: PaymentMethod[] = [
        {
            name: 'BITCOIN',
            img: '/bitcoin-btc-logo.png',
            address: '15vwsQoZQ8VjfpHL3gsw3Zbr3k4KCHSGUg'
        },
        {
            name: 'ETHERIUM',
            img: '/ethereum-eth-logo.png',
            address: '0x485c1576971481abfb8bd88342e5537144718008'
        },
        {
            name: 'USDT',
            img: '/usdt-logo.png',
            address: '0x485c1576971481abfb8bd88342e5537144718008'
        }
    ];

    const plans: InvestmentPlan[] = [
        { name: 'BASIC', minAmount: 1000, maxAmount: 10000, percentage: '50' },
        { name: 'PLATINUM', minAmount: 100000, maxAmount: 10000000, percentage: '150' },
        { name: 'SILVER', minAmount: 5000, maxAmount: 49999, percentage: '300' },
        { name: 'GOLD', minAmount: 50000, maxAmount: 99999, percentage: '400' }
    ];

    const handlePaymentMethodClick = (method: PaymentMethod) => {
        setSelectedMethod(method);
        toast.success(`${method.name} is selected`);
    };

    const handlePlanClick = (plan: InvestmentPlan) => {
        setSelectedPlan(plan);
        toast.success(`${plan.name} is selected`);
    };

    const handleProceedClick = () => {
        if (selectedPlan && amount) {
            const amountValue = parseFloat(amount); 
            if (amountValue < selectedPlan.minAmount || amountValue > selectedPlan.maxAmount) {
                toast.error(`Please enter an amount between ${selectedPlan.minAmount} and ${selectedPlan.maxAmount} for the ${selectedPlan.name} plan.`);
                return; 
            }
        }
    
        if (selectedMethod && selectedPlan && amount) {
            navigate('/dashboard/deposit-details', {
                state: { 
                    method: selectedMethod, 
                    plan: selectedPlan, 
                    amount,  
                    percentage: selectedPlan.percentage
                }
            });
        } else {
            alert('Please select a plan, a payment method, and enter an amount.');
        }
    };

    return (
        <div className="w-full flex items-center justify-center mt-[30px]">
            <div className="w-[90%] flex flex-col gap-[20px]">
                <span className="w-[100%] flex items-center cursor-pointer" onClick={() => navigate('/dashboard')}>
                    <BsArrowLeftShort />
                    <p>Deposit</p>
                </span>
                <p className="text-[32px] text-[#364a63]">Crypto Plans</p>
                <p className="w-[60%] leading-normal text-[#8492A6] max-[650px]:w-[100%]">
                    You can choose to invest in any plan. Kindly note that tax and all related fees have been added automatically to the minimum
                    investment amount. You do not have to bother about paying them separately.
                </p>

                <div className="w-[50%] rounded-[8px] flex flex-col bg-white justify-center gap-[20px] max-[650px]:w-[100%] p-[20px]">
                    <p>Select Plan:</p>
                    <div className="w-[100%] flex flex-col gap-[25px]">
                        {plans.map((plan) => (
                            <div
                                key={plan.name}
                                className={`w-full border-b border-b-[lightgrey] flex flex-col gap-[20px] ${selectedPlan?.name === plan?.name ? 'border-2 border-[#6E00FF]' : ''}`}
                                onClick={() => handlePlanClick(plan)}
                            >
                                <span className="flex items-center gap-[5px]">
                                    <input 
                                        type="radio" 
                                        name="plan" 
                                        checked={selectedPlan?.name === plan.name}
                                        readOnly 
                                    />
                                    <p className="text-[#8492a6]">{plan.name}</p>
                                </span>
                                <p className="text-[12px] text-[#8492a6]">Profit Percentage {plan.percentage}%<br /> Minimum Deposit {plan.minAmount} ; Maximum Deposit {plan.maxAmount}</p>
                            </div>
                        ))}
                    </div>

                    <div className="w-[100%] mt-[30px] flex flex-col gap-[10px]">
                        <label>Enter Amount</label>
                        <input
                            type="number"
                            placeholder="Enter Amount"
                            className="w-[80%] h-[50px] border border-[lightgray] p-[10px] rounded-[6px] outline-none max-[650px]:w-[100%]"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>

                    <div className="w-[100%] flex flex-col gap-[20px]">
                        <p>Choose Payment Method from the list below</p>
                        <div className="w-full flex flex-wrap gap-[10px]">
                            {paymentMethods.map((method) => (
                                <span
                                    key={method.name}
                                    className={`w-[200px] h-[80px] max-[650px]:w-[100%] flex items-center justify-center gap-[30px] bg-white shadow-lg rounded-[8px] cursor-pointer ${selectedMethod?.name === method.name ? 'border-2 border-green-500' : ''}`}
                                    onClick={() => handlePaymentMethodClick(method)}
                                >
                                    <p>{method.name}</p>
                                    <input
                                        type="checkbox"
                                        checked={selectedMethod?.name === method.name}
                                        readOnly
                                    />
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="w-[100%]">
                        <button
                            className="w-[60%] max-[650px]:w-[100%] h-[50px] text-white rounded-[8px] bg-[#6E00FF]"
                            onClick={handleProceedClick}
                        >
                            Proceed to Payment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RealEstate;
