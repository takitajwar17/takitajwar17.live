import { Container, Typography, Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    name: 'Technical Skills',
    skills: [
      'Software Engineering',
      'Front-End Development',
      'React.js',
      'JavaScript',
      'Python',
      'Machine Learning',
      'Cloud Technologies',
      'AWS',
      'System Architecture',
      'Database Management',
      'REST APIs',
      'Node.js'
    ]
  },
  {
    name: 'Product & Management',
    skills: [
      'Product Management',
      'Agile Project Management',
      'Waterfall Project Management',
      'Lean Six Sigma',
      'Software Project Management',
      'Supply Chain Management',
      'Event Planning'
    ]
  },
  {
    name: 'AI & Security',
    skills: [
      'Artificial Intelligence',
      'Generative AI',
      'Large Language Models',
      'Prompt Engineering',
      'Cybersecurity',
      'Network Security',
      'SIEM',
      'Linux'
    ]
  },
  {
    name: 'Soft Skills',
    skills: [
      'Leadership',
      'Problem Solving',
      'Team Management',
      'Community Outreach',
      'Teaching',
      'Mentoring',
      'Research'
    ]
  }
];

const Skills = () => {
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
        Skills & Expertise
      </Typography>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
        {skillCategories.map((category, categoryIndex) => (
          <Paper
            key={category.name}
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
            elevation={3}
            sx={{ p: 3 }}
          >
            <Typography variant="h5" gutterBottom color="primary">
              {category.name}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                  viewport={{ once: true }}
                >
                  <Paper
                    elevation={1}
                    sx={{
                      px: 1.5,
                      py: 0.75,
                      bgcolor: 'background.paper',
                      border: 1,
                      borderColor: 'primary.main',
                      borderRadius: 2,
                    }}
                  >
                    <Typography variant="body2">
                      {skill}
                    </Typography>
                  </Paper>
                </motion.div>
              ))}
            </Box>
          </Paper>
        ))}
      </Box>
    </Container>
  );
};

export default Skills;
