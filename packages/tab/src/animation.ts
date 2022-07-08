import { AnimationProp } from '@nixjs23n6/baseui-core'

export const DURATION_MS: number = 300

export const defaultStyle = {
    fadeIn: {
        transition: `opacity ${DURATION_MS}ms ease-in-out`,
        opacity: 0
    },
    fadeInDown: {
        transition: `opacity ${DURATION_MS}ms ease-in-out`,
        opacity: 0
    },
    fadeInUp: {
        transition: `opacity ${DURATION_MS}ms ease-in-out`,
        opacity: 0
    },
    fadeInLeft: {
        transition: `opacity ${DURATION_MS}ms ease-in-out`,
        opacity: 0
    },
    fadeInRight: {
        transition: `opacity ${DURATION_MS}ms ease-in-out`,
        opacity: 0
    },

    slideInDown: {
        transition: `visibility ${DURATION_MS}ms ease-in-out`,
        visibility: 'hidden'
    },
    slideInUp: {
        transition: `visibility ${DURATION_MS}ms ease-in-out`,
        visibility: 'hidden'
    },
    slideInLeft: {
        transition: `visibility ${DURATION_MS}ms ease-in-out`,
        visibility: 'hidden'
    },
    slideInRight: {
        transition: `visibility ${DURATION_MS}ms ease-in-out`,
        visibility: 'hidden'
    }
}

export const transitionStyles: AnimationProp = {
    fadeIn: {
        entering: { opacity: 0, display: 'none' },
        entered: { opacity: 1, display: 'block', transition: `opacity ${DURATION_MS}ms` },
        exiting: { opacity: 0, display: 'block', transition: `opacity ${DURATION_MS}ms` },
        exited: { opacity: 1, display: 'none' }
    },
    fadeInDown: {
        entering: { opacity: 0, transform: 'translateY(-10%)' },
        entered: {
            opacity: 1,
            transform: 'none',
            transition: `opacity ${DURATION_MS}ms, transform ${DURATION_MS}ms`
        },
        exiting: { opacity: 0, transform: 'translateY(-10%)', transition: `opacity ${DURATION_MS}ms, transform ${DURATION_MS}ms` },
        exited: {
            opacity: 1
        }
    },
    fadeInUp: {
        entering: { opacity: 0, transform: 'translateY(10%)' },
        entered: {
            opacity: 1,
            transform: 'translateX(0) translateY(0)',
            transition: `opacity ${DURATION_MS}ms, transform ${DURATION_MS}ms`
        },
        exiting: { opacity: 0, transform: 'translateY(10%)', transition: `opacity ${DURATION_MS}ms, transform ${DURATION_MS}ms` },
        exited: {
            opacity: 1
        }
    },
    fadeInLeft: {
        entering: { opacity: 0, transform: 'translateX(-10%)' },
        entered: {
            opacity: 1,
            transform: 'translateX(0)',
            transition: `opacity ${DURATION_MS}ms, transform ${DURATION_MS}ms`
        },
        exiting: { opacity: 0, transform: 'translateX(-10%)', transition: `opacity ${DURATION_MS}ms, transform ${DURATION_MS}ms` },
        exited: {
            opacity: 1
        }
    },
    fadeInRight: {
        entering: { opacity: 0, transform: 'translateX(10%)' },
        entered: {
            opacity: 1,
            transform: 'translateX(0)',
            transition: `opacity ${DURATION_MS}ms, transform ${DURATION_MS}ms`
        },
        exiting: { opacity: 0, transform: 'translateX(10%)', transition: `opacity ${DURATION_MS}ms, transform ${DURATION_MS}ms` },
        exited: {
            opacity: 1
        }
    },
    slideInDown: {
        entering: { visibility: 'hidden', transform: 'translate3d(0, -10%, 0)' },
        entered: {
            visibility: 'visible',
            transform: 'translate3d(0, 0, 0)',
            transition: `visibility ${DURATION_MS}ms, transform ${DURATION_MS}ms`
        },
        exiting: {
            visibility: 'hidden',
            transform: 'translate3d(0, -10%, 0)',
            transition: `visibility ${DURATION_MS}ms, transform ${DURATION_MS}ms`
        },
        exited: {
            visibility: 'visible'
        }
    },
    slideInUp: {
        entering: { visibility: 'hidden', transform: 'translate3d(0, 10%, 0)' },
        entered: {
            visibility: 'visible',
            transform: 'translate3d(0, 0, 0)',
            transition: `visibility ${DURATION_MS}ms, transform ${DURATION_MS}ms`
        },
        exiting: {
            visibility: 'hidden',
            transform: 'translate3d(0, 10%, 0)',
            transition: `visibility ${DURATION_MS}ms, transform ${DURATION_MS}ms`
        },
        exited: {
            visibility: 'visible'
        }
    },
    slideInLeft: {
        entering: { visibility: 'hidden', transform: 'translate3d(-10%, 0, 0)' },
        entered: {
            visibility: 'visible',
            transform: 'translate3d(0, 0, 0)',
            transition: `visibility ${DURATION_MS}ms, transform ${DURATION_MS}ms`
        },
        exiting: {
            visibility: 'hidden',
            transform: 'translate3d(-10%, 0, 0)',
            transition: `visibility ${DURATION_MS}ms, transform ${DURATION_MS}ms`
        },
        exited: {
            visibility: 'visible'
        }
    },
    slideInRight: {
        entering: { visibility: 'hidden', transform: 'translate3d(10%, 0, 0)' },
        entered: {
            visibility: 'visible',
            transform: 'translate3d(0, 0, 0)',
            transition: `visibility ${DURATION_MS}ms, transform ${DURATION_MS}ms`
        },
        exiting: {
            visibility: 'hidden',
            transform: 'translate3d(10%, 0, 0)',
            transition: `visibility ${DURATION_MS}ms, transform ${DURATION_MS}ms`
        },
        exited: {
            visibility: 'visible'
        }
    }
}
