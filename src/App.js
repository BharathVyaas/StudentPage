import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { store } from "./redux";
import { Provider } from "react-redux";

import Login from "./components/auth/Login";
import NotFound from "./shared/NotFound";
import Home from "./pages/home/Home";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "*", element: <NotFound /> },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
