import React, { useEffect, useState } from 'react';

type Props = {
  className?: string;
};

const ThemeToggle: React.FC<Props> = ({ className = '' }) => {
  const [dark, setDark] = useState<boolean>(() => {
    try {
      const stored = localStorage.getItem('theme');
      if (stored) return stored === 'dark';
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  const toggle = () => setDark((d) => !d);

  return (
    <button
      onClick={toggle}
      className={`flex items-center justify-center w-10 h-10 rounded-md border border-muted text-main bg-foreground hover:opacity-90 transition ${className}`}
      aria-pressed={dark}
      aria-label={dark ? 'Mudar para modo claro' : 'Mudar para modo escuro'}
      title={dark ? 'Mudar para modo claro' : 'Mudar para modo escuro'}
    >
      {dark ? (
        /* Sun icon (indicates switch to light) */
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      ) : (
        /* Moon icon (indicates switch to dark) */
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;
