module.exports = {
    important: true,
    theme: {
        screens: {
            'dark': {'raw': '(prefers-color-scheme: dark)'},
            'xl': {'max': '1279px'},
            'xxl': {'min': '1280px'},
            'lg': {'max': '1023px'},
            'md': {'max': '767px'},
            'sm': {'max': '639px'},
            max: '1920px'
        },
        colors: {
            transparent: 'transparent',
            black: '#000000',
            white: '#fff',
            primary: '#fbe0dc',
            secondary: '#d0f0e4',
            gray: {
                dark: '#282a34',
                normal: '#3c3f51',
                'normal-contrast': '#484b5b',
                text: '#718096'
            },
            pink: '#e2336b',
            pink_yellow: '#F77E56',
            yellow: '#fcac46'
        },
        spacing: {
            px: '1px',
            '0': '0',
            '1/2': '0.125rem',
            '2/3': '0.1875rem',
            '1': '0.25rem',
            '2': '0.5rem',
            '3': '0.75rem',
            '4': '1rem',
            '5': '1.25rem',
            '6': '1.5rem',
            '8': '2rem',
            '10': '2.5rem',
            '12': '3rem',
            '16': '4rem',
            '20': '5rem',
            '24': '6rem',
            '28': '7rem',
            '32': '8rem',
            '40': '10rem',
            '48': '12rem',
            '56': '14rem',
            '64': '16rem',
        },
        backgroundColor: theme => theme('colors'),
        backgroundPosition: {
            bottom: 'bottom',
            center: 'center',
            left: 'left',
            'left-bottom': 'left bottom',
            'left-top': 'left top',
            right: 'right',
            'right-bottom': 'right bottom',
            'right-top': 'right top',
            top: 'top',
        },
        backgroundSize: {
            auto: 'auto',
            cover: 'cover',
            contain: 'contain',
        },
        borderColor: theme => ({
            ...theme('colors'),
            default: theme('colors.gray.300', 'currentColor'),
        }),
        borderRadius: {
            none: '0',
            sm: '0.125rem',
            default: '0.25rem',
            lg: '0.5rem',
            full: '9999px',
        },
        borderWidth: {
            '0': '0',
            '1': '1px',
            '2': '2px',
            '3': '3px',
            '4': '4px',
            '8': '8px',
        },
        boxShadow: { // to change
            default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            'bottom-sm': '0 14px 9px -16px rgba(0, 0, 0, 0.29)',
            'bottom-md': '0 14px 9px -16px rgba(0, 0, 0, 0.6)',
            'bottom-lg': '0 15px 47px -10px rgba(0, 0, 0, 0.16)',
            '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
            outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
            none: 'none',
        },
        container: {},
        cursor: {
            auto: 'auto',
            default: 'default',
            pointer: 'pointer',
            wait: 'wait',
            text: 'text',
            move: 'move',
            'not-allowed': 'not-allowed',
        },
        fill: {
            current: 'currentColor',
        },
        flex: {
            '1': '1 1 0%',
            auto: '1 1 auto',
            initial: '0 1 auto',
            none: 'none',
        },
        flexGrow: {
            '0': '0',
            default: '1',
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            6: 6,
            7: 7,
            8: 8,
            9: 9,
            10: 10
        },
        flexShrink: {
            '0': '0',
            default: '1',
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            6: 6,
            7: 7,
            8: 8,
            9: 9,
            10: 10
        },
        fontFamily: {
            sans: [
                'Comfortaa',
                'sans-serif',
            ],
            serif: [
                'Georgia',
            ],
            mono: [
                'Menlo'
            ],

            nunito: [
                'Nunito'
            ]
        },
        fontSize: {
            xs: '0.75rem',
            sm: '0.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.75rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
        },
        fontWeight: {
            light: '300',
            normal: '400',
            semibold: '600',
            bold: '700',
            boldest: '900',
        },
        height: theme => ({
            auto: 'auto',
            ...theme('spacing'),
            '25': '6.25rem',
            '1/2': '50%',
            '1/3': '33.333333%',
            '2/3': '66.666667%',
            '1/4': '25%',
            '2/4': '50%',
            '3/4': '75%',
            '1/5': '20%',
            '2/5': '40%',
            '3/5': '60%',
            '4/5': '80%',
            '1/6': '16.666667%',
            '2/6': '33.333333%',
            '3/6': '50%',
            '4/6': '66.666667%',
            '5/6': '83.333333%',
            '1/12': '8.333333%',
            '2/12': '16.666667%',
            '3/12': '25%',
            '4/12': '33.333333%',
            '5/12': '41.666667%',
            '6/12': '50%',
            '7/12': '58.333333%',
            '8/12': '66.666667%',
            '9/12': '75%',
            '10/12': '83.333333%',
            '11/12': '91.666667%',
            full: '100%',
            '50-screen': '50vh',
            '70-screen': '70vh',
            screen: '100vh',
        }),
        inset: {
            '0': '0',
            auto: 'auto',
        },
        letterSpacing: {
            tighter: '-0.05em',
            tight: '-0.025em',
            normal: '0',
            wide: '0.025em',
            wider: '0.05em',
            widest: '0.1em',
        },
        lineHeight: {
            none: '1',
            tight: '1.25',
            snug: '1.375',
            normal: '1.5',
            relaxed: '1.625',
            loose: '2',
        },
        listStyleType: {
            none: 'none',
            disc: 'disc',
            decimal: 'decimal',
        },
        margin: (theme, {negative}) => ({
            auto: 'auto',
            '1/12': '8.333333%',
            ...theme('spacing'),
            ...negative(theme('spacing')),
        }),
        maxHeight: {
            '0': '0',
            xs: '20rem',
            xxs: '12rem',
            md: '28rem',
            '1/2': '50%',
            '1/3': '33.333333%',
            '2/3': '66.666667%',
            '1/4': '25%',
            '2/4': '50%',
            '3/4': '75%',
            '1/5': '20%',
            '2/5': '40%',
            '3/5': '60%',
            '4/5': '80%',
            '1/6': '16.666667%',
            '2/6': '33.333333%',
            '3/6': '50%',
            '4/6': '66.666667%',
            '5/6': '83.333333%',
            '1/12': '8.333333%',
            '2/12': '16.666667%',
            '3/12': '25%',
            '4/12': '33.333333%',
            '5/12': '41.666667%',
            '6/12': '50%',
            '7/12': '58.333333%',
            '8/12': '66.666667%',
            '9/12': '75%',
            '10/12': '83.333333%',
            '11/12': '91.666667%',
            '90': '90%',
            '3/10': '30%',
            full: '100%',
            screen: '100vh',
        },
        maxWidth: {
            '0': '0',
            xs: '20rem',
            xxs: '12rem',
            md: '28rem',
            '25': '6.25rem',
            '1/2': '50%',
            '1/3': '33.333333%',
            '2/3': '66.666667%',
            '1/4': '25%',
            '2/4': '50%',
            '3/4': '75%',
            '1/5': '20%',
            '2/5': '40%',
            '3/5': '60%',
            '4/5': '80%',
            '1/6': '16.666667%',
            '2/6': '33.333333%',
            '3/6': '50%',
            '4/6': '66.666667%',
            '5/6': '83.333333%',
            '1/12': '8.333333%',
            '2/12': '16.666667%',
            '3/12': '25%',
            '4/12': '33.333333%',
            '5/12': '41.666667%',
            '6/12': '50%',
            '7/12': '58.333333%',
            '8/12': '66.666667%',
            '9/12': '75%',
            '10/12': '83.333333%',
            '11/12': '91.666667%',
            full: '100%',
            '50-screen': '50vh',
            '70-screen': '70vh',
            screen: '100vh',
        },
        minHeight: {
            '0': '0',
            xs: '20rem',
            xxs: '12rem',
            md: '28rem',
            '25': '6.25rem',
            '24': '6rem',
            '20': '5rem',
            '1/2': '50%',
            '1/3': '33.333333%',
            '2/3': '66.666667%',
            '1/4': '25%',
            '2/4': '50%',
            '3/4': '75%',
            '1/5': '20%',
            '2/5': '40%',
            '3/5': '60%',
            '4/5': '80%',
            '1/6': '16.666667%',
            '2/6': '33.333333%',
            '3/6': '50%',
            '4/6': '66.666667%',
            '5/6': '83.333333%',
            '1/12': '8.333333%',
            '2/12': '16.666667%',
            '3/12': '25%',
            '4/12': '33.333333%',
            '5/12': '41.666667%',
            '6/12': '50%',
            '7/12': '58.333333%',
            '8/12': '66.666667%',
            '9/12': '75%',
            '10/12': '83.333333%',
            '11/12': '91.666667%',
            full: '100%',
            '50-screen': '50vh',
            '70-screen': '70vh',
            screen: '100vh',
        },
        minWidth: {
            '0': '0',
            xs: '20rem',
            xxs: '12rem',
            md: '28rem',
            '24': '6rem',
            '20': '5rem',
            '1/2': '50%',
            '1/3': '33.333333%',
            '2/3': '66.666667%',
            '1/4': '25%',
            '2/4': '50%',
            '3/4': '75%',
            '1/5': '20%',
            '2/5': '40%',
            '3/5': '60%',
            '4/5': '80%',
            '1/6': '16.666667%',
            '2/6': '33.333333%',
            '3/6': '50%',
            '4/6': '66.666667%',
            '5/6': '83.333333%',
            '1/12': '8.333333%',
            '2/12': '16.666667%',
            '3/12': '25%',
            '4/12': '33.333333%',
            '5/12': '41.666667%',
            '6/12': '50%',
            '7/12': '58.333333%',
            '8/12': '66.666667%',
            '9/12': '75%',
            '10/12': '83.333333%',
            '11/12': '91.666667%',
            '3/10': '30%',
            full: '100%',
            screen: '100vw',
        },
        objectPosition: {
            bottom: 'bottom',
            center: 'center',
            left: 'left',
            'left-bottom': 'left bottom',
            'left-top': 'left top',
            right: 'right',
            'right-bottom': 'right bottom',
            'right-top': 'right top',
            top: 'top',
        },
        opacity: {
            '0': '0',
            '25': '0.25',
            '50': '0.5',
            '75': '0.75',
            '90': '0.9',
            '100': '1',
        },
        order: {
            first: '-9999',
            last: '9999',
            none: '0',
            '1': '1',
            '2': '2',
            '3': '3'
        },
        padding: theme => theme('spacing'),
        placeholderColor: theme => theme('colors'),
        stroke: {
            current: 'currentColor',
        },
        textColor: theme => theme('colors'),
        width: theme => ({
            auto: 'auto',
            ...theme('spacing'),
            '1/2': '50%',
            '1/3': '33.333333%',
            '2/3': '66.666667%',
            '1/4': '25%',
            '2/4': '50%',
            '3/4': '75%',
            '1/5': '20%',
            '2/5': '40%',
            '3/5': '60%',
            '4/5': '80%',
            '1/6': '16.666667%',
            '2/6': '33.333333%',
            '3/6': '50%',
            '4/6': '66.666667%',
            '5/6': '83.333333%',
            '1/12': '8.333333%',
            '2/12': '16.666667%',
            '3/12': '25%',
            '4/12': '33.333333%',
            '5/12': '41.666667%',
            '6/12': '50%',
            '7/12': '58.333333%',
            '8/12': '66.666667%',
            '9/12': '75%',
            '10/12': '83.333333%',
            '11/12': '91.666667%',
            '3/10': '30%',
            full: '100%',
            screen: '100vw',
        }),
        zIndex: {
            auto: 'auto',
            '0': '0',
            '10': '10',
            '20': '20',
            '30': '30',
            '40': '40',
            '50': '50',
        },
    },
    variants: {
        accessibility: ['responsive', 'children', 'focus'],
        alignContent: ['responsive', 'children'],
        alignItems: ['responsive', 'children'],
        alignSelf: ['responsive', 'children'],
        appearance: ['responsive', 'children'],
        backgroundAttachment: ['responsive', 'children'],
        backgroundColor: ['responsive', 'children', 'hover', 'focus'],
        backgroundPosition: ['responsive', 'children'],
        backgroundRepeat: ['responsive', 'children'],
        backgroundSize: ['responsive', 'children'],
        borderCollapse: ['responsive', 'children'],
        borderColor: ['responsive', 'children', 'hover', 'focus'],
        borderRadius: ['responsive', 'children'],
        borderStyle: ['responsive', 'children'],
        borderWidth: ['responsive', 'children'],
        boxShadow: ['responsive', 'children', 'hover', 'focus'],
        cursor: ['responsive', 'children'],
        display: ['children', 'default', 'first', 'children-first', 'children-last', 'children-odd', 'children-even', 'children-not-first', 'children-not-last', 'children-hover', 'hover', 'children-focus', 'focus', 'children-focus-within', 'focus-within', 'children-active', 'active', 'children-visited', 'visited', 'children-disabled', 'disabled', 'responsive'],
        fill: ['responsive', 'children'],
        flex: ['responsive', 'children'],
        flexDirection: ['responsive', 'children'],
        flexGrow: ['responsive', 'children'],
        flexShrink: ['responsive', 'children'],
        flexWrap: ['responsive', 'children'],
        float: ['responsive', 'children'],
        fontFamily: ['responsive', 'children'],
        fontSize: ['responsive', 'children'],
        fontSmoothing: ['responsive', 'children'],
        fontStyle: ['responsive', 'children'],
        fontWeight: ['responsive', 'children', 'hover', 'focus'],
        height: ['responsive', 'children'],
        inset: ['responsive', 'children'],
        justifyContent: ['responsive', 'children'],
        letterSpacing: ['responsive', 'children'],
        lineHeight: ['responsive', 'children'],
        listStylePosition: ['responsive', 'children'],
        listStyleType: ['responsive', 'children'],
        margin: ['responsive', 'children'],
        maxHeight: ['responsive', 'children'],
        maxWidth: ['responsive', 'children'],
        minHeight: ['responsive', 'children'],
        minWidth: ['responsive', 'children'],
        objectFit: ['responsive', 'children'],
        objectPosition: ['responsive', 'children'],
        opacity: ['responsive', 'children', 'hover', 'focus'],
        order: ['responsive', 'children'],
        outline: ['responsive', 'children', 'focus'],
        overflow: ['responsive', 'children'],
        padding: ['responsive', 'children'],
        placeholderColor: ['responsive', 'children', 'focus'],
        pointerEvents: ['responsive', 'children'],
        position: ['responsive', 'children'],
        resize: ['responsive', 'children'],
        stroke: ['responsive', 'children'],
        tableLayout: ['responsive', 'children'],
        textAlign: ['responsive', 'children'],
        textColor: ['responsive', 'children', 'hover', 'focus'],
        textDecoration: ['responsive', 'children', 'hover', 'focus'],
        textTransform: ['responsive', 'children'],
        userSelect: ['responsive', 'children'],
        verticalAlign: ['responsive', 'children'],
        visibility: ['responsive', 'children'],
        whitespace: ['responsive', 'children'],
        width: ['responsive', 'children'],
        wordBreak: ['responsive', 'children'],
        zIndex: ['responsive', 'children'],
    },
    plugins: [
        require('tailwindcss-children'),
    ]
}
