module.exports = {
    theme: {
        screens: {
            "xxs": "375px",
            "xs": "425px",
            "sm": "640px",
            "md": "768px",
            "lg": "1024px",
            "xl": "1280px",
            "2xl": "1536px",
            "3xl": "2300px",
            "4xl": "2448px",
        }
    },
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
        // For the best performance and to avoid false positives,
        // be as specific as possible with your content configuration.
    ],
};
