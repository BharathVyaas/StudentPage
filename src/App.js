import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Login from "./components/auth/Login";
import NotFound from "./shared/NotFound";
import Home from "./pages/home/Home";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "*", element: <NotFound /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
