import {createBrowserRouter, Navigate} from "react-router-dom";
import Dashboard from "./views/Dashboard.jsx";
import Login from "./views/Login.jsx";
import Signup from "./views/Signup.jsx";
import Projects from "./views/Projects.jsx";
import TextWidgets from "./views/TextWidgets.jsx";
import AuthLayout from "./views/components/AuthLayout.jsx";
import AdminLayout from "./views/components/AdminLayout.jsx";
import Categories from "./views/Categories.jsx";
import ProjectView from "./views/ProjectView.jsx";
import TextWidgetView from "./views/TextWidgetView.jsx";
import Pricings from "./views/Pricings.jsx";

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
                path: 'categories',
                element: <Categories />
            },
            {
                path: 'projects',
                element: <Projects />
            },
            {
                path: 'projects/add',
                element: <ProjectView />
            },
            {
                path: 'text-widgets',
                element: <TextWidgets />
            },
            {
                path: 'text-widgets/create',
                element: <TextWidgetView />
            },
            {
                path: 'pricings',
                element: <Pricings />
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
