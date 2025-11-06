export const theme = {
    extend: {
        keyframes: {
            revolution: {
                '0%': { transform: 'scaleX(0) rotate(0deg)' },
                '50%': { transform: 'scaleX(1) rotate(180deg)' },
                '100%': { transform: 'scaleX(0) rotate(360deg)' },
            },
        },
        animation: {
            revolution: 'revolution 0.6s ease-in-out',
        },
    },
};