const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['.src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            extend: {
                fontFamily: {
                    'heads': ['Chivo', 'Helvetica', 'Arial', 'sans-serif'],
                },
                colors: {
                    violet: colors.violet,
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
