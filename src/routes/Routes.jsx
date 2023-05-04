import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Error from "../pages/Shared/Error/Error";
import Login from "../pages/Shared/Login/Login";
import LoginLayout from "../layouts/LoginLayout";
import ChefCard from "../pages/Home/ChefCard/ChefCard";
import Register from "../pages/Shared/Register/Register";
import ChefDetailsLayout from "../layouts/ChefDetailsLayout";
import ChefDetails from "../pages/Home/ChefDetails/ChefDetails";
import PrivateRoute from "./PrivateRoute";
import Blog from "../pages/Shared/Blog/Blog";
import BlogLayout from "../layouts/BlogLayout";

const router = createBrowserRouter([
    {
        path: 'main',
        element: <Main></Main>
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
        path: 'chef',
        element: <ChefDetailsLayout></ChefDetailsLayout>,
        children: [
            {
                path: ':id',
                element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://cuisine-ghor-server-mhnoman75-gmailcom.vercel.app/chef/${params.id}`)
            }
        ]
    },
    {
        path: '/',
        element: <BlogLayout></BlogLayout>,
        children: [
            {
                path: 'blog',
                element: <Blog></Blog>
            }
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    },
])



export default router;