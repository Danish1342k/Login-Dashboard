import React from 'react';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Navbar from '../Components/Navbar/Navbar';
import Forms from '../Form/Forms';
import Sidebar from '../Components/SideBar/Sidebar';
import { redirect } from 'react-router-dom';

export const createAction = async ({ request }) => {
  const data = await request.formData();

  const task = {
    title: data.get('title'),
    description: data.get('description'),
    isPriority: data.get('isPriority') === '',
  };

  console.log(task);

  return redirect('/');
};

function Profile() {
  return (
    <Box>
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
          <motion.div
            style={{ height: 'inherit' }}
            initial={{ y: -16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <Box>
              <Forms action={createAction} />
            </Box>
          </motion.div>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Profile;
