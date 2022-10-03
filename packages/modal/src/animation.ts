import type { AnimationProp } from '@nixjs23n6/baseui-core'

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
        entering: { opacity: 0, transform: 'scale(0)' },
        entered: {
            opacity: 1,
            transform: 'scale(1)',
            transition: `opacity ${DURATION_MS}ms, transform ${DURATION_MS}ms`
        },
        exiting: {
            opacity: 0,
            transform: 'scale(0)',
            transition: `opacity ${DURATION_MS}ms, transform ${DURATION_MS}ms`
        },
        exited: { opacity: 1, transform: 'scale(1)' }
    },
    fadeInDown: {
        entering: { opacity: 0, transform: 'translateY(-100%)' },
        entered: {
            opacity: 1,
            transform: 'translateY(0%)',
            transition: `opacity ${DURATION_MS}ms, transform ${DURATION_MS}ms`
        },
        exiting: {
            transform: 'translateY(0%)',
            transition: `opacity ${DURATION_MS}ms, transform ${DURATION_MS}ms`
        },
        exited: {
            opacity: 1,
            transform: 'translateY(-100%)'
        }
    },
    fadeInUp: {
        entering: { opacity: 0, transform: 'translateY(100%)' },
        entered: {
            opacity: 1,
            transform: 'translateX(0) translateY(0)',
            transition: `opacity ${DURATION_MS}ms, transform ${DURATION_MS}ms`
        },
        exiting: {
            opacity: 0,
            transform: 'translateY(0%)',
            transition: `opacity ${DURATION_MS}ms, transform ${DURATION_MS}ms`
        },
        exited: {
            opacity: 1,
            transform: 'translateY(100%)'
        }
    },
    fadeInLeft: {
        entering: { opacity: 0, transform: 'translateX(-100%)' },
        entered: {
            opacity: 1,
            transform: 'translateX(0)',
            transition: `opacity ${DURATION_MS}ms, transform ${DURATION_MS}ms`
        },
        exiting: {
            opacity: 0,
            transform: 'translateX(0%)',
            transition: `opacity ${DURATION_MS}ms, transform ${DURATION_MS}ms`
        },
        exited: {
            opacity: 1,
            transform: 'translateX(-100%)'
        }
    },
    fadeInRight: {
        entering: { opacity: 0, transform: 'translateX(100%)' },
        entered: {
            opacity: 1,
            transform: 'translateX(0)',
            transition: `opacity ${DURATION_MS}ms, transform ${DURATION_MS}ms`
        },
        exiting: {
            opacity: 0,
            transform: 'translateX(0%)',
            transition: `opacity ${DURATION_MS}ms, transform ${DURATION_MS}ms`
        },
        exited: {
            opacity: 1,
            transform: 'translateX(100%)'
        }
    },
    slideInDown: {
        entering: { visibility: 'hidden', transform: 'translate3d(0, -100%, 0)' },
        entered: {
            visibility: 'visible',
            transform: 'translate3d(0, 0, 0)',
            transition: `visibility ${DURATION_MS}ms, transform ${DURATION_MS}ms`
        },
        exiting: {
            visibility: 'hidden',
            transform: 'translate3d(0, 0, 0)',
            transition: `visibility ${DURATION_MS}ms, transform ${DURATION_MS}ms`
        },
        exited: {
            visibility: 'visible',
            transform: 'translate3d(0, -100%, 0)'
        }
    },
    slideInUp: {
        entering: { visibility: 'hidden', transform: 'translate3d(0, 100%, 0)' },
        entered: {
            visibility: 'visible',
            transform: 'translate3d(0, 0, 0)',
            transition: `visibility ${DURATION_MS}ms, transform ${DURATION_MS}ms`
        },
        exiting: {
            visibility: 'hidden',
            transform: 'translate3d(0, 0, 0)',
            transition: `visibility ${DURATION_MS}ms, transform ${DURATION_MS}ms`
        },
        exited: {
            visibility: 'visible',
            transform: 'translate3d(0, 100%, 0)'
        }
    },
    slideInLeft: {
        entering: { visibility: 'hidden', transform: 'translate3d(-100%, 0, 0)' },
        entered: {
            visibility: 'visible',
            transform: 'translate3d(0, 0, 0)',
            transition: `visibility ${DURATION_MS}ms, transform ${DURATION_MS}ms`
        },
        exiting: {
            visibility: 'hidden',
            transform: 'translate3d(0, 0, 0)',
            transition: `visibility ${DURATION_MS}ms, transform ${DURATION_MS}ms`
        },
        exited: {
            visibility: 'visible',
            transform: 'translate3d(-100%, 0, 0)'
        }
    },
    slideInRight: {
        entering: { visibility: 'hidden', transform: 'translate3d(100%, 0, 0)' },
        entered: {
            visibility: 'visible',
            transform: 'translate3d(0, 0, 0)',
            transition: `visibility ${DURATION_MS}ms, transform ${DURATION_MS}ms`
        },
        exiting: {
            visibility: 'hidden',
            transform: 'translate3d(0, 0, 0)',
            transition: `visibility ${DURATION_MS}ms, transform ${DURATION_MS}ms`
        },
        exited: {
            visibility: 'visible',
            transform: 'translate3d(100%, 0, 0)'
        }
    }
}
