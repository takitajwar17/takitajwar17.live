import { useState, useEffect } from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Button, useTheme, useMediaQuery, Drawer, List, ListItem, ListItemText, Container } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const routes = [
    { name: 'Home', path: '/' },
    { name: 'Experience', path: '/experience' },
    { name: 'Education', path: '/education' },
    { name: 'Skills', path: '/skills' },
    { name: 'Leadership', path: '/leadership' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  const navbarVariants = {
    hidden: { y: -200 },
    visible: { 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20
      }
    }
  };

  const linkVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      <AppBar 
        position="fixed"
        elevation={scrolled ? 4 : 0}
        sx={{
          background: scrolled
            ? theme.palette.mode === 'light'
              ? 'rgba(255, 255, 255, 0.9)'
              : 'rgba(18, 18, 18, 0.9)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          transition: 'all 0.3s ease-in-out',
          borderBottom: scrolled 
            ? 'none'
            : `1px solid ${theme.palette.mode === 'light' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)'}`,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar 
            sx={{ 
              justifyContent: 'space-between',
              minHeight: { xs: '64px', md: '80px' },
              transition: 'min-height 0.3s ease-in-out',
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Typography
                variant="h5"
                component={Link}
                to="/"
                sx={{
                  textDecoration: 'none',
                  color: 'inherit',
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #2D46B9 0%, #F85E9F 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '0.5px',
                }}
              >
                takitajwar17
              </Typography>
            </motion.div>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                {routes.map((route) => (
                  <motion.div
                    key={route.path}
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    <Button
                      component={Link}
                      to={route.path}
                      sx={{
                        color: isActive(route.path) ? 'primary.main' : 'text.primary',
                        position: 'relative',
                        fontWeight: 500,
                        px: 2,
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: '0',
                          left: '50%',
                          width: isActive(route.path) ? '100%' : '0%',
                          height: '2px',
                          background: 'linear-gradient(135deg, #2D46B9 0%, #F85E9F 100%)',
                          transition: 'all 0.3s ease-in-out',
                          transform: 'translateX(-50%)',
                        },
                        '&:hover::after': {
                          width: '100%',
                        },
                      }}
                    >
                      {route.name}
                    </Button>
                  </motion.div>
                ))}
              </Box>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
                sx={{ ml: 'auto' }}
              >
                {isOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Navigation Drawer */}
      <Drawer
        anchor="right"
        open={isOpen && isMobile}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            width: '100%',
            maxWidth: '300px',
            background: theme.palette.mode === 'light' ? 'rgba(255,255,255,0.9)' : 'rgba(18,18,18,0.9)',
            backdropFilter: 'blur(10px)',
          }
        }}
      >
        <Box sx={{ pt: 8, px: 2 }}>
          <List>
            {routes.map((route) => (
              <ListItem 
                key={route.path}
                onClick={handleDrawerToggle}
                component={Link}
                to={route.path}
                sx={{
                  borderRadius: 2,
                  mb: 1,
                  background: isActive(route.path) 
                    ? 'linear-gradient(135deg, rgba(45,70,185,0.1) 0%, rgba(248,94,159,0.1) 100%)'
                    : 'transparent',
                }}
              >
                <ListItemText 
                  primary={route.name}
                  sx={{
                    '& .MuiTypography-root': {
                      fontWeight: isActive(route.path) ? 600 : 400,
                      color: isActive(route.path) ? 'primary.main' : 'text.primary',
                    }
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Remove the Toolbar offset since we'll handle it in the page components */}
    </motion.div>
  );
};

export default Navbar;
