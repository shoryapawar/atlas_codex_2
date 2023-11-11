import { Link } from "react-router-dom";
import "./Menu.scss";
import {menu} from "../../data";

const Menu = () => {
  return (
    
    <div className="menu">
       {/* <span className="logo">Atlas_Codex</span> */}
        {menu.map( (item) => (
          <div className="item" key={item.id}>
        
          <span className="title">{item.title}</span>

          {item.listItems.map( (ListItem) => (
            <Link to={ListItem.url} className="ListItem" key = {ListItem.id}>
            <img className="icon" src={ListItem.icon} alt=""></img>
            <span className="listitemTitle">{ListItem.title}</span>
          </Link>
          ))}
         </div>
        ))}
      </div>
   
  );
};

export default Menu
