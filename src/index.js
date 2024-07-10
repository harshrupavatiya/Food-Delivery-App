import react from "react";
import reactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import "./index.css";

import Hero from "./Hero";
import Header from "./Header";
import Body from "./Body";
import About from "./About";
import Contact from "./Contact";
import RestaurentMenu from "./RestaurentMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./Cart";

function App() {
  return (
    <Provider store={appStore}>
      <div className="wrapper">
        <Header />
        <Outlet />
        {/* <Footer /> */}
      </div>
    </Provider>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <div>
            <Hero />
            <Body />
          </div>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurent/:resID",
        element: <RestaurentMenu />,
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ],
  },
]);

const root = reactDOM.createRoot(document.querySelector("#root"));

root.render(<RouterProvider router={appRouter} />);

export default App;
