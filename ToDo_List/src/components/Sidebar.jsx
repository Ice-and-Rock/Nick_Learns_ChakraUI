import { NavLink } from "react-router-dom";
import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { AtSignIcon, CalendarIcon, EditIcon } from "@chakra-ui/icons";

const Sidebar = () => {
  return (
    <List color="white" fontSize="1.2em" spacing={4}>
      <ListItem>
        <ListIcon as={CalendarIcon} />
        <NavLink to="/">Dashboard</NavLink>
      </ListItem>
      <ListItem>
        <ListIcon as={EditIcon} />
        <NavLink to="/create">New task</NavLink>
      </ListItem>
      <ListItem>
        <ListIcon as={AtSignIcon} />
        <NavLink to="/profile">Profile</NavLink>
      </ListItem>
    </List>
  );
};

export default Sidebar;
