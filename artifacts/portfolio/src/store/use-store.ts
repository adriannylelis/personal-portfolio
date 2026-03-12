import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Language = 'en' | 'pt';
type Theme = 'light' | 'dark';

interface AppState {
  language: Language;
  theme: Theme;
  setLanguage: (lang: Language) => void;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  toggleLanguage: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      language: 'en',
      theme: 'dark', // Default to dark for the developer aesthetic
      setLanguage: (language) => set({ language }),
      setTheme: (theme) => set({ theme }),
      toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
      toggleLanguage: () => set((state) => ({ language: state.language === 'en' ? 'pt' : 'en' })),
    }),
    {
      name: 'portfolio-storage',
    }
  )
);
