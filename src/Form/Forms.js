import React from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Textarea,
  Button,
  Checkbox,
} from '@chakra-ui/react';
import { Formik, Form } from 'formik';

export default function Forms({ action }) {
  return (
    <Box maxW="480px">
      <Formik
        initialValues={{
          title: '',
          description: '',
          isPriority: false,
        }}
        onSubmit={(values, { resetForm }) => {
          action({ request: values });
          resetForm();
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <FormControl isRequired mb="40px">
              <FormLabel>Task name:</FormLabel>
              <Input
                type="text"
                name="title"
                value={values.title}
                onChange={handleChange}
              />
              <FormHelperText>Enter a descriptive task name.</FormHelperText>
            </FormControl>

            <FormControl mb="40px">
              <FormLabel>Task description:</FormLabel>
              <Textarea
                placeholder="Enter a detailed description for your task..."
                name="description"
                value={values.description}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl display="flex" alignItems="center" mb="40px">
              <Checkbox
                name="isPriority"
                colorScheme="purple"
                size="lg"
                checked={values.isPriority}
                onChange={handleChange}
              />
              <FormLabel mb="0" ml="10px">
                Make a priority task
              </FormLabel>
            </FormControl>

            <Button type="submit">submit</Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
