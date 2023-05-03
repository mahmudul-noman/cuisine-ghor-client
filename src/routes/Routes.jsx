import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Banner from "../pages/Shared/Banner/Banner";
import NavBar from "../pages/Shared/NavBar/NavBar";
import Main from "../layouts/Main";
import Error from "../pages/Shared/Error/Error";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: 'banner',
                element: <Banner></Banner>
            },
            {
                path: 'navbar',
                element: <NavBar></NavBar>
            }
        ]
    }
])



export default router;