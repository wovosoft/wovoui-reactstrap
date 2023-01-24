import {createBrowserRouter} from "react-router-dom";
import Buttons from "./pages/Buttons";
import Root from "./root";
import ListGroups from "./pages/ListGroups";
import TablePage from "./pages/TablePage";

const ErrorPage = <div>Has Error</div>;
export const routes = [
    {
        path: "/",
        element: <Root/>,
        errorElement: ErrorPage,
        children: [
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
        ]
    },
];
export default createBrowserRouter(routes);