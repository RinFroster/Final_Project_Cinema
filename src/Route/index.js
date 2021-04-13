import HomePage from "./../Container/HomeTemplate/Home_Page";
import MovieDetail from "./../Container/HomeTemplate/Movie_Detail_Page";
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

// const routeAdmin = [

// ]

export {routeHome};