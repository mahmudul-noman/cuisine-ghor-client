import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Error from "../pages/Shared/Error/Error";
import Login from "../pages/Shared/Login/Login";
import LoginLayout from "../layouts/LoginLayout";
import ChefCard from "../pages/Home/ChefCard/ChefCard";
import Register from "../pages/Shared/Register/Register";

const router = createBrowserRouter([
    {
        path: '*',
        element: <Error></Error>
    },
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to="/main"></Navigate>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: 'main',
        element: <Main></Main>,
        children: [
            // {
            //     path: '/chefcard',
            //     element: <ChefCard></ChefCard>
            // }
        ]
    }
])



export default router;