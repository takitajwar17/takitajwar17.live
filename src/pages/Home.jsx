import { Box, Typography, Card, CardContent, Button, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Work, School, Code } from '@mui/icons-material';
import Hero from '../components/Hero';

const Home = () => {
  const theme = useTheme();

  const highlights = [
    {
      title: 'Current Role',
      icon: Work,
      content: {
        role: 'Product Engineer',
        organization: 'Booked For You',
        description: 'Leading product development and engineering initiatives for innovative booking solutions.',
      },
      link: '/experience',
      linkText: 'View Full Experience',
      gradient: 'linear-gradient(135deg, #FF6B6B 0%, #FFE66D 100%)',
    },
    {
      title: 'Education',
      icon: School,
      content: {
        degree: 'B.Sc. in Software Engineering',
        school: 'Islamic University of Technology',
        year: '2022 - 2026',
      },
      link: '/education',
      linkText: 'View Education History',
      gradient: 'linear-gradient(135deg, #4E65FF 0%, #92EFFD 100%)',
    },
    {
      title: 'Top Skills',
      icon: Code,
      content: {
        primary: ['Leadership', 'Problem Solving', 'Information Technology'],
        secondary: ['React', 'Python', 'AWS', 'Product Management'],
      },
      link: '/skills',
      linkText: 'View All Skills',
      gradient: 'linear-gradient(135deg, #A8EB12 0%, #00FFAB 100%)',
    },
  ];

  const cardVariants = {
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  return (
    <Box component="main" sx={{ overflow: 'hidden' }}>
      <Hero />
      
      <Box
        sx={{
          maxWidth: '1200px',
          width: '100%',
          margin: '0 auto',
          px: { xs: 2, sm: 3, md: 4 },
          py: 8,
          position: 'relative',
        }}
      >
        {/* Background decoration */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '100%',
            opacity: 0.05,
            zIndex: 0,
            background: `radial-gradient(circle at center, ${theme.palette.primary.main} 0%, transparent 70%)`,
          }}
        />

        <Typography
          variant="h2"
          component="h2"
          sx={{
            textAlign: 'center',
            mb: 6,
            background: 'linear-gradient(135deg, #2D46B9 0%, #F85E9F 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            position: 'relative',
          }}
        >
          Highlights
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(3, 1fr)',
            },
            gap: 4,
            position: 'relative',
          }}
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={cardVariants}
              whileHover="hover"
            >
              <Card
                sx={{
                  height: '100%',
                  background: theme.palette.mode === 'light' 
                    ? 'rgba(255, 255, 255, 0.9)'
                    : 'rgba(18, 18, 18, 0.9)',
                  backdropFilter: 'blur(10px)',
                  position: 'relative',
                  overflow: 'visible',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: highlight.gradient,
                    borderRadius: '4px 4px 0 0',
                  },
                }}
              >
                <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 2, p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: highlight.gradient,
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                      }}
                    >
                      <highlight.icon sx={{ fontSize: 24, color: 'white' }} />
                    </Box>
                    <Typography variant="h5" component="h3" fontWeight={600}>
                      {highlight.title}
                    </Typography>
                  </Box>

                  <Box sx={{ flexGrow: 1 }}>
                    {highlight.content.role && (
                      <>
                        <Typography variant="h6" fontWeight={500} gutterBottom>
                          {highlight.content.role}
                        </Typography>
                        <Typography variant="subtitle1" color="primary" gutterBottom>
                          {highlight.content.organization}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {highlight.content.description}
                        </Typography>
                      </>
                    )}

                    {highlight.content.degree && (
                      <>
                        <Typography variant="h6" fontWeight={500} gutterBottom>
                          {highlight.content.degree}
                        </Typography>
                        <Typography variant="subtitle1" color="primary" gutterBottom>
                          {highlight.content.school}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {highlight.content.year}
                        </Typography>
                      </>
                    )}

                    {highlight.content.primary && (
                      <>
                        <Typography variant="subtitle1" fontWeight={500} gutterBottom>
                          Primary Skills
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                          {highlight.content.primary.join(' • ')}
                        </Typography>
                        <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 1 }}>
                          Also proficient in: {highlight.content.secondary.join(', ')}
                        </Typography>
                      </>
                    )}
                  </Box>

                  <Button
                    component={Link}
                    to={highlight.link}
                    variant="outlined"
                    sx={{
                      mt: 'auto',
                      borderImageSlice: 1,
                      borderImageSource: highlight.gradient,
                      '&:hover': {
                        background: highlight.gradient,
                        color: 'white',
                        borderColor: 'transparent',
                      },
                    }}
                  >
                    {highlight.linkText}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
