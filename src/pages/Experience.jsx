import { Box, Typography, Card, CardContent, Chip } from '@mui/material';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'Product Engineer',
      company: 'Booked For You',
      period: 'Nov 2024 - Present',
      location: 'Dhaka, Bangladesh · Hybrid',
      description: 'Working on product management and front-end development.',
      skills: ['Product Management', 'Front-End Development'],
    },
    {
      title: 'Microsoft Student Ambassador (Alpha)',
      company: 'Microsoft',
      period: 'Jan 2024 - Nov 2024',
      location: '',
      description: 'Focused on leadership and community outreach initiatives.',
      skills: ['Leadership', 'Community Outreach'],
    },
    {
      title: 'Intern Software Engineer',
      company: 'Kick Scraper',
      period: 'Jun 2024 - Aug 2024',
      location: 'Remote',
      description: '',
      achievements: [
        'Engineered an advanced bot detection module, reducing unauthorized content scraping incidents by 40%, utilizing Python and machine learning algorithms.',
        'Optimized CAPTCHA challenge mechanisms, enhancing user validation accuracy to 98%, by implementing and integrating custom JavaScript and AI technologies.',
        'Designed and deployed real-time analytics tools for bot activity, which improved site security decision-making by 25%, leveraging AWS cloud solutions and Node.js.',
      ],
      skills: ['Software Engineering', 'System Architecture', 'Python', 'JavaScript', 'AWS'],
    },
    {
      title: 'Team Leader (SIGGRAPH\'2024)',
      company: 'ACM SIGGRAPH',
      period: 'Feb 2024 - Aug 2024',
      location: 'Denver, Colorado, United States',
      description: '',
      achievements: [
        'Leading SV Teams for SIGGRAPH 2024, overseeing 350-400 Student Volunteers using the SIS system.',
        'Managing pre-conference activities, on-site logistics, and shift coordination for 15,000 attendees.',
        'Ensuring adherence to conference protocols.',
      ],
      skills: ['Event Planning', 'Management', 'Leadership'],
    },
    {
      title: 'Student Volunteer & VR Theatre Contributor (SIGGRAPH\'2023)',
      company: 'ACM SIGGRAPH',
      period: 'May 2023 - Jan 2024',
      location: 'Los Angeles, California, United States',
      description: '',
      achievements: [
        'Assisted in the facilitation of complex VR setups for demonstrations and presentations.',
        'Collaborated with industry experts to enhance attendee experience.',
      ],
      skills: ['Virtual Reality', 'Event Management'],
    },
    {
      title: 'Training Instructor',
      company: 'Carnegie Mellon University in Qatar',
      period: 'Nov 2022 - Jun 2023',
      location: '',
      description: 'Program: "Bringing Computer Science to Middle School"',
      achievements: [
        'Trained high school teachers in Dhaka on Python and Alice programming languages.',
        'Received outstanding evaluations, performing 32% better than colleagues.',
        'Provided support as a liaison between teachers and CMU.',
      ],
      skills: ['Leadership', 'Python', 'Teaching', 'Training', 'Education'],
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
        Professional Experience
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 2 }}>
                  <Box>
                    <Typography variant="h5" component="h2" fontWeight={600}>
                      {experience.title}
                    </Typography>
                    <Typography variant="h6" color="primary">
                      {experience.company}
                    </Typography>
                    {experience.location && (
                      <Typography variant="body2" color="text.secondary">
                        {experience.location}
                      </Typography>
                    )}
                  </Box>
                  <Typography variant="subtitle1" color="text.secondary">
                    {experience.period}
                  </Typography>
                </Box>

                {experience.description && (
                  <Typography variant="body1">
                    {experience.description}
                  </Typography>
                )}

                {experience.achievements && (
                  <Box>
                    <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                      Key Achievements
                    </Typography>
                    <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
                      {experience.achievements.map((achievement) => (
                        <li key={achievement}>
                          <Typography variant="body1">{achievement}</Typography>
                        </li>
                      ))}
                    </ul>
                  </Box>
                )}

                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {experience.skills.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      variant="outlined"
                      color="primary"
                      size="small"
                    />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default Experience;
