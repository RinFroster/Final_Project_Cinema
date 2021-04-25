import HomePage from "./../Container/HomeTemplate/Home_Page";
import MovieDetail from "./../Container/HomeTemplate/Movie_Detail_Page";
import CheckoutPage from "../Container/CheckoutTemplate/CheckoutPage";
import AdminPage from "../Container/AdminTemplate/AdminPage";
const routeHome = [
    {
        path: '/',
        component: HomePage,
        exact: true,
    },
    {
        path: "/detail/:id",
        component: MovieDetail,
        exact: false,
    },
]

const routeCheckout = [
    {
        path: "/checkout/:id",
        component: CheckoutPage,
        exact: false,
    },
]

const routeAdmin = [
    {
        path: "/admin",
        component: AdminPage,
        exact: false,
    },
]

export {routeHome,routeCheckout,routeAdmin};