import { createBrowserRouter } from "react-router-dom";
import Initial from "./pages/initial";
import Chat from "./pages/chat";
import Register from "./pages/register";
import Login from "./pages/login";

// const MainRoutes: React.FC = () => {
//   return (
//     <Routes>
//       <Route path="/" index element={<Initial />} />
//       <Route path="sign-in" element={<Login />} />
//       <Route path="sign-up" element={<Register />} />
//       <Route path="chat" element={<Chat />} />
//     </Routes>
//   );
// };

// export default MainRoutes;

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Initial />,
  },

  {
    path: "sign-in",
    element: <Login />,
  },
  {
    path: "sign-up",
    element: <Register />,
  },
  {
    path: "chat",
    element: <Chat />,
  },
]);

export default routes;
