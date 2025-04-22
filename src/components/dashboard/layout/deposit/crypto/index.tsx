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

const Crypto = () => {
    const navigate = useNavigate();
    const [amount, setAmount] = useState<string>('');
    const [selectedMethod, setSelectedMethod] = useState<PaymentMethod | null>(null);
    const [selectedPlan, setSelectedPlan] = useState<InvestmentPlan | null>(null);

   const paymentMethods: PaymentMethod[] = [
       { name: 'BITCOIN', img: '/bit.png', address: 'bc1q9h792w9e53tda85zzfr9qh8sdnu9q6zccptfj6' },
       { name: 'DOGECOIN', img: '/dogecoin.jpeg', address: 'DKPVGJDTtorF5k98eAZyvxnTgp87zCmWic' },
       { name: 'XRP', img: '/xrp.png', address: 'ru1q2W729V5xcZGwbAK2wD663EFjDr5bv' },
       { name: 'SOLANA', img: '/sol.jpeg', address: 'EQzDFKH34W8w1fjSGCwhJeDYwhsSBfCYR3JXCThv1ovu' }
     ];

    const plans: InvestmentPlan[] = [
        { name: 'BASIC', minAmount: 1000,maxAmount: 9999,percentage: '50' },
        { name: 'PLATINUM', minAmount: 10000, maxAmount: 49999, percentage: '150' },
        { name: 'SILVER', minAmount: 50000, maxAmount: 99999, percentage: '300' },
        { name: 'GOLD', minAmount: 100000, maxAmount: 5000000, percentage: '400' }
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
            const amountValue = parseFloat(amount); // Convert string to a number
            if (amountValue < selectedPlan.minAmount || amountValue > selectedPlan.maxAmount) {
                toast.error(`Please enter an amount between ${selectedPlan.minAmount} and ${selectedPlan.maxAmount} for the ${selectedPlan.name} plan.`);
                return; // Stop the function if validation fails
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
                                <p className="text-[12px] text-[#8492a6]"> Profit Percentage {plan.percentage}% <br /> Minimum Deposit {plan.minAmount} ; Maximum Deposit {plan.maxAmount}</p>
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
                                    className={`w-[200px] h-[80px] flex items-center justify-center gap-[30px] bg-white shadow-lg rounded-[8px] cursor-pointer ${selectedMethod?.name === method.name ? 'border-2 border-green-500' : ''}`}
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
                            className="w-[60%] h-[50px] text-white rounded-[8px] bg-[#6E00FF]"
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

export default Crypto;
