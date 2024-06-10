import { store } from "./redux";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Pages
import Home from "./pages/home/Home";
import Results from "./pages/results/Results";

// Shared
import Login from "./components/auth/Login";
import NotFound from "./shared/NotFound";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/program-results", element: <Results /> },
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
