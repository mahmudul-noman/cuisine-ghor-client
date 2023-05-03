import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Banner from "../pages/Shared/Banner/Banner";
import NavBar from "../pages/Shared/NavBar/NavBar";
import Main from "../layouts/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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