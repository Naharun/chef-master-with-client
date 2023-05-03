import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Layout/Login/Login";
import Signup from "../Layout/Signup/Signup";
import Home from "../Pages/Home/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
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
            }
        ]
    }
])
export default router;