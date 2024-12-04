import { Box, Typography, Container, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import photo from '../assets/photo.png';

const Hero = () => {
  return (
    <Box
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        pt: { xs: '64px', md: '80px' },
        background: (theme) => theme.palette.mode === 'light'
          ? 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)'
          : 'linear-gradient(180deg, rgba(18,18,18,0) 0%, rgba(18,18,18,1) 100%)',
      }}
    >
      <Container 
        maxWidth="xl"
        sx={{
          px: { xs: 2, sm: 3, md: 4 },
          mt: { xs: -4, sm: -6, md: -8 }, // Move the whole section up
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: { xs: 3, md: 0 }, // Reduced gap between text and photo
            flexDirection: { xs: 'column', md: 'row' },
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {/* Text Content */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', md: 'flex-start' },
              textAlign: { xs: 'center', md: 'left' },
              gap: 2,
              flex: 1,
              maxWidth: { xs: '100%', md: '600px' },
              pr: { md: 4 }, // Add right padding to text content on desktop
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                  fontWeight: 700,
                  lineHeight: 1.2,
                  background: 'linear-gradient(135deg, #2D46B9 0%, #F85E9F 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Hi, I'm Taki
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                  fontWeight: 500,
                  color: 'text.secondary',
                  mb: 2,
                }}
              >
                Product Engineer at Booked For You
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                  color: 'text.secondary',
                  maxWidth: '600px',
                  mb: 2,
                }}
              >
                Passionate about building innovative solutions that make a difference.
                Experienced in full-stack development, product management, and leading engineering teams.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                  component={Link}
                  to="/contact"
                  variant="contained"
                  size="large"
                  sx={{
                    background: 'linear-gradient(135deg, #2D46B9 0%, #F85E9F 100%)',
                    color: 'white',
                    px: 4,
                    '&:hover': {
                      background: 'linear-gradient(135deg, #1E3298 0%, #D73F7E 100%)',
                    },
                  }}
                >
                  Get in Touch
                </Button>
                <Button
                  component={Link}
                  to="/experience"
                  variant="outlined"
                  size="large"
                  sx={{
                    px: 4,
                    borderColor: 'primary.main',
                    '&:hover': {
                      borderColor: 'primary.dark',
                      background: 'rgba(45, 70, 185, 0.1)',
                    },
                  }}
                >
                  View Experience
                </Button>
              </Box>
            </motion.div>
          </Box>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{
              position: 'relative',
              flexShrink: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* Circular container for photo */}
            <Box
              sx={{
                width: { xs: '260px', sm: '300px', md: '360px' },
                height: { xs: '260px', sm: '300px', md: '360px' },
                borderRadius: '50%',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, rgba(45,70,185,0.1) 0%, rgba(248,94,159,0.1) 100%)',
                position: 'relative',
                boxShadow: (theme) => `0 0 40px ${
                  theme.palette.mode === 'light' 
                    ? 'rgba(45,70,185,0.15)'
                    : 'rgba(248,94,159,0.15)'
                }`,
                padding: '12px', 
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: '50%',
                  padding: '4px', 
                  background: 'linear-gradient(135deg, #2D46B9, #F85E9F)',
                  mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  maskComposite: 'exclude',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  opacity: 0.8,
                },
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                  '&::before': {
                    opacity: 1,
                  },
                },
              }}
            >
              <Box
                component="img"
                src={photo}
                alt="Taki Khan"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  borderRadius: '50%',
                }}
              />
            </Box>

            {/* Decorative elements */}
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '110%',
                height: '110%',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(45,70,185,0.1) 0%, rgba(248,94,159,0.1) 100%)',
                filter: 'blur(40px)',
                zIndex: -1,
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%) rotate(30deg)',
                width: '120%',
                height: '120%',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(248,94,159,0.1) 0%, rgba(45,70,185,0.1) 100%)',
                filter: 'blur(40px)',
                zIndex: -1,
              }}
            />
          </motion.div>
        </Box>
      </Container>

      {/* Background decoration */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          background: (theme) =>
            theme.palette.mode === 'light'
              ? 'radial-gradient(circle at 80% 20%, #2D46B9 0%, transparent 40%)'
              : 'radial-gradient(circle at 80% 20%, #F85E9F 0%, transparent 40%)',
          zIndex: -1,
        }}
      />
    </Box>
  );
};

export default Hero;
