import { useMemo } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Leadership from './pages/Leadership';
import Contact from './pages/Contact';

function App() {
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: 'light',
          primary: {
            main: '#2D46B9',
            light: '#4C63CF',
            dark: '#1A2A8F',
          },
          secondary: {
            main: '#F85E9F',
            light: '#FF89BC',
            dark: '#D43D7D',
          },
          background: {
            default: '#FFFFFF',
            paper: '#F8F9FC',
          },
        },
        typography: {
          fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
          h1: {
            fontSize: '3.5rem',
            fontWeight: 700,
            lineHeight: 1.2,
          },
          h2: {
            fontSize: '3rem',
            fontWeight: 700,
            lineHeight: 1.2,
          },
          h3: {
            fontSize: '2.5rem',
            fontWeight: 600,
            lineHeight: 1.2,
          },
          h4: {
            fontSize: '2rem',
            fontWeight: 600,
            lineHeight: 1.2,
          },
          h5: {
            fontSize: '1.5rem',
            fontWeight: 500,
            lineHeight: 1.2,
          },
          h6: {
            fontSize: '1.25rem',
            fontWeight: 500,
            lineHeight: 1.2,
          },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: 'none',
                borderRadius: 8,
                padding: '8px 24px',
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: 16,
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
              },
            },
          },
        },
        shape: {
          borderRadius: 8,
        },
        spacing: 8,
      }),
    [],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Box sx={{ 
          minHeight: '100vh',
          width: '100vw',
          overflowX: 'hidden',
          bgcolor: 'background.default',
        }}>
          <Navbar />
          <Box
            component="main"
            sx={{
              width: '100%',
              pt: 8,
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/education" element={<Education />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/leadership" element={<Leadership />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Box>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
