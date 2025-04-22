import { createBrowserRouter } from "react-router-dom";
// import HeroPage from "./components/pages/hero";
import DashboardMain from "./components/dashboard";
import Overview from "./components/dashboard/layout/overview";
import Deposits from "./components/dashboard/layout/deposit/deposits";
import Withdraw from "./components/dashboard/layout/withdraw";
import RealEstate from "./components/dashboard/layout/deposit/real-estate";
import Crypto from "./components/dashboard/layout/deposit/crypto";
import Affliate from "./components/dashboard/layout/affliate";
import Entry from "./components/pages";
import CareerSection from "./components/pages/career";
import Layout from "./components/pages/Layout";
import Company from "./components/pages/company";
import Contact from "./components/pages/contact";
import Login from "./components/auth/user/login";
import CreateAccount from "./components/auth/user/signup";
import ForgotPassword from "./components/auth/user/forgotPassword";
import ResetPassword from "./components/auth/user/resetPassword";
import Verify from "./components/auth/user/verify";
import DepositDetails from "./components/dashboard/layout/deposit/DepositDetails";
import Profit from "./components/dashboard/layout/withdraw/profit";
import Balance from "./components/dashboard/layout/withdraw/balance";
import UpdatePassword from "./components/dashboard/layout/updatePassword";
import GateWay from "./components/dashboard/layout/gateWay";
import DepositHistory from "./components/dashboard/layout/deposit/deposits/history";
import WithdrawHistory from "./components/dashboard/layout/withdraw/withdrawHistory";
import AdminLoginPage from "./components/auth/admin";
import AdminDashboard from "./adminDashboard";
import AdminOverview from "./adminDashboard/DashboardRight/AdminOverview";
import AllUser from "./adminDashboard/DashboardRight/AdminOverview/AllUser";
import AdminTransactionHistory from "./adminDashboard/DashboardRight/Transaction";
import ManageUser from "./adminDashboard/DashboardRight/AdminOverview/ManageUser";
import UpdateUserProfile from "./components/dashboard/layout/updateUser";
import RealEstates from "./components/pages/services/RealEstate";
import Retirement from "./components/pages/services/Retirement";
import Gold from "./components/pages/services/Gold";
import CryptoCurrency from "./components/pages/services/CryptoCurrency";
import NFTs from "./components/pages/services/NFTs";
import Stock from "./components/pages/services/Stock";
import Forex from "./components/pages/services/Forex";
import NotFoundPage from "./NotFound";

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <Entry />

        ),
    },
    {
        path: '/career',
        element: (
            <Layout>
                <CareerSection />
            </Layout>
        ),
    },
    {
        path: '/company',
        element: (
            <Layout>
                <Company />
            </Layout>
        ),
    },
    {
        path: '/contact',
        element: (
            <Layout>
                <Contact />
                <section className=" w-full mt-12">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.535261295702!2d-2.5510621839466997!3d51.44928762235756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48718c0da0e5a9a3%3A0x6b44f7d58ae4050b!2sHanham%2C%20Bristol%20BS15%2C%20UK!5e0!3m2!1sen!2sus!4v1694210734851!5m2!1sen!2sus"
                        width="100%"
                        height="450"
                        allowFullScreen={true}
                        loading="lazy"
                        className="border-0 rounded-lg"
                        title="Google Map"
                    ></iframe>
                </section>
            </Layout>
        ),
    },
    {
        path: '/realestate',
        element: (
            <Layout>
                <RealEstates />
            </Layout>
        ),
    },
    {
        path: '/retirement',
        element: (
            <Layout>
                <Retirement />
            </Layout>
        ),
    },
    {
        path: '/gold',
        element: (
            <Layout>
                <Gold />
            </Layout>
        ),
    },
    {
        path: '/crypto',
        element: (
            <Layout>
                <CryptoCurrency />
            </Layout>
        ),
    },
    {
        path: '/nfts',
        element: (
            <Layout>
                <NFTs />
            </Layout>
        ),
    },
    {
        path: '/stocks',
        element: (
            <Layout>
                <Stock />
            </Layout>
        ),
    },
    {
        path: '/forex',
        element: (
            <Layout>
                <Forex />
            </Layout>
        ),
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/signup',
        element: <CreateAccount />,
    },
    {
        path: '/forgot-password',
        element: <ForgotPassword />,
    },
    {
        path: '/reset-password/:id',
        element: <ResetPassword />,
    },
    {
        path: '/verify',
        element: <Verify />,
    },
    {
        path: 'dashboard',
        element: <DashboardMain />,
        children: [
            {
                path: '',
                element: <Overview />
            },
            {
                path: '/dashboard/deposit',
                element: <Deposits />,
            },
            {
                path: '/dashboard/real-estate',
                element: <RealEstate />
            },
            {
                path: '/dashboard/crypto',
                element: <Crypto />
            },
            {
                path: '/dashboard/deposit-details',
                element: <DepositDetails />,
            },
            {
                path: '/dashboard/withdraw',
                element: <Withdraw />
            },
            {
                path: '/dashboard/withdraw-profit',
                element: <Profit />
            },
            {
                path: '/dashboard/withdraw-balance',
                element: <Balance />
            },
            {
                path: '/dashboard/affiliate',
                element: <Affliate />
            },
            {
                path: '/dashboard/update-password',
                element: <UpdatePassword />
            },
            {
                path: '/dashboard/update-wallet',
                element: <GateWay />
            },
            {
                path: '/dashboard/deposit-history',
                element: <DepositHistory />
            },
            {
                path: '/dashboard/withdraw-history',
                element: <WithdrawHistory />
            },
            {
                path: '/dashboard/user-profile',
                element: <UpdateUserProfile/>
            },
                { path: '*', element: <NotFoundPage /> },

        ]
    },
    {
        path: '/admin-login',
        element: <AdminLoginPage />
    },
    {
        path: '/admin-dashboard',
        element: <AdminDashboard/>,
        children: [
            {
                path: '',
                element: <AdminOverview/>
            },
            {
                path: '/admin-dashboard1/alltransaction',
                element: <AdminTransactionHistory/>
            },
            {
                path: '/admin-dashboard1/alluser',
                element: <AllUser/>
            },
            {
                path: '/admin-dashboard1/manage-user/:id',
                element : <ManageUser/>
            },
            { path: '*', element: <NotFoundPage /> },

        ]
    },
    {
        path: '*',
        element: <NotFoundPage/>
    }
]);

export default router;
