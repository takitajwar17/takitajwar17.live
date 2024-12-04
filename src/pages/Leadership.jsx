import { Box, Typography, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

const Leadership = () => {
  const leadership = [
    {
      title: 'Team Lead - Product Engineering',
      organization: 'Booked For You',
      period: '2023 - Present',
      description: 'Leading a team of 5 engineers in developing and maintaining core booking platform features.',
      achievements: [
        'Implemented agile methodologies that increased team velocity by 40%',
        'Mentored 3 junior developers to become productive team members',
        'Reduced technical debt by 30% through strategic refactoring',
      ],
    },
    {
      title: 'Technical Project Lead',
      organization: 'University Software Development Club',
      period: '2021 - 2022',
      description: 'Led student teams in developing real-world applications for local non-profits.',
      achievements: [
        'Successfully delivered 3 major projects for community organizations',
        'Managed cross-functional teams of designers and developers',
        'Organized technical workshops and coding bootcamps',
      ],
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
        Leadership & Impact
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {leadership.map((role, index) => (
          <motion.div
            key={role.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 2 }}>
                  <Box>
                    <Typography variant="h5" component="h2" fontWeight={600}>
                      {role.title}
                    </Typography>
                    <Typography variant="h6" color="primary">
                      {role.organization}
                    </Typography>
                  </Box>
                  <Typography variant="subtitle1" color="text.secondary">
                    {role.period}
                  </Typography>
                </Box>

                <Typography variant="body1">
                  {role.description}
                </Typography>

                <Box>
                  <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                    Key Achievements
                  </Typography>
                  <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
                    {role.achievements.map((achievement) => (
                      <li key={achievement}>
                        <Typography variant="body1">{achievement}</Typography>
                      </li>
                    ))}
                  </ul>
                </Box>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default Leadership;
