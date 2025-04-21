import { FaUserFriends } from 'react-icons/fa'
import { MdPendingActions } from "react-icons/md";
import { PiHandDepositFill, PiHandWithdrawFill } from 'react-icons/pi'
import { RiFilePaper2Fill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import './AdminOverview.css'
import { getAllDeposit, getAllPendingDeposit, getAllUser } from '../../../api/query';
import { useQuery } from 'react-query';

import toast from 'react-hot-toast';
import { IAllUser, IErrorResponse } from '../../../interface';
import TradingViewWidget from '../../../components/dashboard/layout/overview/TrandingViewWiddget';


const AdminOverview = () => {
  const navigate = useNavigate();
  const handleUserClick = (userId: string) => {
    navigate(`/admin-dashboard/manage-user/${userId}`);
  }
  const { data } = useQuery(["getalluser"], getAllUser, {
    onError: (err: IErrorResponse) => {
      if (err?.response?.status === 401) {
        navigate('/admin-login')
        toast.error(err?.response?.data?.message)
      }
    }
  })
  const { data: PendinDeopistData } = useQuery(["getAllPendingDeposit"], getAllPendingDeposit)
  const { data: AllDepositData } = useQuery(["getAllDeposit"], getAllDeposit)


  const allUser = data?.data?.users
  const totalUSer = data?.data?.total_users
  const pendingDeposit = PendinDeopistData?.data?.data?.toFixed(0)
  const allDeposit = AllDepositData?.data?.data?.toFixed(0)
  // console.log(pendingDeposit)
  return (
    <div className="AdminOverviewMain">
      <div className="AdminOverviewCardWrap">
        <div className="AdminOverviewCard" onClick={() => navigate('/admin-dashboard/alluser')}>
          <span className='AdminOverviewCardIconWrap' style={{ backgroundColor: '#eef715' }}>
            <FaUserFriends className='AdminOverviewCardIcon' />
          </span>
          <span className='AdminOverviewCardTextWrap' >
            <p>Total user</p>
            <p>{totalUSer}</p>
          </span>
        </div>
        <div className="AdminOverviewCard">
          <span className='AdminOverviewCardIconWrap' style={{ backgroundColor: '#06125c' }}>
            <PiHandWithdrawFill className='AdminOverviewCardIcon' />
          </span>
          <span className='AdminOverviewCardTextWrap'>
            <p>Total Withdrawals</p>
            <p>$ 0.00</p>
          </span>
        </div>
        <div className="AdminOverviewCard">
          <span className='AdminOverviewCardIconWrap' style={{ backgroundColor: '#051d72' }}>
            <PiHandDepositFill className='AdminOverviewCardIcon' />
          </span>
          <span className='AdminOverviewCardTextWrap'>
            <p>Total Deposit</p>
            <p>$ {allDeposit}.00</p>
          </span>
        </div>
        <div className="AdminOverviewCard">
          <span className='AdminOverviewCardIconWrap' style={{ backgroundColor: '#11218f' }}>
            <MdPendingActions className='AdminOverviewCardIcon' />
          </span>
          <span className='AdminOverviewCardTextWrap'>
            <p>Pending Deposits</p>
            <p>$ {pendingDeposit}.00</p>
          </span>
        </div>
        <div className="AdminOverviewCard">
          <span className='AdminOverviewCardIconWrap' style={{ backgroundColor: '#6b7e03' }}>
            <RiFilePaper2Fill className='AdminOverviewCardIcon' />
          </span>
          <span className='AdminOverviewCardTextWrap'>
            <p>Active user</p>
            <p>{totalUSer}</p>
          </span>
        </div>
      </div>
      <div className='AdminOverviewChartWrap'>
        <div className='AdminOverviewChart'>
          <p >Market price action</p>
          <TradingViewWidget/>
        </div>
        <div className='AdminOverviewAllUserWrap'>
          <p style={{width: '90%'}}>Latest Users</p>
          <span className='AdminOverviewAll'>
            {allUser?.map((user: IAllUser) => (
              <div key={user._id} onClick={() => handleUserClick(user._id)} className='AdminOverviewOneUserWrap'>
                <p className='AdminOverviewUserName'>{user.first_name} {user.last_name}</p>
                <p className='AdminOverviewUserEmail'>{user.email}</p>
              </div>
            ))}
          </span>
        </div>
      </div>
    </div>
  )
}

export default AdminOverview