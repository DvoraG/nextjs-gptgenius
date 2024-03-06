'use client';

import React, { useEffect, useState } from "react";
import ThemeContext from "./ThemeContext";
import AntiFlickerScript from "@/components/AntiFlickerScript";
import { getTheme, saveTheme, themes } from "@/utils/theme";

export default function ThemeProvider({children, storageKey, defaultTheme}) {
    const [theme, setTheme] = useState(getTheme(storageKey, defaultTheme));

    useEffect(() => {
        saveTheme(storageKey, theme);
    }, [storageKey, theme]);

    return (
        <ThemeContext.Provider value={{ theme, themes, setTheme}}>
            <AntiFlickerScript storageKey={storageKey} theme={defaultTheme} />
            {children}
        </ThemeContext.Provider>
    );
}