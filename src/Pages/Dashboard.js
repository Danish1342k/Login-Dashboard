import React, { useState } from 'react';
import { ChakraProvider, SimpleGrid } from '@chakra-ui/react';
import CardComp from '../Components/Cards/CardComp';
import { motion } from 'framer-motion';
function Dashboard() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Fix the navbar with This',
      description:
        'There is an issue with the navbar on the homepage. It is not displaying correctly on mobile devices.',
      img: 'https://images.pexels.com/photos/3411134/pexels-photo-3411134.jpeg?auto=compress&cs=tinysrgb&w=600',
      button: 'View More',
    },
    {
      id: 2,
      title: 'Add links to the footer',
      description:
        'The footer is currently empty. We need to add some links to important pages on the site.',
      img: 'https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg?auto=compress&cs=tinysrgb&w=600',
      button: 'View More',
    },
    {
      id: 3,
      title: 'Update the contact form',
      description:
        'The contact form is not working properly. We need to fix the form validation and make sure the form submissions are being sent to the correct email address.',
      img: 'https://media.istockphoto.com/id/1419922260/photo/3d-render-of-a-cat-playing-video-games-with-a-vr-headset.jpg?b=1&s=612x612&w=0&k=20&c=Z4cW4o4NO16NoFZdaC09gBeHOdqOu0M6WCgLt9jWzMc=',
      button: 'View More',
    },
    {
      id: 4,
      title: "Improve the site's performance",
      description:
        "The site is currently running slow. We need to optimize images and minify CSS and JavaScript to improve the site's loading speed.",
      img: 'https://images.pexels.com/photos/6898854/pexels-photo-6898854.jpeg?auto=compress&cs=tinysrgb&w=600',
      button: 'View More',
    },
    {
      id: 5,
      title: 'Add social media links',
      description:
        'There are no links to our social media profiles on the site. We need to add links to our Facebook, Twitter, and Instagram accounts in the header and footer.',
      img: 'https://images.pexels.com/photos/3706/black-and-white-cartoon-donald-duck-spotlight.jpg?auto=compress&cs=tinysrgb&w=600',
      button: 'View More',
    },
    {
      id: 6,
      title: 'Implement a search feature',
      description:
        'The site does not have a search feature. We need to add a search bar in the header that allows users to search for specific pages or products on the site.',
      img: 'https://images.pexels.com/photos/4052752/pexels-photo-4052752.jpeg?auto=compress&cs=tinysrgb&w=600',
      button: 'View More',
    },
    {
      id: 7,
      title: 'Fix the responsive layout',
      description:
        "The site's layout is not responsive. It does not look good on mobile devices. We need to make sure the site looks good on all devices.",
      img: 'https://images.pexels.com/photos/7422160/pexels-photo-7422160.jpeg?auto=compress&cs=tinysrgb&w=600',
      button: 'View More',
    },
    {
      id: 8,
      title: 'Add a newsletter signup form',
      description:
        'We do not have a way for users to sign up for our newsletter. We need to add a newsletter signup form in the footer that allows users to enter their email address.',
      img: 'https://images.pexels.com/photos/9646287/pexels-photo-9646287.jpeg?auto=compress&cs=tinysrgb&w=600',
      button: 'View More',
    },
    {
      id: 9,
      title: 'Improve the design with innovation',
      description:
        "The site's design is outdated. We need to update the site's color scheme and font to make it look more modern.",
      img: 'https://images.pexels.com/photos/4055973/pexels-photo-4055973.jpeg?auto=compress&cs=tinysrgb&w=600',
      button: 'View More',
    },
    {
      id: 10,
      title: 'Add more products to the online store',
      description:
        'We need to add more products to the online store. We also need to add categories and filters to make it easier for users to find what they are looking for.',
      img: 'https://media.istockphoto.com/id/1415476281/photo/cute-teenager-girl-wearing-pink-skateboard-hat-her-happy-while-skateboarding.jpg?b=1&s=612x612&w=0&k=20&c=FYdgtIgtjO874wTbU6kEKrKdl21jFHksszpVdUUmGsc=',
      button: 'View More',
    },
  ]);

  console.log(tasks);

  return (
    <ChakraProvider>
      <motion.div
        style={{ height: 'inherit' }}
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <SimpleGrid
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
        >
          {tasks.map(task => {
            return (
              <CardComp
                img={task.img}
                title={task.title}
                description={task.description}
                button={task.button}
              />
            );
          })}
        </SimpleGrid>
      </motion.div>
    </ChakraProvider>
  );
}

export default Dashboard;
