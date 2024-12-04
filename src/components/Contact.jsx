import { Container, Typography, Button, Box } from '@mui/material';
import { Email, LinkedIn, GitHub } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <Container sx={{ py: 8, mb: 4 }}>
      <Typography
        variant="h3"
        component={motion.h2}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        gutterBottom
      >
        Let's Connect
      </Typography>

      <Typography
        variant="body1"
        paragraph
        sx={{ maxWidth: '600px', mb: 4 }}
      >
        Feel free to connect with me to discuss product management, software engineering,
        or just chat over a virtual coffee!
      </Typography>

      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}
      >
        <Button
          variant="contained"
          size="large"
          startIcon={<Email />}
          href="mailto:takitajwaruzzaman@gmail.com"
          component={motion.a}
          whileHover={{ scale: 1.05 }}
        >
          Email Me
        </Button>

        <Button
          variant="outlined"
          size="large"
          startIcon={<LinkedIn />}
          href="https://linkedin.com"
          target="_blank"
          component={motion.a}
          whileHover={{ scale: 1.05 }}
        >
          LinkedIn
        </Button>

        <Button
          variant="outlined"
          size="large"
          startIcon={<GitHub />}
          href="https://github.com"
          target="_blank"
          component={motion.a}
          whileHover={{ scale: 1.05 }}
        >
          GitHub
        </Button>
      </Box>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mt: 4 }}
      >
        When I'm not diving into tech, I love playing with my cat and reading books.
      </Typography>
    </Container>
  );
};

export default Contact;
