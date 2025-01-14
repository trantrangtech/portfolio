/** @type {import('tailwindcss').Config} */
const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      // screens: {
      //   "2xl": "1400px",
      // },
      screens:{
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px',
      }
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        tertiary: {
          DEFAULT: "hsl(var(--tertiary))",
          // foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage:{
        hero: `url(${basePath}/hero/hero-bg.png)`,
        hero_shape: `url(${basePath}/hero/shape-1.svg)`,
        hero_shape2_light: `url(${basePath}/hero/shape-2-light.svg)`,
        hero_shape2_dark: `url(${basePath}/hero/shape-2-dark.svg)`,
        about_shape_light: `url(${basePath}/about/shape-light.svg)`,
        about_shape_dark: `url(${basePath}/about/shape-dark.svg)`,
        dots_light:`url(${basePath}/dots-light.svg)`,
        dots_dark:`url(${basePath}/dots-dark.svg)`,
        work_project_bg_light:`url(${basePath}/work/project-bg-light.png)`,
        work_project_bg_dark:`url(${basePath}/work/project-bg-dark.png)`,
        contact_illustration_light:`url(${basePath}/contact/illustration-light.svg)`,
        contact_illustration_dark:`url(${basePath}/contact/illustration-dark.svg)`,
        
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}