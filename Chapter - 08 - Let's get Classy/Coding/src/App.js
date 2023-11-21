import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ReastaurantMenuCard from "./components/RestaurantMenu";
import Profile from "./components/ProfileClass";

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about-us",
        element: <About />,
        children: [
          {
            // nested routing
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      { path: "/contact-us", element: <Contact /> },
      { path: "/restaurant/:resId", element: <ReastaurantMenuCard /> },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
