import React from 'react'
import { Row } from '@nixjs23n6/baseui-grid'
import { Col } from '@nixjs23n6/baseui-grid'
import { Button } from '@nixjs23n6/baseui-button'
// import { SpinnerLoader } from '../feedback/Spinner'
// import IconAvatar from '../dataDisplay/Icon/IconAvatar'
// import IconBinance from '../dataDisplay/Icon/IconBinance'
// import IconGoogle from '../dataDisplay/Icon/IconGoogle'

export default {
    title: 'Generals/Button',
    argTypes: {}
}

export const Default: React.FC = () => {
    return (
        <div className="container-box">
            <Button type="button" variant="primary" size="md">
                Primary
            </Button>
            <br />
            <br />
            <Button href="demo" as="a" variant="link" size="md">
                Button with a tag
            </Button>
            <br />
            <br />
            <Button as="span" role="button" variant="link" size="md">
                Button with span tag
            </Button>
        </div>
    )
}

export const Variants: React.FC = () => {
    return (
        <div className="container-box">
            <Button type="button" variant="primary">
                Primary
            </Button>
            <br />
            <br />
            <Button type="button" variant="secondary">
                Secondary
            </Button>
            <br />
            <br />
            <Button type="button" variant="success">
                Success
            </Button>
            <br />
            <br />
            <Button type="button" variant="info">
                Info
            </Button>
            <br />
            <br />
            <Button type="button" variant="warning">
                Warning
            </Button>
            <br />
            <br />
            <Button type="button" variant="danger">
                Danger
            </Button>
            <br />
            <br />
            <Button type="button" variant="light">
                Light
            </Button>
            <br />
            <br />
            <Button type="button" variant="dark">
                Dark
            </Button>
            <br />
            <br />
            <Button type="button" variant="gradient">
                Gradient
            </Button>
        </div>
    )
}

export const Sizes: React.FC = () => (
    <Row>
        <Col md={6}>
            <Button type="button" variant="primary" size="xs">
                Mini
            </Button>
            <br />
            <br />
            <Button type="button" variant="primary" size="sm">
                Small
            </Button>
            <br />
            <br />
            <Button type="button" variant="primary" size="md">
                Medium
            </Button>
            <br />
            <br />
            <Button type="button" variant="primary" size="lg">
                Large
            </Button>
            <br />
            <br />
            <Button type="button" variant="primary" size="xl">
                XLarge
            </Button>
            <br />
            <br />
            <Button type="button" variant="primary" size="xxl">
                XXLarge
            </Button>
            <br />
            <br />
            <Button type="button" variant="primary" size="md" autoWidth>
                Auto Width
            </Button>
        </Col>
    </Row>
)

export const Outlines: React.FC = () => {
    return (
        <div className="container-box">
            <Button type="button" variant="primary" outline>
                Primary
            </Button>
            <br />
            <br />
            <Button type="button" variant="secondary" outline>
                Secondary
            </Button>
            <br />
            <br />
            <Button type="button" variant="success" outline>
                Success
            </Button>
            <br />
            <br />
            <Button type="button" variant="info" outline>
                Info
            </Button>
            <br />
            <br />
            <Button type="button" variant="warning" outline>
                Warning
            </Button>
            <br />
            <br />
            <Button type="button" variant="danger" outline>
                Danger
            </Button>
            <br />
            <br />
            <Button type="button" variant="light" outline>
                Light
            </Button>
            <br />
            <br />
            <Button type="button" variant="dark" outline>
                Dark
            </Button>
        </div>
    )
}
