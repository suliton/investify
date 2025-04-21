import axios, { AxiosResponse } from "axios";
import { ApiResponse} from "../interface";

const { VITE_ENDPOINT_VERCEL } = import.meta.env;
const { VITE_TOKEN_CLIENT } = import.meta.env;
const { VITE_TOKEN_ADMIN } = import.meta.env;
const API_URL = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd';

export const getUser = async () => {
    const usertoken = localStorage.getItem(VITE_TOKEN_CLIENT)
    return await axios.get(`${VITE_ENDPOINT_VERCEL}/user`, {
        headers: {
            'Authorization': `Bearer ${usertoken}`,
        },
    })
};
export const getAdmin = async () => {
    const admintoken = localStorage.getItem(VITE_TOKEN_ADMIN)
    return await axios.get(`${VITE_ENDPOINT_VERCEL}/admin`, {
        headers: {
            'Authorization': `Bearer ${admintoken}`,
        },
    })
};

export const getExchangeRates = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching exchange rates:', error);
        throw error;
    }
};

export const convertUSDToCrypto = (amountInUSD: number, exchangeRate: number): number => {
    return amountInUSD / exchangeRate;
};


export const getUserTransactionHistory = async () => {
    const usertoken = localStorage.getItem(VITE_TOKEN_CLIENT)
    return await axios.get(`${VITE_ENDPOINT_VERCEL}/transactions/users`, {
        headers: {
            'Authorization': `Bearer ${usertoken}`,
        },
    })
}
export const getAllAdminTransaction = async () => {
    const admintoken = localStorage.getItem(VITE_TOKEN_ADMIN)
    return await axios.get(`${VITE_ENDPOINT_VERCEL}/transactions`, {
        headers: {
            'Authorization': `Bearer ${admintoken}`,
        },
    })
}

export const getAllUser = async () => {
    const admintoken = localStorage.getItem(VITE_TOKEN_ADMIN)
    return await axios.get(`${VITE_ENDPOINT_VERCEL}/admin/users`, {
        headers: {
            'Authorization': `Bearer ${admintoken}`,
        },
    })
}

export const getAllDeposit = async () => {
    return await axios.get(`${VITE_ENDPOINT_VERCEL}/admin/funds`)
}

export const getAllPendingDeposit = async () => {
    return await axios.get(`${VITE_ENDPOINT_VERCEL}/admin/pending`,
    )
}

export const getOneUser = async (id: string | undefined): Promise<AxiosResponse<ApiResponse>> => {
    const admintoken = localStorage.getItem(VITE_TOKEN_ADMIN)
    return await axios.get(`${VITE_ENDPOINT_VERCEL}/admin/users/${id}`, {
        headers: {
            'Authorization': `Bearer ${admintoken}`,
        },
    })
}

export const getWithdrawalHistory = async () =>{
    const usertoken = localStorage.getItem(VITE_TOKEN_CLIENT)
    return await axios.get(`${VITE_ENDPOINT_VERCEL}/withdraw`, {
        headers: {
            'Authorization': `Bearer ${usertoken}`,
        },
    })
}
export const getDepositsHistory = async () =>{
    const usertoken = localStorage.getItem(VITE_TOKEN_CLIENT)
    return await axios.get(`${VITE_ENDPOINT_VERCEL}/transactions/deposit`, {
        headers: {
            'Authorization': `Bearer ${usertoken}`,
        },
    })
}

export const getAffiliatesHistory = async () =>{
    const usertoken = localStorage.getItem(VITE_TOKEN_CLIENT)
    return await axios.get(`${VITE_ENDPOINT_VERCEL}/users/affiliates`, {
        headers: {
            'Authorization': `Bearer ${usertoken}`,
        },
    })
}