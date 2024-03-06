import React, { memo } from "react";
import { themes } from '@/utils/theme';

export default memo(function AntiFlickerScript({ storageKey, theme}) {
    const classList = Object.values(themes).join("','");
    const preferredTheme = `localStorage.getItem('${storageKey}')`;
    const fallbackTheme = theme 
        ?? `(window.matchMedia('(prefers-color-scheme: ${themes.dark})').matches?'${themes.dark}':'${themes.light}')`;
    const script = `(function(root){const theme=${preferredTheme}??${fallbackTheme};root.classList.remove('${classList}');root.classList.add(theme);root.style.colorScheme=theme;})(document.firstElementChild)`;

    return <script dangerouslySetInnerHTML={{ __html: script}} />
}, () => true);