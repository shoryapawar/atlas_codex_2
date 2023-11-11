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
        element: <Quiz></Quiz>,
      },
      {
        path: "/main/result",
        element: <Result></Result>,
      },
    ],
  },
]);
export default router;