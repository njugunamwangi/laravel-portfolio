import {createBrowserRouter, Navigate} from "react-router-dom";
import Dashboard from "./views/Dashboard.jsx";
import Login from "./views/Login.jsx";
import Signup from "./views/Signup.jsx";
import Projects from "./views/Projects.jsx";
import TextWidgets from "./views/TextWidgets.jsx";
import AuthLayout from "./views/components/AuthLayout.jsx";
import AdminLayout from "./views/components/AdminLayout.jsx";
import Categories from "./views/Categories.jsx";
import ProjectView from "./views/forms/ProjectView.jsx";
import TextWidgetView from "./views/forms/TextWidgetView.jsx";
import Pricings from "./views/Pricings.jsx";
import PricingView from "./views/forms/PricingView.jsx";
import NotFound from "./views/components/core/NotFound.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <AdminLayout />,
        children: [
            {
                path: '/dashboard',
                element: <Navigate to="/" />
            },
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
                path: 'projects/:id',
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
                path: 'text-widgets/:id',
                element: <TextWidgetView />
            },
            {
                path: 'pricings',
                element: <Pricings />
            },
            {
                path: 'pricings/add',
                element: <PricingView />
            },
            {
                path: '*',
                element: <NotFound />
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
