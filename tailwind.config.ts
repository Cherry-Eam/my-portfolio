import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    content: [
        './app/**/*.{vue,ts}',
        './components/**/*.{vue,ts}',
        './pages/**/*.{vue,ts}',
        './layouts/**/*.{vue,ts}'
    ],
    theme: {
        extend: {
            colors: {
                cherry: {
                    blossom: '#FEE3EC',
                    petal: '#F9C5D5',
                    bloom: '#F999B7',
                    red: '#F2789F'
                }
            },
            fontFamily: {
                display: ['Fraunces', 'serif'],
                body: ['Inter', 'sans-serif'],
                mono: ['IBM Plex Mono', 'monospace']
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' }
                }
            },
            animation: {
                marquee: 'marquee 24s linear infinite'
            }
        }
    }
}
