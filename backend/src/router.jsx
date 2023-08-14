import {createBrowserRouter, Navigate} from "react-router-dom";
import Dashboard from "./views/Dashboard.jsx";
import Login from "./views/Login.jsx";
import Signup from "./views/Signup.jsx";
import Projects from "./views/Projects.jsx";
import TextWidgets from "./views/TextWidgets.jsx";
import AuthLayout from "./views/components/AuthLayout.jsx";
import AdminLayout from "./views/components/AdminLayout.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <AdminLayout />,
        children: [
            {
                path: '/',
                element: <Dashboard />
            },
            {
                path: 'projects',
                element: <Projects />
            },
            {
                path: 'text-widgets',
                element: <TextWidgets />
            }
        ]
    },
    {
        path: '/',
        element: <AuthLayout />,
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'signup',
                element: <Signup />
            }
        ]
    }
])

export default router;
