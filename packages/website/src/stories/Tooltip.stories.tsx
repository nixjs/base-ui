import React from 'react'
import { Tooltip } from '@nixjs23n6/baseui-tooltip'
import { Button } from '@nixjs23n6/baseui-button'

export default {
    title: 'DataDisplay/Tooltip',
    argTypes: {}
}

export const Default: React.FC = () => {
    return (
        <>
            <div className="d-flex align-items-center justify-content-center gap-4">
                <div className="d-flex flex-column flex-shrink-0">
                    <p className="w700 mb-12 text-secondary text-center">Top</p>
                    <div className="d-flex justify-content-center">
                        <Tooltip content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." placement="top">
                            <Button variant="primary">Tooltip on top</Button>
                        </Tooltip>
                    </div>
                </div>
                <div className="d-flex flex-column flex-shrink-0">
                    <p className="w700 mb-12 text-secondary text-center">Right</p>
                    <div className="d-flex justify-content-center">
                        <Tooltip content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." placement="right">
                            <Button variant="primary">Tooltip on right</Button>
                        </Tooltip>
                    </div>
                </div>
                <div className="d-flex flex-column flex-shrink-0">
                    <p className="w700 mb-12 text-secondary text-center">Bottom</p>
                    <div className="d-flex justify-content-center">
                        <Tooltip content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." placement="bottom">
                            <Button variant="primary">Tooltip on bottom</Button>
                        </Tooltip>
                    </div>
                </div>
                <div className="d-flex flex-column flex-shrink-0">
                    <p className="w700 mb-12 text-secondary text-center">Left</p>
                    <div className="d-flex justify-content-center">
                        <Tooltip content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." placement="left">
                            <Button variant="primary">Tooltip on left</Button>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </>
    )
}
