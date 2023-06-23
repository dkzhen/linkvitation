import { About } from "../pages/About";
import { Article } from "../pages/Article";
import { Signup } from "../pages/Auth/Signup";
import { Home } from "../pages/Home";
import { Order } from "../pages/order";
import { routerType } from "../types/router.types";

export const pagesData: routerType[] = [
  {
    title: "Home",
    path: "",
    element: <Home />,
  },
  {
    title: "About",
    path: "about",
    element: <About />,
  },
  {
    title: "Order",
    path: "order",
    element: <Order />,
  },
  {
    title: "Article",
    path: "article",
    element: <Article />,
  },
  {
    title: "Signup",
    path: "auth/signup",
    element: <Signup />,
  },
];
