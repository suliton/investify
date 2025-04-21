import axios from "axios";
import { AdminLoginInterface, AdminsIgnupInterface, IWithdrawInterface, UserLoginInterface, UsersIgnupInterface } from "../interface";

const { VITE_ENDPOINT_VERCEL } = import.meta.env;
const { VITE_ENDPOINT_RENDER } = import.meta.env;
const { VITE_TOKEN_CLIENT } = import.meta.env;

// admin apis
export const adminSignup = async (data: AdminsIgnupInterface) => {
    console.log(data);
    return await axios.post(`${VITE_ENDPOINT_RENDER}/admin`, data)
};

export const adminLogin = async (data: AdminLoginInterface) => {
    // console.log(data);
    return await axios.post(`${VITE_ENDPOINT_VERCEL}/admin/login`, data)
};

export const confirmTransaction = async (_id: string) =>{
    return await axios.post(`${VITE_ENDPOINT_RENDER}/confirm/${_id}`)
}

// user apis
export const userSignup = async (data: UsersIgnupInterface) => {
    console.log(data);
    return await axios.post(`${VITE_ENDPOINT_RENDER}/user`, data)
};

export const verifyUser = async (data: { verifyCode: number }) => {
    console.log(data);
    return await axios.patch(`${VITE_ENDPOINT_VERCEL}/user/verify`, data)
};

export const userLogin = async (data: UserLoginInterface) => {
    console.log(data);
    return await axios.post(`${VITE_ENDPOINT_VERCEL}/user/login`, data)
};

export const userForgetPassword = async (email: string) => {
    return await axios.post(`${VITE_ENDPOINT_RENDER}/user/forget-pass`, {email})
};

export const userResetPassword = async ({ id, password }: { id: string; password: string } ) => {
    return await axios.post(`${VITE_ENDPOINT_VERCEL}/user/change/${id}`, { password })
};

export const completeDeposit = async (data: FormData) => {
    const usertoken = localStorage.getItem(VITE_TOKEN_CLIENT)
    return await axios.post(`${VITE_ENDPOINT_RENDER}/deposit`, data, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${usertoken}`,
        }
    })
}

// export const completeInvestment = async (data: any) => {
//     const usertoken = localStorage.getItem(VITE_TOKEN_CLIENT)
//     return await axios.post(`${VITE_ENDPOINT_VERCEL}/invest`, data, {
//         headers: {
//             'Authorization': `Bearer ${usertoken}`,
//         }
//     })
// }

export const userUpdatePassword = async (current_password: string , new_password: string ) => {
    const usertoken = localStorage.getItem(VITE_TOKEN_CLIENT)
    return await axios.patch(`${VITE_ENDPOINT_VERCEL}/user/pass/`, {current_password, new_password }, {
        headers: {
            'Authorization': `Bearer ${usertoken}`,
        }
    })
};

export const updateUserDetails = async (first_name: string, last_name: string, email: string) => {
    const usertoken = localStorage.getItem(VITE_TOKEN_CLIENT)
    return await axios.patch(`${VITE_ENDPOINT_VERCEL}/user`, { first_name, last_name, email }, {
        headers: {
            'Authorization': `Bearer ${usertoken}`,
        }
    });
};
export const updateUser = async (userData: {
    first_name: string;
    last_name: string;
    total_balance: number;
    total_invest: number;
    withdrawable_balance: number;
    id: string | undefined;
  }) => {
    const { first_name, last_name, total_balance, total_invest, withdrawable_balance, id } = userData;
    try {
      const response = await axios.patch(`${VITE_ENDPOINT_VERCEL}/users/${id}`, {
        first_name,
        last_name,
        total_balance,
        total_invest,
        withdrawable_balance
      });
      return response.data; // Return the data after successful update
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      throw new Error('Failed to update user'); 
    }
  };

  export const deleteUser = async (id: string | undefined) =>{
    return await axios.delete(`${VITE_ENDPOINT_VERCEL}/user/${id}`,{})
  }

  export const withdrawBalance = async (data: IWithdrawInterface) => {
    const usertoken = localStorage.getItem(VITE_TOKEN_CLIENT)
    return await axios.post(`${VITE_ENDPOINT_VERCEL}/withdraw`, data, {
        headers: {
            'Authorization': `Bearer ${usertoken}`,
        }
    })
  }
  export const withdrawProfit = async (amount: string) => {
    const usertoken = localStorage.getItem(VITE_TOKEN_CLIENT)
    return await axios.post(`${VITE_ENDPOINT_VERCEL}/withdraw/profit`, {amount}, {
        headers: {
            'Authorization': `Bearer ${usertoken}`,
        }
    })
  }