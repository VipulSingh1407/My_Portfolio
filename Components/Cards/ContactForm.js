import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Snackbar } from '@mui/material';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (formData[key].trim() === '') {
        newErrors[key] = true;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Here you can use formData to save to a database or perform other actions
    console.log('Form Data:', formData);
    addMessage(formData);

    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });

    // Reset errors
    setErrors({
      name: false,
      email: false,
      subject: false,
      message: false,
    });

    // Show Snackbar
    setOpenSnackbar(true);
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const addMessage = async (formData) => {
    const urlEncodedFormData = new URLSearchParams(formData);
    await fetch('https://utility-backend-d0yk.onrender.com/api/message', {
       method: 'POST',
       body: urlEncodedFormData,
       headers: {
          'Content-type': 'application/x-www-form-urlencoded',
       },
    })
    .then((response) => {
          if (response.status==200) {
            console.log('Form submitted successfully!');
            // Additional success handling if needed
          } else {
            console.log('Form submission failed.');
            // Handle error cases
          }
        })
       .catch((err) => {
          console.log(err.message);
       });
  };

  return (
    <Container maxWidth="w-full">
      <div className='font-semibold text-3xl text-white py-3'>Text Me!</div>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Name"
            variant="outlined"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            InputProps={{ style: { background: 'white' } }}
            error={errors.name}
            helperText={errors.name ? 'Name is required' : ''}
          />
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            InputProps={{ style: { background: 'white' } }}
            error={errors.email}
            helperText={errors.email ? 'Email is required' : ''}
          />
          <TextField
            label="Subject"
            variant="outlined"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            fullWidth
            InputProps={{ style: { background: 'white' } }}
            error={errors.subject}
            helperText={errors.subject ? 'Subject is required' : ''}
          />
          <TextField
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleChange}
            fullWidth
            InputProps={{ style: { background: 'white' } }}
            error={errors.message}
            helperText={errors.message ? 'Message is required' : ''}
          />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Box>
      </form>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message="Form submitted successfully!"
      />
    </Container>
  );
};

export default ContactForm;
