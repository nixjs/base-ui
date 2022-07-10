import React from 'react'
import { ComponentMeta } from '@storybook/react'
import { css } from 'styled-components'
import { Pagination } from '@nixjs23n6/baseui-pagination'

export default {
    title: 'Navigation/Pagination',
    argTypes: {
        as: {
            description: 'The element or component the `Pagination` should render as.',
            table: {
                category: 'Collapse',
                type: {
                    summary: 'string | Component'
                }
            },
            type: 'string'
        },
        initialPage: {
            description: 'Active initial page for uncontrolled component.',
            table: {
                category: 'General',
                type: {
                    summary: 'number'
                }
            },
            type: 'number'
        },
        page: {
            description: 'Active page number.',
            table: {
                category: 'General',
                type: {
                    summary: 'number'
                }
            },
            type: 'number'
        },
        total: {
            description: 'Total amount of pages.',
            table: {
                category: 'General',
                type: {
                    summary: 'number'
                }
            },
            type: 'number'
        },
        siblings: {
            description: 'Amount on left/right side of selected page.',
            table: {
                category: 'General',
                type: {
                    summary: '1'
                }
            },
            type: 'number'
        },
        boundaries: {
            description: 'Amount of elements visible on left/right edges.',
            table: {
                category: 'General',
                type: {
                    summary: '1'
                }
            },
            type: 'number'
        },
        withControls: {
            description: 'Show/hide prev/next controls.',
            table: {
                category: 'General',
                type: {
                    summary: 'true'
                }
            },
            type: 'boolean'
        },
        withEdges: {
            description: 'Show/hide jump to start/end controls.',
            table: {
                category: 'General',
                type: {
                    summary: 'true'
                }
            },
            type: 'boolean'
        },
        dotsJump: {
            description: 'Number of pages that are added or subtracted on the `...` button.',
            table: {
                category: 'General',
                type: {
                    summary: '5'
                }
            },
            type: 'number'
        },
        onChange: {
            description: 'Callback fired after change of each page.',
            table: {
                category: 'General',
                type: {
                    summary: '(page: number) => void'
                }
            },
            type: 'number'
        },
        prevControlLabel: {
            description: 'The custom previous button.',
            table: {
                category: 'General',
                type: {
                    summary: 'ReactNode'
                }
            },
            type: 'boolean'
        },
        nextControlLabel: {
            description: 'The custom next button.',
            table: {
                category: 'General',
                type: {
                    summary: 'ReactNode'
                }
            },
            type: 'boolean'
        },
        firstEdgeLabel: {
            description: 'The custom first button.',
            table: {
                category: 'General',
                type: {
                    summary: 'ReactNode'
                }
            },
            type: 'boolean'
        },
        lastEdgeLabel: {
            description: 'The custom last button.',
            table: {
                category: 'General',
                type: {
                    summary: 'ReactNode'
                }
            },
            type: 'boolean'
        },
        overrideStyled: {
            description: 'Style for modal. See more: https://styled-components.com/docs/api#css.',
            table: {
                category: 'General',
                type: {
                    summary: 'Empty'
                }
            },
            type: 'string'
        }
    }
} as ComponentMeta<any>

export const Default: React.FC = () => {
    return (
        <div className="container-box">
            <Pagination as="article" total={20} initialPage={1} />
        </div>
    )
}

export const NoControls: React.FC = () => {
    return (
        <div className="container-box">
            <Pagination total={20} initialPage={1} withControls={false} />
        </div>
    )
}

export const NoEdges: React.FC = () => {
    return (
        <div className="container-box">
            <Pagination total={20} initialPage={1} withEdges={false} />
        </div>
    )
}

export const Siblings: React.FC = () => {
    return (
        <div className="container-box">
            <Pagination total={20} initialPage={6} />
            <br />
            <br />
            <Pagination total={20} initialPage={6} siblings={2} />
            <br />
            <br />
            <Pagination total={20} initialPage={6} siblings={3} />
        </div>
    )
}

export const Boundaries: React.FC = () => {
    return (
        <div className="container-box">
            <Pagination total={20} initialPage={6} />
            <br />
            <br />
            <Pagination total={20} initialPage={6} boundaries={2} />
            <br />
            <br />
            <Pagination total={20} initialPage={6} boundaries={3} />
        </div>
    )
}

export const Loop: React.FC = () => {
    return (
        <div className="container-box">
            <Pagination total={20} initialPage={1} loop />
        </div>
    )
}
