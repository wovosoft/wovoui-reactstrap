import {createBrowserRouter} from "react-router-dom";
import Buttons from "./pages/Buttons";
import Root from "./root";
import ListGroups from "./pages/ListGroups";
import TablePage from "./pages/TablePage";
import Cards from "./pages/Cards";
import Alerts from "./pages/Alerts";
import Badges from "./pages/Badges";
import Breadcrumbs from "./pages/Breadcrumbs";
import Carousels from "./pages/Carousels";

const ErrorPage = <div>Has Error</div>;
export const routes = [
    {
        path: "/",
        element: <Root/>,
        errorElement: ErrorPage,
        children: [
            {
                path: "/alerts",
                element: <Alerts/>,
                errorElement: ErrorPage,
            },
            {
                path: "/badges",
                element: <Badges/>,
                errorElement: ErrorPage,
            },
            {
                path: "/breadcrumbs",
                element: <Breadcrumbs/>,
                errorElement: ErrorPage,
            },
            {
                path: "/buttons",
                element: <Buttons/>,
                errorElement: ErrorPage,
            },
            {
                path: "/list-groups",
                element: <ListGroups/>,
                errorElement: ErrorPage,
            },
            {
                path: "/table",
                element: <TablePage/>,
                errorElement: ErrorPage,
            },
            {
                path: "/cards",
                element: <Cards/>,
                errorElement: ErrorPage,
            },
            {
                path: "/carousels",
                element: <Carousels/>,
                errorElement: ErrorPage,
            },
        ]
    },
];
export default createBrowserRouter(routes);