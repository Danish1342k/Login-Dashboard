import { List, ListItem, ListIcon } from '@chakra-ui/react';
import { CalendarIcon, EditIcon, AtSignIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <List
      color="white"
      fontSize="1.2em"
      spacing={4}
      direction="column"
      display={{ base: 'flex', lg: 'block', xl: 'block' }}
      alignItems={{ base: 'baseline' }}
      justifyContent={{ base: 'space-around' }}
      width={{ lg: '200px' }}
      position={{ lg: 'fixed' }}
      line-height="2"
    >
      <ListItem>
        <NavLink to="/Dashboard">
          <ListIcon as={CalendarIcon} color="white" />
          Dashboard
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="profile">
          <ListIcon as={EditIcon} color="white" />
          Profile
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="Contact">
          <ListIcon as={AtSignIcon} color="white" />
          Contact
        </NavLink>
      </ListItem>
    </List>
  );
}
