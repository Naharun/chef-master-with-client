import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Layout/Login/Login";
import Signup from "../Layout/Signup/Signup";
import Home from "../Pages/Home/Home/Home";
import RecipeData from "../Pages/Home/RecipeData/RecipeData";

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
            },
            {
                path: '/recipeData/:id',
                element: <RecipeData/>,
                loader: ({ params }) => fetch(`https://special-chef-hunter-with-server-ashraf-mahmud07.vercel.app/chefData/${params.id}`)
                
            }
        ]
    }
])
export default router;