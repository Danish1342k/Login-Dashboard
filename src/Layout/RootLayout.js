import { Grid, GridItem } from '@chakra-ui/react';
import Navbar from '../Components/Navbar/Navbar';
import Dashboard from '../Pages/Dashboard';
import Sidebar from '../Components/SideBar/Sidebar';

export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
      <GridItem
        as="aside"
        colSpan={{ base: 6, lg: 1, xl: 1 }}
        bg="purple.400"
        minHeight={{ lg: '100vh' }}
        p={{ base: '20px', lg: '30px' }}
      >
        <Sidebar />
      </GridItem>

      <GridItem as="main" colSpan={{ base: 6, lg: 5, xl: 5 }} p="40px">
        <Navbar />
        <Dashboard />
      </GridItem>
    </Grid>
  );
}
