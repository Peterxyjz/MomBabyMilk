import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.JSX";

const router = createBrowserRouter ([
    {
        path: "/",
        element: <MainLayout />,
        // children: [
        //     {
        //         path: "/",
        //         element: <Home/>    
        //     },
        //     {
        //         path: "/login",
        //         element: <Login/>
        //     }
        ]
    },
]);

export default router;