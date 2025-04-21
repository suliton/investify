export interface AdminLoginInterface {
    email: string,
    password: string
}

export interface UserLoginInterface {
    email: string,
    password: string
}

export interface AdminsIgnupInterface {
    first_name: string,
    last_name: string,
    email: string,
    password: string
}

export interface UsersIgnupInterface {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    referralCode: string
    phoneNumber: string
}

export interface IErrorResponse {
    message: string;
    response: {
        status: number;
        data: {
            error: {
                message: string
            };
            message: string;
        };
    };
}

export interface IResponseData {
    data: {
        data: {
            token: string
        }
        ststus: string;
        message: string;
        token: string
    }
}

export interface PaymentMethod {
    name: string;
    img: string;
    address: string;
  }

  export interface IWithdrawInterface{
    amount: number;
    payment_channel: string;
    wallet_address: string;
  }

  export interface ITransaction  {
    amount: string;
    investment: {
      selected_plan: string | null;
      interest_percentage: number;
      amount: number;
      investment_date: string;
    } | null;
    _id: string;
    user_id: string;
    total_balance: number;
    withdrawable_balance: number;
    payment_method: string;
    transaction_type: string;
    processed: boolean;
    wallet_address: string;
    status: string;
    payment_proof: string;
    createdAt: string;
    updatedAt: string;
  };
  
  export interface IAllUser {
    total_balance: number,
    total_invest: number,
    withdrawable_balance: number,
    _id: string,
    first_name: string,
    last_name: string,
    email: string,
    amount: 0,
    createdAt: string,
    updatedAt: string
  
  }
  export interface IAllTransaction {
    _id: string;
    user_id: string;
    total_balance: number;
    withdrawable_balance: number;
    payment_method: string;
    processed: boolean;
    wallet_address: string;
    status: string;
    payment_proof: string;
    payment_proof_url: string;
    createdAt: string;
    updatedAt: string;
}
export interface IUser {
    first_name: string;
    last_name: string;
    email: string;
    status: string;
    withdrawable_balance: number;
    total_balance: number;
    total_invest: number;
    createdAt: string;
  }

  export interface ApiResponse {
    data: IUser;
  }