import { BsArrowLeftShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import { ITransaction } from "../../../../interface";
import { getWithdrawalHistory } from "../../../../api/query";
import Table from "../../../utils/Table";

const WithdrawHistory = () => {
    const navigate = useNavigate();
    const [allTransaction, setAllTransaction] = useState<ITransaction[]>([]);

    const columns: Array<keyof typeof formattedData[0]> = [
        "Amount",
        "Payment Method",
        "Status",
        "Date",
      ];

    const { data, isLoading, isError } = useQuery(['getWithdrawalHistory'], getWithdrawalHistory, {
    });

    useEffect(() => {
        if (data?.data?.data) {
            // const reversedData = data?.data?.data?.reverse();
            setAllTransaction(data?.data?.data);
        }
    }, [data]);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (isError) {
        return <p>An error occurred while fetching the data.</p>;
    }

    const formattedData = allTransaction.map(transaction => ({
        "Amount": transaction?.amount || "N/A",
        "Payment Method": transaction?.payment_method,
        "Status": transaction.status,
        "Date": new Date(transaction?.createdAt).toLocaleDateString()
    }));

    return (
        <div className="w-full flex items-center justify-center mt-[50px]">
            <div className="w-[90%] flex flex-col gap-[20px]">
                <span className="w-[100%] flex items-center" onClick={() => navigate('/dashboard')}>
                    <BsArrowLeftShort />
                    <p>Dashboard</p>
                </span>
                <p className="text-[32px] text-[#364a63]">Withdraw History</p>
                <p className="w-[60%] leading-normal text-[#8492A6] max-[650px]:w-[100%]">
                    View your InvestifyEdge Deposit history here
                </p>
                <Table columns={columns} data={formattedData} />
            </div>
        </div>
    );
};

export default WithdrawHistory;
