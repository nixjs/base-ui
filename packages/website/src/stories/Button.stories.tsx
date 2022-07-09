import React from 'react'
import { Row } from '@nixjs23n6/baseui-grid'
import { Col } from '@nixjs23n6/baseui-grid'
import { Button } from '@nixjs23n6/baseui-button'
import { Spinner } from '@nixjs23n6/baseui-spinner'
import IconAvatar from './Icon/IconAvatar'
import IconBinance from './Icon/IconBinance'
import IconGoogle from './Icon/IconGoogle'

export default {
    title: 'Form/Button',
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

export const Icons: React.FC = () => (
    <div>
        <div className="d-flex align-items-center gap-1">
            <Button type="button" variant="warning" size="md" icon={<IconAvatar height={24} width={24} />} /> <br />
            <Button type="button" variant="danger" size="md" icon={<IconGoogle height={24} width={24} />} /> <br />
            <Button type="button" variant="dark" size="md" icon={<IconAvatar height={24} width={24} />} /> <br />
            <Button type="button" variant="light" size="md" icon={<IconBinance height={24} width={24} />} />
        </div>
        <br />
        <br />
        <Button type="button" variant="primary" size="md" startIcon={<IconAvatar height={24} width={24} />}>
            Primary
        </Button>
        <br />
        <br />
        <Button type="button" variant="light" size="md" endIcon={<IconGoogle height={24} width={24} />} minWidth="20rem">
            Google
        </Button>
        <br />
        <br />
        <Button type="button" variant="light" size="md" endIcon={<IconBinance height={24} width={24} />} minWidth="20rem">
            Binance Chain Wallet
        </Button>
        <br />
        <br />
        <Button type="button" variant="dark" size="md" startIcon={<IconGoogle height={24} width={24} />} minWidth="20rem">
            Google
        </Button>
        <br />
        <br />
        <Button type="button" variant="dark" size="md" startIcon={<IconBinance height={24} width={24} />} minWidth="20rem">
            Binance Chain Wallet
        </Button>
    </div>
)

export const Loading: React.FC = () => (
    <>
        <div className="d-flex align-items-center gap-1">
            <Button type="button" variant="primary" size="xs" isLoading spinnerLoading={<Spinner size="xs" content="loader-1" />}>
                Loading
            </Button>
            <Button type="button" variant="primary" size="sm" isLoading spinnerLoading={<Spinner size="sm" content="loader-1" />}>
                Loading
            </Button>
            <Button type="button" variant="primary" size="md" isLoading spinnerLoading={<Spinner size="md" content="loader-1" />}>
                Loading
            </Button>
            <Button type="button" variant="primary" size="lg" isLoading spinnerLoading={<Spinner size="lg" content="loader-1" />}>
                Loading
            </Button>
            <Button type="button" variant="primary" size="xl" isLoading spinnerLoading={<Spinner size="xl" content="loader-1" />}>
                Loading
            </Button>
            <Button type="button" variant="primary" size="xxl" isLoading spinnerLoading={<Spinner size="xxl" content="loader-1" />}>
                Loading
            </Button>
        </div>
        <br />
        <br />
        <div className="d-flex align-items-center gap-1">
            <Button
                type="button"
                variant="warning"
                size="xs"
                isLoading
                spinnerLoading={<Spinner size="xs" variant="primary" content="loader-2" />}
            >
                Loading
            </Button>
            <Button
                type="button"
                variant="warning"
                size="sm"
                isLoading
                spinnerLoading={<Spinner size="sm" variant="primary" content="loader-2" />}
            >
                Loading
            </Button>
            <Button
                type="button"
                variant="warning"
                size="md"
                isLoading
                spinnerLoading={<Spinner size="md" variant="primary" content="loader-2" />}
            >
                Loading
            </Button>
            <Button
                type="button"
                variant="warning"
                size="lg"
                isLoading
                spinnerLoading={<Spinner size="lg" variant="primary" content="loader-2" />}
            >
                Loading
            </Button>
            <Button
                type="button"
                variant="warning"
                size="xl"
                isLoading
                spinnerLoading={<Spinner size="xl" variant="primary" content="loader-2" />}
            >
                Loading
            </Button>
            <Button
                type="button"
                variant="warning"
                size="xxl"
                isLoading
                spinnerLoading={<Spinner size="xxl" variant="primary" content="loader-2" />}
            >
                Loading
            </Button>
        </div>
        <br />
        <br />
        <div className="d-flex align-items-center gap-1">
            <Button
                type="button"
                variant="warning"
                size="xs"
                isLoading
                spinnerLoading={<Spinner size="xs" variant="primary" content="loader-3" />}
            >
                Loading
            </Button>
            <Button
                type="button"
                variant="warning"
                size="sm"
                isLoading
                spinnerLoading={<Spinner size="sm" variant="primary" content="loader-3" />}
            >
                Loading
            </Button>
            <Button
                type="button"
                variant="warning"
                size="md"
                isLoading
                spinnerLoading={<Spinner size="md" variant="primary" content="loader-3" />}
            >
                Loading
            </Button>
            <Button
                type="button"
                variant="warning"
                size="lg"
                isLoading
                spinnerLoading={<Spinner size="lg" variant="primary" content="loader-3" />}
            >
                Loading
            </Button>
            <Button
                type="button"
                variant="warning"
                size="xl"
                isLoading
                spinnerLoading={<Spinner size="xl" variant="primary" content="loader-3" />}
            >
                Loading
            </Button>
            <Button
                type="button"
                variant="warning"
                size="xxl"
                isLoading
                spinnerLoading={<Spinner size="xxl" variant="primary" content="loader-3" />}
            >
                Loading
            </Button>
        </div>
        <br />
        <br />
        <div className="d-flex align-items-center gap-1">
            <Button
                type="button"
                variant="warning"
                size="xs"
                isLoading
                spinnerLoading={<Spinner size="xs" variant="primary" content="loader-4" />}
            >
                Loading
            </Button>
            <Button
                type="button"
                variant="warning"
                size="sm"
                isLoading
                spinnerLoading={<Spinner size="sm" variant="primary" content="loader-4" />}
            >
                Loading
            </Button>
            <Button
                type="button"
                variant="warning"
                size="md"
                isLoading
                spinnerLoading={<Spinner size="md" variant="primary" content="loader-4" />}
            >
                Loading
            </Button>
            <Button
                type="button"
                variant="warning"
                size="lg"
                isLoading
                spinnerLoading={<Spinner size="lg" variant="primary" content="loader-4" />}
            >
                Loading
            </Button>
            <Button
                type="button"
                variant="warning"
                size="xl"
                isLoading
                spinnerLoading={<Spinner size="xl" variant="primary" content="loader-4" />}
            >
                Loading
            </Button>
            <Button
                type="button"
                variant="warning"
                size="xxl"
                isLoading
                spinnerLoading={<Spinner size="xxl" variant="primary" content="loader-4" />}
            >
                Loading
            </Button>
        </div>
        <br />
        <br />
        <div className="d-flex align-items-center gap-1">
            <Button
                type="button"
                variant="warning"
                size="xs"
                isLoading
                spinnerLoading={<Spinner size="xs" variant="primary" content="loader-5" />}
            >
                Loading
            </Button>
            <Button
                type="button"
                variant="warning"
                size="sm"
                isLoading
                spinnerLoading={<Spinner size="sm" variant="primary" content="loader-5" />}
            >
                Loading
            </Button>
            <Button
                type="button"
                variant="warning"
                size="md"
                isLoading
                spinnerLoading={<Spinner size="md" variant="primary" content="loader-5" />}
            >
                Loading
            </Button>
            <Button
                type="button"
                variant="warning"
                size="lg"
                isLoading
                spinnerLoading={<Spinner size="lg" variant="primary" content="loader-5" />}
            >
                Loading
            </Button>
            <Button
                type="button"
                variant="warning"
                size="xl"
                isLoading
                spinnerLoading={<Spinner size="xl" variant="primary" content="loader-5" />}
            >
                Loading
            </Button>
            <Button
                type="button"
                variant="warning"
                size="xxl"
                isLoading
                spinnerLoading={<Spinner size="xxl" variant="primary" content="loader-5" />}
            >
                Loading
            </Button>
        </div>
        <br />
        <br />
        <div className="d-flex align-items-center gap-1">
            <Button
                type="button"
                variant="warning"
                size="xs"
                isLoading
                spinnerLoading={<Spinner size="xs" variant="primary" content="loader-6" />}
            >
                Loading
            </Button>
            <Button
                type="button"
                variant="warning"
                size="sm"
                isLoading
                spinnerLoading={<Spinner size="sm" variant="primary" content="loader-6" />}
            >
                Loading
            </Button>
            <Button
                type="button"
                variant="warning"
                size="md"
                isLoading
                spinnerLoading={<Spinner size="md" variant="primary" content="loader-6" />}
            >
                Loading
            </Button>
            <Button
                type="button"
                variant="warning"
                size="lg"
                isLoading
                spinnerLoading={<Spinner size="lg" variant="primary" content="loader-6" />}
            >
                Loading
            </Button>
            <Button
                type="button"
                variant="warning"
                size="xl"
                isLoading
                spinnerLoading={<Spinner size="xl" variant="primary" content="loader-6" />}
            >
                Loading
            </Button>
            <Button
                type="button"
                variant="warning"
                size="xxl"
                isLoading
                spinnerLoading={<Spinner size="xxl" variant="primary" content="loader-6" />}
            >
                Loading
            </Button>
        </div>
        <br />
        <br />
        <div className="d-flex align-items-center gap-1">
            <Button
                type="button"
                variant="warning"
                size="xs"
                isLoading
                spinnerLoading={<Spinner size="xs" variant="primary" content="loader-7" />}
            >
                Loading
            </Button>
            <Button
                type="button"
                variant="warning"
                size="sm"
                isLoading
                spinnerLoading={<Spinner size="sm" variant="primary" content="loader-7" />}
            >
                Loading
            </Button>
            <Button
                type="button"
                variant="warning"
                size="md"
                isLoading
                spinnerLoading={<Spinner size="md" variant="primary" content="loader-7" />}
            >
                Loading
            </Button>
            <Button
                type="button"
                variant="warning"
                size="lg"
                isLoading
                spinnerLoading={<Spinner size="lg" variant="primary" content="loader-7" />}
            >
                Loading
            </Button>
            <Button
                type="button"
                variant="warning"
                size="xl"
                isLoading
                spinnerLoading={<Spinner size="xl" variant="primary" content="loader-7" />}
            >
                Loading
            </Button>
            <Button
                type="button"
                variant="warning"
                size="xxl"
                isLoading
                spinnerLoading={<Spinner size="xxl" variant="primary" content="loader-7" />}
            >
                Loading
            </Button>
        </div>
        <br />
        <br />
        <div className="d-flex align-items-center gap-1">
            <Button
                type="button"
                variant="warning"
                size="xs"
                isLoading
                spinnerLoading={<Spinner size="xs" variant="primary" content="loader-8" />}
            >
                Loading
            </Button>
            <Button
                type="button"
                variant="warning"
                size="sm"
                isLoading
                spinnerLoading={<Spinner size="sm" variant="primary" content="loader-8" />}
            >
                Loading
            </Button>
            <Button
                type="button"
                variant="warning"
                size="md"
                isLoading
                spinnerLoading={<Spinner size="md" variant="primary" content="loader-8" />}
            >
                Loading
            </Button>
            <Button
                type="button"
                variant="warning"
                size="lg"
                isLoading
                spinnerLoading={<Spinner size="lg" variant="primary" content="loader-8" />}
            >
                Loading
            </Button>
            <Button
                type="button"
                variant="warning"
                size="xl"
                isLoading
                spinnerLoading={<Spinner size="xl" variant="primary" content="loader-8" />}
            >
                Loading
            </Button>
            <Button
                type="button"
                variant="warning"
                size="xxl"
                isLoading
                spinnerLoading={<Spinner size="xxl" variant="primary" content="loader-8" />}
            >
                Loading
            </Button>
        </div>
        <br />
        <br />
        <div className="d-flex align-items-center gap-1">
            <Button
                type="button"
                variant="warning"
                size="xs"
                isLoading
                spinnerLoading={<Spinner size="xs" variant="primary" content="loader-9" />}
            >
                Loading
            </Button>
            <Button
                type="button"
                variant="warning"
                size="sm"
                isLoading
                spinnerLoading={<Spinner size="sm" variant="primary" content="loader-9" />}
            >
                Loading
            </Button>
            <Button
                type="button"
                variant="warning"
                size="md"
                isLoading
                spinnerLoading={<Spinner size="md" variant="primary" content="loader-9" />}
            >
                Loading
            </Button>
            <Button
                type="button"
                variant="warning"
                size="lg"
                isLoading
                spinnerLoading={<Spinner size="lg" variant="primary" content="loader-9" />}
            >
                Loading
            </Button>
            <Button
                type="button"
                variant="warning"
                size="xl"
                isLoading
                spinnerLoading={<Spinner size="xl" variant="primary" content="loader-9" />}
            >
                Loading
            </Button>
            <Button
                type="button"
                variant="warning"
                size="xxl"
                isLoading
                spinnerLoading={<Spinner size="xxl" variant="primary" content="loader-9" />}
            >
                Loading
            </Button>
        </div>
        <br />
        <br />
        <div className="d-flex align-items-center gap-1">
            <Button
                type="button"
                variant="warning"
                size="xs"
                isLoading
                spinnerLoading={<Spinner size="xs" variant="primary" content="loader-10" />}
            >
                Loading
            </Button>
            <Button
                type="button"
                variant="warning"
                size="sm"
                isLoading
                spinnerLoading={<Spinner size="sm" variant="primary" content="loader-10" />}
            >
                Loading
            </Button>
            <Button
                type="button"
                variant="warning"
                size="md"
                isLoading
                spinnerLoading={<Spinner size="md" variant="primary" content="loader-10" />}
            >
                Loading
            </Button>
            <Button
                type="button"
                variant="warning"
                size="lg"
                isLoading
                spinnerLoading={<Spinner size="lg" variant="primary" content="loader-10" />}
            >
                Loading
            </Button>
            <Button
                type="button"
                variant="warning"
                size="xl"
                isLoading
                spinnerLoading={<Spinner size="xl" variant="primary" content="loader-10" />}
            >
                Loading
            </Button>
            <Button
                type="button"
                variant="warning"
                size="xxl"
                isLoading
                spinnerLoading={<Spinner size="xxl" variant="primary" content="loader-10" />}
            >
                Loading
            </Button>
        </div>
    </>
)
