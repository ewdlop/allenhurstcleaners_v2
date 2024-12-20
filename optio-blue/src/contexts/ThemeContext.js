// Dependencies
import React, { createContext, useState, useMemo, useContext, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Utils
import { logEvent } from '../utils/Ganalytics';

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeContextProvider = ({ children }) => {
    const getInitialThemeMode = () => {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return prefersDarkMode ? 'dark' : 'light';
    };

    const [themeMode, setThemeMode] = useState(getInitialThemeMode);

    useEffect(() => {
        const handleChange = (e) => {
            setThemeMode(e.matches ? 'dark' : 'light');
        };

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addEventListener('change', handleChange);

        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);

    const toggleTheme = () => {
        setThemeMode((prevMode) => {
            const newMode = prevMode === 'light' ? 'dark' : 'light';
            logEvent('ThemeContext', 'Toggle Theme', newMode === 'light' ? 'Light Mode' : 'Dark Mode');
            return newMode;
        });
    };

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: themeMode,
                    ...(themeMode === 'light'
                        ? {
                            // Light mode palette
                            primary: {
                                main: '#1976d2',
                            },
                            secondary: {
                                main: '#dc004e',
                            },
                            background: {
                                default: '#f5f5f5',
                                paper: '#ffffff',
                            },
                            text: {
                                primary: '#000000', // Black text for light mode
                                secondary: '#555555', // Dark gray text for light mode
                            },
                        }
                        : {
                            // Dark mode palette
                            primary: {
                                main: '#90caf9',
                            },
                            secondary: {
                                main: '#f48fb1',
                            },
                            background: {
                                default: '#121212',
                                paper: '#1d1d1d',
                            },
                            text: {
                                primary: '#ffffff', // White text for dark mode
                                secondary: '#aaaaaa', // Light gray text for dark mode
                            },
                        }),
                },
                typography: {
                    fontFamily: 'Roboto, Arial, sans-serif',
                },
                components: {
                    MuiButton: {
                        styleOverrides: {
                            root: {
                                borderRadius: '8px',
                            },
                        },
                    },
                },
            }),
        [themeMode]
    );

    return (
        <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    );
};