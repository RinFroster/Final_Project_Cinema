import HomePage from "./../Container/HomeTemplate/Home_Page";
import MovieDetail from "./../Container/HomeTemplate/Movie_Detail_Page";
import CheckoutPage from "../Container/CheckoutTemplate/CheckoutPage";
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
        path: "/checkout",
        component: CheckoutPage,
        exact: false,
    },
]

// const routeAdmin = [

// ]

export {routeHome,routeCheckout};