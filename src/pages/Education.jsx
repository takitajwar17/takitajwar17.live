import { Box, Typography, Card, CardContent, Chip } from '@mui/material';
import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Science, Software Engineering',
      school: 'Islamic University of Technology',
      period: 'Jul 2022 - May 2026',
      currentInfo: 'Semester: 5th',
      activities: ['IUT Computer Society'],
      skills: [
        'Database Management System (DBMS)',
        'Software Engineering',
        'Programming',
        'Computer Science',
        'Web Development',
      ],
    },
    {
      degree: 'HSC | SSC | JSC, Science',
      school: 'Cumilla Cadet College',
      period: 'Mar 2015 - Dec 2021',
      grade: 'Grade: 5.00',
      activities: ['Computer Society', 'English Language Club', 'Basketball Team'],
      achievements: [
        'Achieved perfect grades in both Secondary School Certificate and Higher Secondary Certificate (GPA 5.00).',
        'Learned leadership and teamwork skills through events like Obstacle Course Competition, Cross Country Competition, etc.',
        'Developed self-discipline at Cadet College, a pre-military institution.',
        'Participated in various co-curricular activities and sports like basketball and cricket.',
      ],
    },
  ];

  const certifications = [
    {
      name: 'Frontend Developer (React) Certificate',
      issuer: 'HackerRank',
      date: 'Nov 2024',
      skills: ['React.js', 'Front-End Development'],
    },
    {
      name: 'Software Engineer Certificate',
      issuer: 'HackerRank',
      date: 'Nov 2024',
      skills: ['SQL', 'Problem Solving', 'REST APIs'],
    },
    {
      name: 'Certified Supply Chain Analyst (CSCA™)',
      issuer: 'ISCEA - International Supply Chain Education Alliance',
      date: 'Oct 2024',
      expiry: 'Nov 2027',
      credentialId: '2410E10122',
      skills: ['Supply Chain Management', 'Logistics Management'],
    },
    {
      name: 'Google Project Management Professional Certificate',
      issuer: 'Google',
      date: 'Jul 2024',
      skills: ['Agile Project Management', 'Waterfall Project Management', 'Lean Six Sigma', 'Software Project Management'],
    },
    {
      name: 'Google AI Essentials',
      issuer: 'Google',
      date: 'Jun 2024',
      skills: ['Artificial Intelligence (AI)', 'Prompt Engineering', 'Large Language Models (LLM)', 'Generative AI'],
    },
    {
      name: 'Google Cybersecurity Professional Certificate',
      issuer: 'Google',
      date: 'Jun 2024',
      skills: ['Cybersecurity', 'Python', 'Linux', 'SQL', 'Security Information and Event Management (SIEM)', 'Network Security'],
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
        Education
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {/* Formal Education */}
        <Box>
          <Typography
            variant="h4"
            component="h2"
            sx={{ mb: 4, fontWeight: 600 }}
          >
            Academic Background
          </Typography>
          
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 2 }}>
                      <Box>
                        <Typography variant="h5" component="h3" fontWeight={600}>
                          {edu.degree}
                        </Typography>
                        <Typography variant="h6" color="primary">
                          {edu.school}
                        </Typography>
                        {edu.currentInfo && (
                          <Typography variant="body2" color="text.secondary">
                            {edu.currentInfo}
                          </Typography>
                        )}
                        {edu.grade && (
                          <Typography variant="body2" color="text.secondary">
                            {edu.grade}
                          </Typography>
                        )}
                      </Box>
                      <Typography variant="subtitle1" color="text.secondary">
                        {edu.period}
                      </Typography>
                    </Box>

                    {edu.activities && (
                      <Box>
                        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                          Activities and Societies
                        </Typography>
                        <Typography variant="body1">
                          {edu.activities.join(', ')}
                        </Typography>
                      </Box>
                    )}

                    {edu.achievements && (
                      <Box>
                        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                          Achievements
                        </Typography>
                        <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
                          {edu.achievements.map((achievement) => (
                            <li key={achievement}>
                              <Typography variant="body1">{achievement}</Typography>
                            </li>
                          ))}
                        </ul>
                      </Box>
                    )}

                    {edu.skills && (
                      <Box>
                        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                          Skills
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                          {edu.skills.map((skill) => (
                            <Chip
                              key={skill}
                              label={skill}
                              variant="outlined"
                              color="primary"
                              size="small"
                            />
                          ))}
                        </Box>
                      </Box>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>
        </Box>

        {/* Certifications */}
        <Box>
          <Typography
            variant="h4"
            component="h2"
            sx={{ mb: 4, fontWeight: 600 }}
          >
            Certifications
          </Typography>
          
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              gap: 4,
            }}
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Box>
                      <Typography variant="h6" component="h3" fontWeight={600}>
                        {cert.name}
                      </Typography>
                      <Typography variant="subtitle1" color="primary">
                        {cert.issuer}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Issued {cert.date}
                        {cert.expiry && ` · Expires ${cert.expiry}`}
                      </Typography>
                      {cert.credentialId && (
                        <Typography variant="body2" color="text.secondary">
                          Credential ID: {cert.credentialId}
                        </Typography>
                      )}
                    </Box>

                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      {cert.skills.map((skill) => (
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
      </Box>
    </Box>
  );
};

export default Education;
