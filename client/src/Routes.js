import { createBrowserRouter } from "react-router-dom";

//import components
import Main from "./pages/quiz/Main";
import Quiz from "./pages/quiz/Quiz";
import Result from "./pages/quiz/Result";

//import pages
import Lesson from "./pages/Lessons";
import APOD from "./pages/APOD";
import Newspage from "./pages/News/News";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import { CheckUserExist } from "./pages/quiz/helper/helper";

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
        path: "/apod",
        element: <APOD></APOD>,
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
        element: <CheckUserExist><Quiz/></CheckUserExist>,
      },
      {
        path: "/main/result",
        element: <CheckUserExist><Result/></CheckUserExist>,
      },
    ],
  },
]);
export default router;
