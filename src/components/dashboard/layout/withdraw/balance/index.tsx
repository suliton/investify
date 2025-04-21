import { BsArrowLeftShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";
import { useMutation, useQueryClient } from 'react-query';
import { PaymentMethod, IErrorResponse } from "../../../../../interface";
import { withdrawBalance } from "../../../../../api/mutation";


const Balance = () => {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod | null>(null);
  const [amount, setAmount] = useState<string>('');
  const [walletAddress, setWalletAddress] = useState<string>('');
  
  const queryClient = useQueryClient();

  const paymentMethods: PaymentMethod[] = [
    { name: 'BITCOIN', img: '/bitcoin-btc-logo.png', address: '15vwsQoZQ8VjfpHL3gsw3Zbr3k4KCHSGUg' },
    { name: 'ETHERIUM', img: '/ethereum-eth-logo.png', address: '0x485c1576971481abfb8bd88342e5537144718008' },
    { name: 'USDT', img: '/usdt-logo.png', address: '0x485c1576971481abfb8bd88342e5537144718008' }
  ];

  // Mutation for handling withdrawal
  const mutation = useMutation(
    (data: { amount: number; payment_channel: string; wallet_address: string }) =>
      withdrawBalance(data),
    {
      onSuccess: () => {
        toast.success('Withdrawal successful!');
        queryClient.invalidateQueries('transactionHistory');
        queryClient.invalidateQueries('getWithdrawalHistory');
        setAmount('');
        setWalletAddress('');
        navigate('/dashboard')
      },
      onError: (error: IErrorResponse) => {
        toast.error(error?.response?.data?.message, { style: { textAlign: 'center', width: '100%' } });
      },
    }
  );

  const handlePaymentMethodClick = (method: PaymentMethod) => {
    setSelectedMethod(method);
    toast.success(`${method.name} is selected`);
  };

  const handleProceedClick = () => {
    if (selectedMethod && amount && walletAddress) {
      const amountNumber = parseFloat(amount);
      if (isNaN(amountNumber) || amountNumber <= 0) {
        toast.error('Please enter a valid amount.');
        return;
      }
      
      mutation.mutate({
        amount: amountNumber,
        payment_channel: selectedMethod.name,
        wallet_address: walletAddress
      });
    } else {
      toast.error('Please select a payment method, enter an amount, and provide a wallet address.');
    }
  };

  return (
    <div className="w-full mt-[40px] flex items-center justify-center">
      <div className="w-[90%] flex flex-col gap-[20px]">
        <span className="w-[100%] flex items-center cursor-pointer" onClick={() => navigate('/dashboard/withdraw')}>
          <BsArrowLeftShort />
          <p>Withdraw</p>
        </span>
        <p className="text-[32px] text-[#364a63]">Withdraw Balance</p>
        <div className="w-[50%] rounded-[8px] flex flex-col bg-white justify-center gap-[40px] max-[650px]:w-[100%] p-[20px]">
          <p className="w-[80%] leading-normal text-[#8492A6] max-[650px]:w-[100%]">
            Withdrawals take less than 24hrs to be authorized and completed.
          </p>
          <span className="w-[100%] flex flex-col gap-[10px]">
            <label>Enter Amount to withdraw($)</label>
            <input
              type="text"
              placeholder="Amount"
              className="w-[100%] h-[50px] border border-[lightgray] p-[10px] rounded-[6px] outline-none"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              disabled={mutation.isLoading}
            />
          </span>
          <div className="w-[100%] flex flex-col gap-[20px]">
            <p>Choose Payment Method from the list below</p>
            <div className="w-full flex flex-wrap gap-[10px]">
              {paymentMethods.map((method) => (
                <span
                  key={method.name}
                  className={`max-[650px]:w-[150px] w-[200px] h-[80px] flex items-center justify-center gap-[30px] bg-white shadow-lg rounded-[8px] cursor-pointer ${selectedMethod?.name === method.name ? 'border-2 border-green-500' : ''}`}
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
          <span className="w-[100%] flex flex-col gap-[10px]">
            <label>Enter Wallet Address</label>
            <input
              type="text"
              placeholder="Wallet Address"
              className="w-[100%] h-[50px] border border-[lightgray] p-[10px] rounded-[6px] outline-none"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              disabled={mutation.isLoading}
            />
            <p className="w-[80%] leading-normal text-[12px] text-[#8492A6] max-[650px]:w-[100%]">
              Please enter the correct wallet address to receive your funds.
            </p>
          </span>
          <div className="w-[100%]">
            <button
              className="w-[100%] h-[50px] text-white rounded-[8px] bg-[#6E00FF]"
              onClick={handleProceedClick}
              disabled={mutation.isLoading}
            >
              {mutation.isLoading ? 'Processing...' : 'Proceed to Payment'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;
