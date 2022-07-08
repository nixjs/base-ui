import '@nixjs23n6/baseui-core/lib/css/index.min.css'
import './styles/code.css'
import './styles/index.css'
import { themes } from '@storybook/theming'

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    },

    // themes: {
    //     default: 'Dark',
    //     list: [{ name: 'Dark', class: 'body-baseInkDarker', color: '#1b2649' }],
    // },
    docs: {
        theme: themes.dark
    },
    options: {
        storySort: {
            order: [
                'Foundations',
                ['Introduction', 'Colors', 'Shadow', 'Typography'],
                'Layout',
                ['Breakpoints', 'Container', 'Row', 'Col'],
                'Navigation',
                'DataEntry',
                'DataDisplay',
                'Feedback'
            ]
        }
    }
    // layout: { panelPosition: 'right' }
}
