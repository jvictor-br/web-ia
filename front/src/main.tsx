import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import routes from "./routes.tsx";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <RouterProvider router={routes} />
);
