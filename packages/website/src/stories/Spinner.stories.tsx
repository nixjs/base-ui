import React from 'react'
import { Spinner } from '@nixjs23n6/baseui-spinner'

export default {
    title: 'Feedback/Spinner',
    argTypes: {}
}

export const Default: React.FC = () => {
    return (
        <>
            <div className="d-flex align-items-center justify-content-center gap-4">
                <div className="d-flex flex-column flex-shrink-0">
                    <p className="w700 mb-12 text-secondary text-center">Loader 1</p>
                    <div className="d-flex justify-content-center">
                        <Spinner variant="primary" size="md" content="loader-1" />
                    </div>
                </div>
                <div className="d-flex flex-column flex-shrink-0">
                    <p className="w700 mb-12 text-secondary text-center">Loader 2</p>
                    <div className="d-flex justify-content-center">
                        <Spinner variant="primary" size="md" content="loader-2" />
                    </div>
                </div>
                <div className="d-flex flex-column flex-shrink-0">
                    <p className="w700 mb-12 text-secondary text-center">Loader 3</p>
                    <div className="d-flex justify-content-center">
                        <Spinner variant="primary" size="md" content="loader-3" />
                    </div>
                </div>
                <div className="d-flex flex-column flex-shrink-0">
                    <p className="w700 mb-12 text-secondary text-center">Loader 4</p>
                    <div className="d-flex justify-content-center">
                        <Spinner variant="primary" size="md" content="loader-4" />
                    </div>
                </div>
                <div className="d-flex flex-column flex-shrink-0">
                    <p className="w700 mb-12 text-secondary text-center">Loader 5</p>
                    <div className="d-flex justify-content-center">
                        <Spinner variant="primary" size="md" content="loader-5" />
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div className="d-flex align-items-center justify-content-center gap-4">
                <div className="d-flex flex-column flex-shrink-0">
                    <p className="w700 mb-12 text-secondary text-center">Loader 6</p>
                    <div className="d-flex justify-content-center">
                        <Spinner variant="primary" size="md" content="loader-6" />
                    </div>
                </div>
                <div className="d-flex flex-column flex-shrink-0">
                    <p className="w700 mb-12 text-secondary text-center">Loader 7</p>
                    <div className="d-flex justify-content-center">
                        <Spinner variant="primary" size="md" content="loader-7" />
                    </div>
                </div>
                <div className="d-flex flex-column flex-shrink-0">
                    <p className="w700 mb-12 text-secondary text-center">Loader 8</p>
                    <div className="d-flex justify-content-center">
                        <Spinner variant="primary" size="md" content="loader-8" />
                    </div>
                </div>
                <div className="d-flex flex-column flex-shrink-0">
                    <p className="w700 mb-12 text-secondary text-center">Loader 9</p>
                    <div className="d-flex justify-content-center">
                        <Spinner variant="primary" size="md" content="loader-9" />
                    </div>
                </div>
                <div className="d-flex flex-column flex-shrink-0">
                    <p className="w700 mb-12 text-secondary text-center">Loader 10</p>
                    <div className="d-flex justify-content-center">
                        <Spinner variant="primary" size="md" content="loader-10" />
                    </div>
                </div>
            </div>
        </>
    )
}

export const Variants: React.FC = () => {
    return (
        <>
            <div className="d-flex align-items-center justify-content-center gap-4">
                <div className="d-flex flex-column flex-shrink-0">
                    <p className="w700 mb-12 text-secondary text-center">Loader 1</p>
                    <div className="d-flex justify-content-center">
                        <Spinner variant="primary" size="md" content="loader-1" />
                    </div>
                </div>
                <div className="d-flex flex-column flex-shrink-0">
                    <p className="w700 mb-12 text-secondary text-center">Loader 2</p>{' '}
                    <div className="d-flex justify-content-center">
                        <Spinner variant="secondary" size="md" content="loader-2" />
                    </div>
                </div>
                <div className="d-flex flex-column flex-shrink-0">
                    <p className="w700 mb-12 text-secondary text-center">Loader 3</p>
                    <div className="d-flex justify-content-center">
                        <Spinner variant="success" size="md" content="loader-3" />
                    </div>
                </div>
                <div className="d-flex flex-column flex-shrink-0">
                    <p className="w700 mb-12 text-secondary text-center">Loader 4</p>
                    <div className="d-flex justify-content-center">
                        <Spinner variant="info" size="md" content="loader-4" />
                    </div>
                </div>
                <div className="d-flex flex-column flex-shrink-0">
                    <p className="w700 mb-12 text-secondary text-center">Loader 5</p>
                    <div className="d-flex justify-content-center">
                        <Spinner variant="warning" size="md" content="loader-5" />
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div className="d-flex align-items-center justify-content-center gap-4">
                <div className="d-flex flex-column flex-shrink-0">
                    <p className="w700 mb-12 text-secondary text-center">Loader 6</p>
                    <div className="d-flex justify-content-center">
                        <Spinner variant="danger" size="md" content="loader-6" />
                    </div>
                </div>
                <div className="d-flex flex-column flex-shrink-0">
                    <p className="w700 mb-12 text-secondary text-center">Loader 7</p>
                    <div className="d-flex justify-content-center">
                        <Spinner variant="light" size="md" content="loader-7" />
                    </div>
                </div>
                <div className="d-flex flex-column flex-shrink-0">
                    <p className="w700 mb-12 text-secondary text-center">Loader 8</p>
                    <div className="d-flex justify-content-center">
                        <Spinner variant="dark" size="md" content="loader-8" />
                    </div>
                </div>
            </div>
        </>
    )
}

export const Sizes: React.FC = () => (
    <>
        <div className="d-flex align-items-center justify-content-center gap-4">
            <div className="d-flex flex-column flex-shrink-0">
                <p className="w700 mb-12 text-secondary text-center">Mini</p>
                <div className="d-flex justify-content-center">
                    <Spinner variant="danger" size="xs" content="loader-1" />
                </div>
            </div>
            <div className="d-flex flex-column flex-shrink-0">
                <p className="w700 mb-12 text-secondary text-center">Small</p>
                <div className="d-flex justify-content-center">
                    <Spinner variant="danger" size="sm" content="loader-2" />
                </div>
            </div>
            <div className="d-flex flex-column flex-shrink-0">
                <p className="w700 mb-12 text-secondary text-center">Medium</p>
                <div className="d-flex justify-content-center">
                    <Spinner variant="danger" size="md" content="loader-3" />
                </div>
            </div>
            <div className="d-flex flex-column flex-shrink-0">
                <p className="w700 mb-12 text-secondary text-center">Large</p>
                <div className="d-flex justify-content-center">
                    <Spinner variant="danger" size="lg" content="loader-4" />
                </div>
            </div>
            <div className="d-flex flex-column flex-shrink-0">
                <p className="w700 mb-12 text-secondary text-center">XLarge</p>
                <div className="d-flex justify-content-center">
                    <Spinner variant="danger" size="xl" content="loader-5" />
                </div>
            </div>
            <div className="d-flex flex-column flex-shrink-0">
                <p className="w700 mb-12 text-secondary text-center">XXLarge</p>
                <div className="d-flex justify-content-center">
                    <Spinner variant="danger" size="xxl" content="loader-5" />
                </div>
            </div>
        </div>
    </>
)
