"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Theme = "dark" | "light";

type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
    theme: "dark",
    toggleTheme: () => { },
});

export function useTheme() {
    return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>("dark");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem("fhenix-theme") as Theme | null;
        if (stored === "light" || stored === "dark") {
            setTheme(stored);
            document.documentElement.setAttribute("data-theme", stored);
        }
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        const next = theme === "dark" ? "light" : "dark";
        setTheme(next);
        localStorage.setItem("fhenix-theme", next);
        document.documentElement.setAttribute("data-theme", next);
    };

    // Prevent flash of wrong theme
    if (!mounted) {
        return (
            <div style={{ visibility: "hidden" }}>
                {children}
            </div>
        );
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
