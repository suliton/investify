import { useEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { getAllAdminTransaction } from '../../../api/query';
import { confirmTransaction } from '../../../api/mutation';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { IAllTransaction, IErrorResponse } from '../../../interface';

const AdminTransactionHistory = () => {
    const navigate = useNavigate();
    const [allTransaction, setAllTransaction] = useState<IAllTransaction[]>([]);
    const [loadingTransactionId, setLoadingTransactionId] = useState<string | null>(null); // Track loading state for each transaction

    const { data, isLoading, isError } = useQuery(['getAllAdminTransaction'], getAllAdminTransaction, {
        onError: (err: IErrorResponse) => {
            if (err?.response?.status === 401) {
                navigate('/admin-login');
                toast.error(err?.response?.data?.message);
            }
        }
    });

    const { mutate } = useMutation(confirmTransaction, {
        onSuccess: (data) => {
            toast.success(data?.data?.message);
            setLoadingTransactionId(null); // Reset loading state
        },
        onError: (error: IErrorResponse) => {
            toast.error(error?.response?.data?.message);
            setLoadingTransactionId(null); // Reset loading state on error
        },
    });

    useEffect(() => {
        if (data?.data?.data) {
            setAllTransaction(data.data.data);
        }
    }, [data]);

    const handleConfirm = (transactionId: string) => {
        setLoadingTransactionId(transactionId); // Set the transaction as loading
        mutate(transactionId);
    };

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (isError) {
        return <p>An error occurred while fetching the data.</p>;
    }

    return (
        <div className="AllUser">
            {allTransaction.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Date of Deposit</th>
                            <th>Payment Method</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allTransaction.map((transaction: IAllTransaction) => (
                            <tr key={transaction._id}>
                                <td data-label="Amount">{transaction.withdrawable_balance}</td>
                                <td data-label="Status">{transaction.status}</td>
                                <td data-label="Date of Deposit">{new Date(transaction.createdAt).toLocaleDateString()}</td>
                                <td data-label="Payment Method">{transaction.payment_method}</td>
                                <td data-label="Actions">
                                    <button 
                                        onClick={() => handleConfirm(transaction._id)} 
                                        disabled={transaction.status === 'completed' || loadingTransactionId === transaction._id} 
                                        style={{ backgroundColor: '#182536', padding: '8px', color: 'white' }}
                                    >
                                        {loadingTransactionId === transaction._id ? 'Loading...' : transaction.status === 'completed' ? 'Payment Confirmed' : 'Confirm'}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No transactions found.</p>
            )}
        </div>
    );
};

export default AdminTransactionHistory;
