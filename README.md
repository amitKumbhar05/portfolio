# Portfolio Website

This is a portfolio website built with Next.js and Tailwind CSS.

## Features

*   Responsive design
*   Dark and light mode theme switching
*   Smooth animations with Framer Motion

## Dark/Light Mode Implementation

The dark and light mode theme switching is implemented using `next-themes` and Tailwind CSS's `class` strategy.

### 1. Configuration

In `tailwind.config.js`, the `darkMode` option is set to `'class'`:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  // ...
}
```

This tells Tailwind to apply dark mode styles whenever a `dark` class is present on an ancestor element.

### 2. Theme Provider

In `src/app/layout.tsx`, the entire application is wrapped with the `ThemeProvider` from `next-themes`.

```tsx
import { ThemeProvider } from "next-themes";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

- `attribute="class"`: This tells `next-themes` to toggle the `dark` class on the `html` element.
- `defaultTheme="system"`: The default theme is set to the user's system preference.
- `enableSystem`: Allows the theme to be automatically updated when the system theme changes.
- `suppressHydrationWarning`: This is added to the `<html>` tag to prevent warnings caused by the theme being set on the server and then updated on the client.

### 3. Theme Toggle Component

The theme toggle functionality is located in the `src/components/Navbar.tsx` component.

```tsx
"use client"
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <nav>
      {/* ... other navbar code */}
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? <Sun /> : <Moon />}
      </button>
    </nav>
  );
};
```

- The `useTheme` hook provides the current `theme` and the `setTheme` function to update it.
- The button's `onClick` handler toggles the theme between `'light'` and `'dark'`.
- The `mounted` state is used to ensure that the theme toggle UI is only rendered on the client. This is important to avoid a hydration mismatch between the server-rendered and client-rendered HTML, since the theme is not known on the server.

### 4. Styling

With this setup, you can now use the `dark:` utility variant in your Tailwind CSS classes to apply styles for dark mode.

For example:

```jsx
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  This will have a white background in light mode and a dark gray background in dark mode.
</div>
