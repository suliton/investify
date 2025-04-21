import { BsArrowLeftShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Table from "../../../../utils/Table";
import { useQuery } from "react-query";
import { getDepositsHistory } from "../../../../../api/query";
import { useEffect, useState } from "react";
import { ITransaction } from "../../../../../interface";

const DepositHistory = () => {
    const navigate = useNavigate();
    const [allTransaction, setAllTransaction] = useState<ITransaction[]>([]);

    const columns: Array<keyof typeof formattedData[0]> = [
        "Amount",
        "Payment Method",
        "Status",
        "Date",
      ];

    const { data, isLoading, isError } = useQuery(['getDepositsHistory'], getDepositsHistory, {
    });

    useEffect(() => {
        if (data?.data?.data) {
            const reversedData = data?.data?.data?.reverse();
            setAllTransaction(reversedData);
        }
    }, [data]);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (isError) {
        return <p>An error occurred while fetching the data.</p>;
    }

    const formattedData = allTransaction.map(transaction => ({
        "Amount": transaction.investment?.amount || "N/A",
        "Payment Method": transaction.payment_method,
        "Status": transaction.status,
        "Date": new Date(transaction.createdAt).toLocaleDateString()
    }));

    return (
        <div className="w-full flex items-center justify-center mt-[50px]">
            <div className="w-[90%] flex flex-col gap-[20px]">
                <span className="w-[100%] flex items-center" onClick={() => navigate('/dashboard')}>
                    <BsArrowLeftShort />
                    <p>Dashboard</p>
                </span>
                <p className="text-[32px] text-[#364a63]">Deposit History</p>
                <p className="w-[60%] leading-normal text-[#8492A6] max-[650px]:w-[100%]">
                    View your InvestifyEdge Deposit history here
                </p>
                <Table columns={columns} data={formattedData} rowsPerPage={5}/>
            </div>
        </div>
    );
};

export default DepositHistory;
