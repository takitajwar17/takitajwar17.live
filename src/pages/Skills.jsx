import { Box, Typography, Card, CardContent, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend Development',
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript/TypeScript', level: 85 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'Material-UI', level: 85 },
      ],
    },
    {
      category: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'SQL', level: 80 },
        { name: 'REST APIs', level: 85 },
      ],
    },
    {
      category: 'Tools & Technologies',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'AWS', level: 75 },
        { name: 'Docker', level: 70 },
        { name: 'CI/CD', level: 75 },
      ],
    },
    {
      category: 'Product & Management',
      skills: [
        { name: 'Product Management', level: 85 },
        { name: 'Agile/Scrum', level: 80 },
        { name: 'Team Leadership', level: 80 },
        { name: 'Technical Writing', level: 75 },
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
        Skills & Expertise
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
          gap: 4,
        }}
      >
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
          >
            <Card>
              <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Typography variant="h5" component="h2" fontWeight={600}>
                  {category.category}
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {category.skills.map((skill, skillIndex) => (
                    <Box key={skill.name}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body1" fontWeight={500}>
                          {skill.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {skill.level}%
                        </Typography>
                      </Box>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                      >
                        <LinearProgress
                          variant="determinate"
                          value={skill.level}
                          sx={{
                            height: 6,
                            borderRadius: 3,
                            bgcolor: 'rgba(0, 0, 0, 0.1)',
                            '& .MuiLinearProgress-bar': {
                              borderRadius: 3,
                              background: 'linear-gradient(135deg, #2D46B9 0%, #F85E9F 100%)',
                            },
                          }}
                        />
                      </motion.div>
                    </Box>
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

export default Skills;
