import Home from "../page/home";
import About, { Culture, Contact, History, Join } from "../page/about";
import Profile from "../page/profile";
import Shop from "../page/shop";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/about",
    // exact: true,
    component: About,
    routes: [
    //   {
    //     path: "/about",
    //     // exact: true,
    //     component: About,
    //   },
      {
        path: "/about/culture",
        exact: true,
        component: Culture,
      },
      {
        path: "/about/contact",
        exact: true,
        component: Contact,
      },
      {
        path: "/about/history",
        exact: true,
        component: History,
      },
      {
        path: "/about/join",
        exact: true,
        component: Join,
      },
    ],
  },
  {
    path: "/profile",
    exact: true,

    component: Profile,
  },
  {
    path: "/shop",
    exact: true,

    component: Shop,
  },
];

export default routes;
