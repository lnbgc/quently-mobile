import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { darkTheme, defaultTheme } from "../helper/theme";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(defaultTheme);
    const [isLoadingTheme, setIsLoadingTheme] = useState(true);

    const saveTheme = async () => {
        const themeMode = await AsyncStorage.getItem('themeMode')

        if (themeMode !== null) {
            themeMode === 'default' ? setTheme(defaultTheme) : setTheme(darkTheme)
            setIsLoadingTheme(false);
        }
        setIsLoadingTheme(false);
    }

    useEffect(() => {
        saveTheme();
    }, []);

    const updateTheme = (currentThemeMode) => {
        const newTheme = currentThemeMode === 'default' ? darkTheme : defaultTheme;
        setTheme(newTheme);
        AsyncStorage.setItem('themeMode', newTheme.themeMode)
    }

    return (
        <ThemeContext.Provider value={{ theme, isLoadingTheme, updateTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)

export default ThemeProvider