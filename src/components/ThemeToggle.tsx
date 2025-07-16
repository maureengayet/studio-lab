'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { useEffect } from 'react';
import { SunIcon } from '@heroicons/react/24/outline';
import { MoonIcon } from '@heroicons/react/24/solid';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <button className="h-8 w-8" onClick={toggleTheme}>
        {theme === 'dark' ? (
          <SunIcon className="inline size-5" />
        ) : (
          <MoonIcon className="inline size-4" />
        )}
      </button>
    </div>
  );
};
