import { read, write, erase } from "./storage";

export const themes = {dark: 'dark', light: 'light'};

const applyTheme = (theme) => {
    const root = document.firstElementChild;
    root.classList.remove(themes.dark, themes.light);
    root.classList.add(theme);
    root.style.colorScheme = theme;
}

export const saveTheme = (storageKey, theme) => {
    erase(storageKey);
    write(storageKey, theme);
    applyTheme(theme);
}

export const getTheme = (storageKey, defaultTheme) => {
    if (typeof window === 'undefined') {
        return defaultTheme;
    }
    return (
        read(storageKey) ??
        defaultTheme ??
        (window.matchMedia(`(prefers-color-scheme: ${themes.dark})`).matches
            ? themes.dark : themes.light)
    );
}
