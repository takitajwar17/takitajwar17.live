import { Box, Typography, Card, CardContent, TextField, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Email, LinkedIn, GitHub } from '@mui/icons-material';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form submission logic here
  };

  const contactLinks = [
    {
      icon: <Email />,
      label: 'Email',
      value: 'takitajwaruzzaman@gmail.com',
      href: 'mailto:takitajwaruzzaman@gmail.com',
    },
    {
      icon: <LinkedIn />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/your-profile',
      href: 'https://linkedin.com',
    },
    {
      icon: <GitHub />,
      label: 'GitHub',
      value: 'github.com/your-username',
      href: 'https://github.com',
    },
  ];

  return (
    <Box
      component="main"
      sx={{
        maxWidth: '1200px',
        width: '100%',
        margin: '0 auto',
        px: { xs: 2, sm: 3, md: 4 },
        py: { xs: 12, md: 16 },
      }}
    >
      <Typography
        variant="h2"
        component="h1"
        sx={{
          textAlign: 'center',
          mb: 6,
          background: 'linear-gradient(135deg, #2D46B9 0%, #F85E9F 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Get in Touch
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: 4,
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Typography variant="h5" component="h2" fontWeight={600}>
                Contact Information
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {contactLinks.map((contact) => (
                  <Box
                    key={contact.label}
                    component="a"
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      textDecoration: 'none',
                      color: 'inherit',
                      transition: 'color 0.2s',
                      '&:hover': {
                        color: 'primary.main',
                      },
                    }}
                  >
                    {contact.icon}
                    <Box>
                      <Typography variant="subtitle1" fontWeight={600}>
                        {contact.label}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {contact.value}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2" fontWeight={600} gutterBottom>
                Send a Message
              </Typography>

              <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField
                  required
                  label="Name"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  required
                  label="Email"
                  type="email"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  required
                  label="Message"
                  multiline
                  rows={4}
                  variant="outlined"
                  fullWidth
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    background: 'linear-gradient(135deg, #2D46B9 0%, #F85E9F 100%)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #1A2A8F 0%, #D43D7D 100%)',
                    },
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </CardContent>
          </Card>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Contact;
