import {
  Login,
  Registration,
  Dashboard,
  Tasks,
  Leads,
  Customer,
} from "./components";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import { getCustomers } from "./components/Customers/Customer";
import { leadsData } from "./components/Lead Management/Leads";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Dashboard /> },
      {
        path: "/customers",
        element: <Customer />,
        loader : getCustomers
      },
      { path: "/tasks", element: <Tasks /> },
      { path: "/leads", element: <Leads /> ,
        loader : leadsData
      },
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
