import { createBrowserRouter } from "react-router-dom";


//import components
import Home from "./pages/Home";
import Main from "./pages/quiz/Main";
import Quiz from "./pages/quiz/Quiz";
import Result from "./pages/quiz/Result";

//import pages
import Lesson from "./pages/Lessons";
import News from "./pages/News";
import Team from "./pages/Team";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/lesson",
      element: <Lesson></Lesson>,
    },
    {
      path: "/team",
      element: <Team></Team>,
    },
    {
      path: "/news",
      element: <News></News>,
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
  ]);
  export default router