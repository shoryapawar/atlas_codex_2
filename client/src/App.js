
import {  RouterProvider } from "react-router-dom";
// import {Route, BrowserRouter as Router, Routes } from "react-router-dom"

// //import components
// import Home from "./pages/Home";
// import Main from "./pages/quiz/Main";
// import Quiz from "./pages/quiz/Quiz";
// import Result from "./pages/quiz/Result";

// //import pages
// import Lesson from "./pages/Lessons";
// import News from "./pages/News";
// import Team from "./pages/Team";
import router from "./Routes"

// react routes//


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
