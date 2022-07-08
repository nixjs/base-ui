// .storybook/manager.js

import { addons } from '@storybook/addons'
import { themes } from '@storybook/theming'

addons.setConfig({
    theme: themes.dark,
    panelPosition: 'right'

    //   isFullscreen: false,
    //   showNav: true,
    //   showPanel: true,
    //   panelPosition: 'bottom',
    //   enableShortcuts: true,
    //   isToolshown: true,
    //   theme: undefined,
    //   selectedPanel: undefined,
    //   initialActive: 'sidebar',
    //   sidebar: {
    //     showRoots: false,
    //     collapsedRoots: ['other'],
    //   },
    //   toolbar: {
    //     title: { hidden: false, },
    //     zoom: { hidden: false, },
    //     eject: { hidden: false, },
    //     copy: { hidden: false, },
    //     fullscreen: { hidden: false, },
    //   },
})
