import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import AdminHomePage from "../pages/admin/AdminHomePage";

const router = createBrowserRouter ([
    {
        path: "/",
        element: <LoginPage />,
    },
    {
        path: "/admin",
        element: <AdminHomePage />,
        // children: [
        //     {
        //         path: "/admin/dashboard",
        //         element: <Dashboard />
        //     },
        //     {
        //         path: "/admin/dashboard/upload",
        //         element: <UploadBooks />
        //     },
        //     {
        //         path: "/admin/dashboard/manage",
        //         element: <ManageBook />
        //     },
        //     {
        //         path: "/admin/dashboard/edit-books/:id",
        //         element: <EditBooks />,
        //         loader: ({params}) => fetch(`http://localhost:4000/book/${params.id}`)
        //     },
        // ]
    }
]);

export default router;