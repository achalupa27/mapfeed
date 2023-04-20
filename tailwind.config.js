/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#1a2b41',
                secondary: '#e5e7eb',
                'primary-dark': '#e5e7eb',
                'secondary-dark': '#1a2b41',
            },
        },
    },
    plugins: [],
};
