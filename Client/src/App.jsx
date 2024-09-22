import {
  Login,
  Registration,
  Dashboard,
  Tasks,
  Leads,
  Customer,
} from "./components";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {path : "" , element : <Dashboard />},
      { path: "/customers", element: <Customer /> },
      { path: "/tasks", element: <Tasks /> },
      { path: "/leads", element: <Leads /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Registration /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
