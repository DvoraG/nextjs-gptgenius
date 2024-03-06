'use client';

import React, { useEffect, useState } from "react";
import ThemeContext from "./ThemeContext";
import { getTheme, saveTheme, themes } from "@/utils/theme";

export default function ThemeProvider({children, storageKey, defaultTheme}) {
    const [theme, setTheme] = useState(getTheme(storageKey, defaultTheme));

    useEffect(() => {
        saveTheme(storageKey, theme);
    }, [storageKey, theme]);

    return (
        <ThemeContext.Provider value={{ theme, themes, setTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}