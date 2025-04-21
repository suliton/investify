import { useQuery, useMutation } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getOneUser, } from "../../../api/query";
import './ManageUser.css';
import { useState, useEffect } from "react";
import { updateUser, deleteUser } from "../../../api/mutation";
import toast from "react-hot-toast";
import { IErrorResponse } from "../../../interface";

export interface ApiResponseUser {
  first_name: string;
  last_name: string;
  email: string;
  status: string;
  withdrawable_balance: number;
  total_balance: number;
  total_invest: number;
  createdAt: string;
}


const ManageUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isConfirmVisible, setConfirmVisible] = useState(false);
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    status: '',
    withdrawableBalance: '',
    totalBalance: '',
    totalInvest: '',
    createdAt: '',
  });

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const showConfirmPopup = () => {
    setConfirmVisible(true);
    setDropdownVisible(false);
  };

  const hideConfirmPopup = () => {
    setConfirmVisible(false);
  };



  const { data } = useQuery(["getoneuser", id], () => getOneUser(id), {
    onError: (err: IErrorResponse) => {
      if (err?.response?.status === 401) {
        navigate('/admin-login')
        toast.error(err?.response?.data?.message)
      }
    }
  });
  const user = data?.data?.data

  useEffect(() => {
    if (user) {
      setUserInfo({
        firstName: user.first_name || '',
        lastName: user.last_name || '',
        email: user.email || '',
        status: user.status || '',
        withdrawableBalance: user.withdrawable_balance?.toFixed(0) || '',
        totalBalance: user.total_balance?.toFixed(0) || '',
        totalInvest: user.total_invest?.toFixed(0) || '',
        createdAt: new Date(user.createdAt).toLocaleDateString() || '',
      });
    }
  }, [user]);

  const handleInputChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const { mutate: deleteUserMutate } = useMutation(["deleteUser"], deleteUser, {
    onSuccess: () => {
      toast.success('User deleted sccessfully')
      navigate('/admin-dashboard/alluser')
    },
    onError: () => {
    }
  })
  const confirmDelete = () => {
    deleteUserMutate(id)
    setConfirmVisible(false);
  };
  const { mutate: updateUserMutation, isLoading } = useMutation(updateUser, {
    onSuccess: () => {
      toast.success('User updated successfully');
    },
    onError: () => {
      toast.error('Failed to update user');
    },
  });

  const handleUpdateDetails = () => {
    updateUserMutation({
      id,
      first_name: userInfo.firstName,
      last_name: userInfo.lastName,
      total_balance: parseFloat(userInfo.totalBalance),
      total_invest: parseFloat(userInfo.totalInvest),
      withdrawable_balance: parseFloat(userInfo.withdrawableBalance),
    });
  };

  return (
    <div className="ManageUserMain">
      <div className="ManageUserWrap">
        <div className="ManageUserBackButtonWrap">
          <button onClick={() => navigate('/admin-dashboard/alluser')} style={{color: 'white'}} >Back</button>
          <button onClick={toggleDropdown} style={{ backgroundColor: 'transparent', border: '1px solid lightgrey', color: 'black' }}>Action</button>
          {isDropdownVisible && (
            <div className="ManageUserActionButtonDropDown">
              <p onClick={showConfirmPopup} style={{ display: 'block', width: '100%', cursor: 'pointer' }}>Delete User</p>
            </div>
          )}
          {isConfirmVisible && (
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'white',
              padding: '20px',
              boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
              zIndex: 2,
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              textAlign: 'center',
            }}
            
            className="max-[650px]:w-[100%]">
              <p style={{ fontSize: '18px' }}>Are you sure you want to delete this user?</p>
              <div className="w-[100%] flex gap-[20px] justify-center">
                <button onClick={confirmDelete}>Yes</button>
                <button onClick={hideConfirmPopup}>No</button>
              </div>
            </div>
          )}
        </div>
        <div className="ManageUserAccountInfo">
          <div className="ManageUserAccountInfoWrap">
            <span className="ManageUserAccountInfoInfo">
              <h4>Account Balance</h4>
              <p>$ {userInfo.withdrawableBalance}.00</p>
            </span>
            <span className="ManageUserAccountInfoInfo">
              <h4>Status</h4>
              <p style={{ width: '70px', background: '#182536', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30px', color: "white", padding: '10px' }}>Active</p>
            </span>
          </div>
          <div className="ManageUserAccountInfoWrap">
            <span className="ManageUserAccountInfoInfo">
              <h4>Profit</h4>
              <p>$ {userInfo.totalBalance}.00</p>
            </span>
            <span className="ManageUserAccountInfoInfo">
              <h4>Full Name</h4>
              <p>{userInfo.firstName} {userInfo.lastName}</p>
            </span>
          </div>
          <div className="ManageUserAccountInfoWrap">
            <span className="ManageUserAccountInfoInfo">
              <h4>Total Investment</h4>
              <p>$ {userInfo.totalInvest}.00</p>
            </span>
            <span className="ManageUserAccountInfoInfo">
              <h4>Email Address</h4>
              <p>{userInfo.email}</p>
            </span>
          </div>
          <div className="ManageUserAccountInfoWrap">
            <span className="ManageUserAccountInfoInfo">
              <h4>Account Balance</h4>
              <p>$ {userInfo.withdrawableBalance}.00</p>
            </span>
            <span className="ManageUserAccountInfoInfo">
              <h4>User Registered Date</h4>
              <p>{userInfo.createdAt}</p>
            </span>
          </div>
        </div>
      </div>
      <div className="ManageUserEditContainer">
        <p className="ManageUserEditContainerHeader">Edit user</p>
        <div className="ManageUserEditContainerWrap">
          <div className="ManageUserInputGroupWrap">
            <div className="ManageUserInputSingleWrap">
              <label>First Name</label>
              <input type="text" name="firstName" value={userInfo.firstName} onChange={handleInputChange} />
            </div>
            <div className="ManageUserInputSingleWrap">
              <label>Last Name</label>
              <input type="text" name="lastName" value={userInfo.lastName} onChange={handleInputChange} />
            </div>
          </div>
          <div className="ManageUserInputGroupWrap">
            <div className="ManageUserInputSingleWrap">
              <label>Email</label>
              <input type="text" name="email" value={userInfo.email} onChange={handleInputChange} />
            </div>
            <div className="ManageUserInputSingleWrap">
              <label>Account Balance</label>
              <input type="text" name="withdrawableBalance" value={userInfo.withdrawableBalance} onChange={handleInputChange} />
            </div>
          </div>
          <div className="ManageUserInputGroupWrap">
            <div className="ManageUserInputSingleWrap">
              <label>Profit</label>
              <input type="text" name="totalBalance" value={userInfo.totalBalance} onChange={handleInputChange} />
            </div>
            <div className="ManageUserInputSingleWrap">
              <label>Total Invest</label>
              <input type="text" name="totalInvest" value={userInfo.totalInvest} onChange={handleInputChange} />
            </div>
          </div>
          <div className="ManageUserInputGroupWrap">
            <div className="ManageUserInputSingleWrap">
              <label>Registered Date</label>
              <input type="text" name="createdAt" value={userInfo.createdAt} onChange={handleInputChange} disabled />
            </div>
            <button style={{width: '80%'}} onClick={handleUpdateDetails}>{isLoading ? "Updating Details" : "Update Details"}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
