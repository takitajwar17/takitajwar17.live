import { Container, Typography, Card, CardContent, Box, Chip } from '@mui/material';
import { motion } from 'framer-motion';

const leadershipRoles = [
  {
    title: 'Team Leader (SIGGRAPH\'2024)',
    organization: 'ACM SIGGRAPH',
    period: 'Feb 2024 - Aug 2024',
    location: 'Denver, Colorado, United States',
    description: [
      'Leading SV Teams for SIGGRAPH 2024, overseeing 350-400 Student Volunteers using the SIS system.',
      'Managing pre-conference activities, on-site logistics, and shift coordination for 15,000 attendees.',
      'Ensuring adherence to conference protocols.'
    ],
    skills: ['Event Planning', 'Management', 'Leadership']
  },
  {
    title: 'Student Volunteer & VR Theatre Contributor (SIGGRAPH\'2023)',
    organization: 'ACM SIGGRAPH',
    period: 'May 2023 - Jan 2024',
    location: 'Los Angeles, California, United States',
    description: [
      'Assisted in the facilitation of complex VR setups for demonstrations and presentations.',
      'Collaborated with industry experts to enhance attendee experience.'
    ],
    skills: ['Virtual Reality', 'Event Management', 'Technical Support']
  },
  {
    title: 'Instructor, Education for All (EFA)',
    organization: 'UNESCO',
    period: 'Jun 2018 - Jul 2019',
    description: [
      'Taught and supported approximately 20 economically disadvantaged students for a year.',
      'Educated students in basic arithmetic and practical mathematics applications.',
      'Evaluated student progress to gauge program success and outcomes.'
    ],
    skills: ['Teaching', 'Mentoring', 'Leadership']
  }
];

const Leadership = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography
        variant="h3"
        component={motion.h2}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        gutterBottom
      >
        Leadership & Volunteering
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {leadershipRoles.map((role, index) => (
          <Card
            key={index}
            component={motion.div}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            elevation={3}
          >
            <CardContent>
              <Typography variant="h5" gutterBottom>
                {role.title}
              </Typography>
              <Typography variant="h6" color="primary" gutterBottom>
                {role.organization}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                {role.period}
              </Typography>
              {role.location && (
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  {role.location}
                </Typography>
              )}
              {role.description.map((point, i) => (
                <Typography key={i} variant="body1" paragraph>
                  • {point}
                </Typography>
              ))}
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 2 }}>
                {role.skills.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    size="small"
                    color="primary"
                    variant="outlined"
                  />
                ))}
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default Leadership;
