import { useNavigate } from 'react-router-dom';
import './AllUser.css';  // Import the CSS file
import { useQuery } from 'react-query';
import { getAllUser } from '../../../api/query';
import toast from 'react-hot-toast';
import { IAllUser, IErrorResponse } from '../../../interface';

const AllUser = () => {
    const navigate = useNavigate();
    const handleUserClick = (userId: string) => {
        navigate(`/admin-dashboard/manage-user/${userId}`);
    };
    const { data } = useQuery(["getalluser"], getAllUser, {
        onError: (err: IErrorResponse) => {
          if (err?.response?.status === 401) {
            navigate('/admin-login')
            toast.error(err?.response?.data?.message)
          }
        }
    })
    //  console.log(data?.data?.users)
    const allUser = data?.data?.users
    return (
        <div className='AllUser'>
            <table>
                <thead>
                    <tr>
                        <th className='text-white font-light'>ID</th>
                        <th className='text-white font-light'>Name</th>
                        <th className='text-white font-light'>Email</th>
                        <th className='text-white font-light'>Account Balance</th>
                        <th className='text-white font-light'>Registered Date</th>
                        <th className='text-white font-light'>Status</th>
                        <th className='text-white font-light'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {allUser?.map((user: IAllUser) => (
                        <tr key={user._id}>
                            <td data-label="ID">{user._id}</td>
                            <td data-label="Name">{user.first_name} {user.last_name}</td>
                            <td data-label="Email">{user.email}</td>
                            <td data-label="Account Balance">$ {user.withdrawable_balance}</td>
                            <td data-label="Registered Date">{new Date(user.createdAt).toLocaleDateString()}</td>
                            <td data-label="Status">
                                <span className='status-active'>
                                    Active
                                </span>
                            </td>
                            <td data-label="Actions">
                                <button className="edit" onClick={() => handleUserClick(user._id)}>Manage user</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllUser;



