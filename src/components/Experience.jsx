import { Container, Typography, Card, CardContent, Box, Chip, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { Work, School, Timer } from '@mui/icons-material';

const experiences = [
  {
    title: 'Product Engineer',
    company: 'Booked For You',
    period: 'Nov 2024 - Present',
    location: 'Dhaka, Bangladesh · Hybrid',
    description: 'Specializing in Product Management, Front-End Development, and building innovative solutions.',
    skills: ['Product Management', 'Front-End Development'],
    icon: <Work />,
    color: '#2D46B9'
  },
  {
    title: 'Microsoft Student Ambassador (Alpha)',
    company: 'Microsoft',
    period: 'Jan 2024 - Nov 2024',
    description: 'Leadership and Community Outreach, fostering technical learning environments.',
    skills: ['Leadership', 'Community Outreach'],
    icon: <School />,
    color: '#00A4EF'
  },
  {
    title: 'Intern Software Engineer',
    company: 'Kick Scraper',
    period: 'Jun 2024 - Aug 2024',
    location: 'Remote',
    description: [
      'Engineered an advanced bot detection module, reducing unauthorized content scraping incidents by 40%, utilizing Python and machine learning algorithms.',
      'Optimized CAPTCHA challenge mechanisms, enhancing user validation accuracy to 98%, by implementing and integrating custom JavaScript and AI technologies.',
      'Designed and deployed real-time analytics tools for bot activity, improving site security decision-making by 25%, leveraging AWS cloud solutions and Node.js.'
    ],
    skills: ['Software Engineering', 'System Architecture', 'Python', 'Machine Learning', 'AWS', 'JavaScript'],
    icon: <Timer />,
    color: '#F85E9F'
  },
  {
    title: 'Training Instructor',
    company: 'Carnegie Mellon University in Qatar',
    period: 'Nov 2022 - Jun 2023',
    description: [
      'Program: "Bringing Computer Science to Middle School"',
      'Trained high school teachers in Dhaka on Python and Alice programming languages.',
      'Received outstanding evaluations, performing 32% better than colleagues.',
      'Provided support as a liaison between teachers and CMU.'
    ],
    skills: ['Leadership', 'Python', 'Teaching'],
    icon: <School />,
    color: '#00A4EF'
  }
];

const Experience = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: 12,
        background: theme.palette.mode === 'light'
          ? 'linear-gradient(180deg, #F8F9FC 0%, #FFFFFF 100%)'
          : 'linear-gradient(180deg, #121212 0%, #1A1F35 100%)',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              textAlign: 'center',
              mb: 8,
              background: theme.palette.mode === 'light'
                ? 'linear-gradient(135deg, #2D46B9 0%, #F85E9F 100%)'
                : 'linear-gradient(135deg, #4C63CF 0%, #FF89BC 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Professional Journey
          </Typography>
        </motion.div>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {experiences.map((exp, index) => (
            <Card
              key={index}
              component={motion.div}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              elevation={0}
              sx={{
                borderRadius: 4,
                background: theme.palette.background.paper,
                border: 1,
                borderColor: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)',
                position: 'relative',
                overflow: 'visible',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: 20,
                  left: -20,
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  background: exp.color,
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                }}
              >
                {exp.icon}
              </Box>

              <CardContent sx={{ p: 4 }}>
                <Box sx={{ pl: 3 }}>
                  <Typography variant="h5" gutterBottom fontWeight="600">
                    {exp.title}
                  </Typography>
                  <Typography variant="h6" color="primary" gutterBottom>
                    {exp.company}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                    {exp.period}
                  </Typography>
                  {exp.location && (
                    <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                      {exp.location}
                    </Typography>
                  )}

                  <Box sx={{ my: 2 }}>
                    {Array.isArray(exp.description) ? (
                      exp.description.map((point, i) => (
                        <Typography
                          key={i}
                          variant="body1"
                          paragraph
                          sx={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            '&:before': {
                              content: '"•"',
                              color: exp.color,
                              fontWeight: 'bold',
                              marginRight: 1,
                            },
                          }}
                        >
                          {point}
                        </Typography>
                      ))
                    ) : (
                      <Typography variant="body1" paragraph>
                        {exp.description}
                      </Typography>
                    )}
                  </Box>

                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 2 }}>
                    {exp.skills.map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        size="small"
                        sx={{
                          borderRadius: 2,
                          bgcolor: theme.palette.mode === 'light' ? 'rgba(45, 70, 185, 0.1)' : 'rgba(76, 99, 207, 0.1)',
                          color: exp.color,
                          '&:hover': {
                            bgcolor: theme.palette.mode === 'light' ? 'rgba(45, 70, 185, 0.2)' : 'rgba(76, 99, 207, 0.2)',
                          },
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Experience;
