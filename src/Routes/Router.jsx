import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Layout/Login/Login";
import Signup from "../Layout/Signup/Signup";
import Home from "../Pages/Home/Home/Home";
import RecipeData from "../Pages/Home/RecipeData/RecipeData";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Blog from "../Pages/Home/Home/Blog";
import PrivateRoute from "../Layout/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage></ErrorPage>,
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/chefData/:id',
                element: <PrivateRoute><RecipeData/></PrivateRoute>,
                loader: ({ params }) => fetch(`https://chef-master-with-server-naharun.vercel.app/chefData/${params.id}`)

            }
        ]
    }
])
export default router;