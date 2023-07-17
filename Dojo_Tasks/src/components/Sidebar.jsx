import { NavLink } from "react-router-dom";
import { List, ListIcon, ListItem } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <List color="white" fontsize="large" spacing={4}>
      <ListItem>
        {/* <ListIcon as={CalendarIcon} /> */}
        
        <NavLink to="/">Dashboard</NavLink>
      </ListItem>
      <ListItem>
        {/* <ListIcon as={EditIcon} /> */}
        <NavLink to="/create">Create</NavLink>
      </ListItem>
      <ListItem>
        {/* <ListIcon as={AtSignIcon} /> */}
        <NavLink to="/profile">Profile</NavLink>
      </ListItem>
    </List>
  );
};

export default Sidebar;
