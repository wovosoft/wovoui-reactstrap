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
import Forms from "./pages/Forms";
import Dropdowns from "./pages/Dropdowns";

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
            },
            {
                path: "/badges",
                element: <Badges/>,
            },
            {
                path: "/breadcrumbs",
                element: <Breadcrumbs/>,
            },
            {
                path: "/buttons",
                element: <Buttons/>,
            },
            {
                path: "/cards",
                element: <Cards/>,
            },
            {
                path: "/carousels",
                element: <Carousels/>,
            },
            {
                path: "/dropdowns",
                element: <Dropdowns/>,
            },
            {
                path: "/forms",
                element: <Forms/>,
            },

            {
                path: "/list-groups",
                element: <ListGroups/>,
            },
            {
                path: "/table",
                element: <TablePage/>,
            },
        ]
    },
];
export default createBrowserRouter(routes);