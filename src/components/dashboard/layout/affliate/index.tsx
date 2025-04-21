import { BsArrowLeftShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Table from "../../../utils/Table";
import { useQuery } from "react-query";
import { getAffiliatesHistory } from "../../../../api/query";
import { useEffect, useState } from "react";

interface Referral {
  "Client Name": string;
  "Ref Code": string;
  Parent: string;
  "Client Status": string;
  "Date Registered": string;
}

const Affliate = () => {
  const [allReferral, setAllReferral] = useState<Referral[]>([]);
  const navigate = useNavigate();


  const { data, isLoading, isError } = useQuery(['getAffiliatesHistory'], getAffiliatesHistory, {});

  useEffect(() => {
    if (data?.data?.data) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const formattedData = data.data.data.map((referral: any) => ({
        "Client Name": `${referral.first_name} ${referral.last_name}`,
        "Ref Code": "Level 1",
        Parent: referral.referral_code || "Unknown", 
        "Client Status": referral.isVerified ? "Active" : "Not Active",
        "Date Registered": new Date(referral.createdAt).toLocaleDateString(),
      }));

      setAllReferral(formattedData);
    }
  }, [data]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>An error occurred while fetching the data.</p>;
  }

  // Define columns
  const columns: Array<keyof Referral> = [
    "Client Name",
    "Ref Code",
    "Parent",
    "Client Status",
    "Date Registered",
  ];

  return (
    <div className="w-full flex items-center justify-center mt-[50px]">
      <div className="w-[90%] flex flex-col gap-[20px] ">
        <span className="w-[100%] flex items-center" onClick={() => navigate('/dashboard')}>
          <BsArrowLeftShort />
          <p>Dashboard</p>
        </span>
        <p className="text-[32px] text-[#364a63]">Referral</p>
        <p className="w-[60%] leading-normal text-[#8492A6] max-[650px]:w-[100%]">
          Grow your InvestifyEdge network by inviting your friends and family to join you.
        </p>

        <Table columns={columns} data={allReferral} />
      </div>
    </div>
  );
};

export default Affliate;
