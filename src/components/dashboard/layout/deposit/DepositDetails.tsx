import React, { useState } from "react";
import QRCode from "qrcode.react"; // You'll need to install this package
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDropzone } from 'react-dropzone';
import { useMutation } from "react-query";
import { completeDeposit } from "../../../../api/mutation";
import { IErrorResponse } from "../../../../interface";
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

interface LocationState {
    method: PaymentMethod;
    amount: string;
    plan: InvestmentPlan;
    percentage: string;
}

const DepositDetails: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const { method, amount, plan, percentage } = location.state as LocationState;
    const [file, setFile] = useState<File | null>(null);

    // const queryClient = useQueryClient()
    const { mutate, isLoading } = useMutation(completeDeposit, {
        onSuccess: (data) => {
            // console.log(data);
            // queryClient.invalidateQueries('transactionHistory')
            // queryClient.invalidateQueries('getDepositsHistory')
            toast.dismiss(loadingToastId);
            toast.success(data?.data?.message, { style: { textAlign: 'center', width: '100%' } })
            navigate('/dashboard')
        },
        onError: (error: IErrorResponse) => {
            // console.error(error?.response?.data?.error?.message || error?.message);
            toast.dismiss(loadingToastId);
            toast.error(error?.response?.data?.error?.message || error?.message, { style: { textAlign: 'center', width: '100%' } })
        }
    });

    const handleCopyClick = () => {
        navigator.clipboard.writeText(method.address)
            .then(() => {
                toast.success('Address copied to clipboard!');
            })
            .catch(() => {
                toast.error('Failed to copy address.');
            });
    };
    const onDrop = (acceptedFiles: File[]) => {
        const file = acceptedFiles[0];
        if (file) {
            setFile(file);
            toast.success(`File ${file.name} selected successfully!`)
        }
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    let loadingToastId: string;

    const handleCompletePayment = () => {
        if (!file) {
            toast.error('Please upload proof of payment before completing the payment.', { style: { textAlign: 'center', width: '100%' } })
            return;
        }
        const formData = new FormData();
        formData.append('amount', amount);
        formData.append('payment_method', method.name);
        formData.append('wallet_address', method.address);
        formData.append('payment_proof', file);
        formData.append('selected_plan', plan.name);
        formData.append('interest_percentage', percentage);

        loadingToastId = toast.loading('Waiting...');
        mutate(formData);
        console.log(formData);
        
    };
    return (
        <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8 mt-8">
            {/* Payment Method Header */}
            <div className="flex items-center justify-between bg-yellow-100 p-4 rounded-md mb-6">
                <span className="text-sm font-semibold text-yellow-600">Your payment method</span>
                <div className="flex items-center space-x-2">
                    {/* <img
                        src={method.img}
                        alt={method.name}
                        className="w-5 h-5"
                    /> */}
                    <span className="text-sm font-semibold text-yellow-600">{method.name}</span>
                </div>
            </div>

            {/* Plan Details */}
            <div className="mb-6">
                <h2 className="text-gray-800 font-semibold text-lg">
                    You are to make payment of <span className="text-purple-700">${amount}</span> using your selected payment method.
                </h2>
                <div className="mt-4">
                    <h3 className="text-gray-900 text-[20px]">Plan</h3>
                    <p className="text-[14px]">{plan.name}</p>
                    <p className="text-gray-600">
                       Interest Percentage: {plan.percentage}%
                    </p>
                    <p className="text-gray-500 text-sm">
                      Range:   Minimum Deposit {plan.minAmount} || Maximum Deposit {plan.maxAmount}
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-center mb-6">
                <div className="w-full">
                    <label htmlFor="paymentAddress" className="block text-gray-700 mb-2">
                        {method.name} Address:
                    </label>
                    <div className="flex items-center space-x-2">
                        <input
                            type="text"
                            id="paymentAddress"
                            readOnly
                            value={method.address}
                            className="w-full p-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none text-gray-600"
                        />
                        <button
                            className="px-4 py-2 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600"
                            onClick={handleCopyClick}
                        >
                            Copy
                        </button>
                    </div>
                    <p className="text-gray-500 text-sm mt-2">Network Type: {method.name.toLowerCase()}</p>
                </div>
                <div className="mt-4">
                    <QRCode value={method.address} />
                </div>
            </div>
            <div className="mb-6">
                <label htmlFor="proofOfPayment" className="block text-gray-700 mb-2">
                    Upload Proof of Payment:
                </label>
                <div {...getRootProps()} style={{ border: '2px dashed #ccc', padding: '20px', marginTop: '20px', textAlign: 'center', width: '100%', cursor: 'pointer' }}>
                    <input {...getInputProps()} />
                    <p>Drag & drop proof of payment here, or click to select</p>
                </div>
                {file && (
                    <p className="text-gray-500 text-sm mt-2">
                        {file.name}
                    </p>
                )}
            </div>

            {/* Submit Button */}
            <button className="w-full bg-purple-700 text-white p-3 rounded-md shadow-md hover:bg-purple-800" onClick={handleCompletePayment} disabled={isLoading}>
                {isLoading ? 'Processing...' : 'Complete Payment'}
            </button>
        </div>
    );
};

export default DepositDetails;
