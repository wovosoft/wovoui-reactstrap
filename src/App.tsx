import "bootstrap/dist/css/bootstrap.min.css";

import {RouterProvider} from "react-router-dom";
import router from "./router";

export default function App() {
    return <RouterProvider router={router}/>
}

