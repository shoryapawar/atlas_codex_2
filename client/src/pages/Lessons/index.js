// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import celestialObjects from "../../data/celestialobjects";
// import ObjectCard from "../../components/Celestialobjects/ObjectCard";
// import ObjectDetails from "../../components/Celestialobjects/ObjectDetails";
// const Lesson = () => {
//   return (
//     <div>
//       <h1>Lessons</h1>
//       <Router>
//       <Switch>
//         <Route path="/lesson" exact>
//           <div className="card-container">
//             {celestialObjects.map((object) => (
//               <ObjectCard key={object.id} object={object} />
//             ))}
//           </div>
//         </Route>
//         <Route path="/object/:id">
//           <ObjectDetails />
//         </Route>
//       </Switch>
//     </Router>
//     </div>
//   );
// };

// export default Lesson;
import React from 'react'

const index = () => {
  return (
    <div>Lesson</div>
  )
}

export default index