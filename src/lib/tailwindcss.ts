export enum ETheme {
  LIGHT = 'light',
  DARK = 'dark',
}

export const setInitialTheme = () => {
  const theme = localStorage.getItem('theme');

  if (
    theme === ETheme.DARK ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add(ETheme.DARK);
  } else {
    document.documentElement.classList.remove(ETheme.DARK);
  }
};

export const toggleTheme = () => {
  if (document.documentElement.classList.contains(ETheme.DARK)) {
    document.documentElement.classList.remove(ETheme.DARK);
    localStorage.setItem('theme', ETheme.LIGHT);
  } else {
    document.documentElement.classList.add(ETheme.DARK);
    localStorage.setItem('theme', ETheme.DARK);
  }
};
