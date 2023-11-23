import { createBrowserRouter } from "react-router-dom";

//import components
import Main from "./pages/quiz/Main";
import Quiz from "./pages/quiz/Quiz";
import Result from "./pages/quiz/Result";

//import pages
import Lesson from "./pages/Lesson";
import Newspage from "./pages/News/News";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import { CheckUserExist } from "./pages/quiz/helper/helper";
import Solar from "./pages/Solar_system/Solar";
import AboutUS from "./pages/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/lesson",
        element: <Lesson></Lesson>,
      },
      {
        path: "/news",
        element: <Newspage></Newspage>,
      },
      {
        path: "/main",
        element: <Main></Main>,
      },
      {
        path: "/main/quiz",
        element: (
          <CheckUserExist>
            <Quiz />
          </CheckUserExist>
        ),
      },
      {
        path: "/main/result",
        element: (
          <CheckUserExist>
            <Result />
          </CheckUserExist>
        ),
      },
      {
        path: "/solar",
        element: <Solar />,
      },
      {
        path: "/about",
        element: <AboutUS />,
      },
    ],
  },
]);
export default router;
