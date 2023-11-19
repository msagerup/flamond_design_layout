import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          mobile: 'var(--spacing-xs)',
          tablet: 'var(--spacing-md)',  // Error here in the figma design file. Spacing rules specify multiples by 8 px, but layout draft specifies padding here on 34 px, It should be 32px. ? Value set currently to 32px.     
          desktop_sm: 'var(--spacing-lg)', // Padding  here is confusing,  padding set to to 48px. 
          desktop_md: 'var(--spacing-xxl)', // max-width with padding, 1440 px
          desktop_lg: '240px'// should be 240px to keep max with of 1440px, not correct in figma.
        }
      },
      // These are off in the figma file, there are some big jumps here between the break points.
      // We should have more breakpoints values for mobile and tablets.
      screens: {
        mobile: "348px",
        tablet: "768px",
        desktop_sm: "1280px", // This is a bit  confusing  in the figma file, I it should be 1280 not 1200? Set to 1280px. 
        desktop_md: "1400px",
        desktop_lg: "1920px",
      },
      spacing: {
        'xxs': 'var(--spacing-xxs)',
        'xs': 'var(--spacing-xs)',
        'sm': 'var(--spacing-sm)',
        'md': 'var(--spacing-md)',
        'lg': 'var(--spacing-lg)',
        'xl': 'var(--spacing-xl)',
        'xxl': 'var(--spacing-xxl)',
        'xxxl': 'var(--spacing-xxxl)',
      },
    },
  },
  plugins: [],
}
export default config


