
import './styles/App.css';
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
//import components

import Main from './pages/quiz/Main';
import Quiz from './pages/quiz/Quiz';
import Result from './pages/quiz/Result';
// react routes//
 const router  = createBrowserRouter([
  {
    path :'/',
    element: <Main></Main>
  },
  {
    path :'/quiz',
    element: <Quiz></Quiz>
  },
  {
    path :'/result',
    element: <Result></Result>
  },
 ]
 )

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
