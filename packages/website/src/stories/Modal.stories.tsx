import React from 'react'
import { ComponentMeta } from '@storybook/react'
import { AnimationName } from '@nixjs23n6/baseui-core'
import { Modal } from '@nixjs23n6/baseui-modal'
import { Button } from '@nixjs23n6/baseui-button'

export default {
    title: 'Feedback/Modal',
    argTypes: {
        id: {
            description: 'The id of the modal.',
            table: {
                category: 'General',
                type: {
                    summary: 'react-modal'
                }
            },
            type: 'string'
        },
        open: {
            description: 'If true, the modal will be open.',
            table: {
                category: 'General',
                type: {
                    summary: 'false'
                }
            },
            type: 'boolean'
        },
        showClose: {
            description: 'If true, the modal will display the close button.',
            table: {
                category: 'General',
                type: {
                    summary: 'false'
                }
            },
            type: 'boolean'
        },
        closeOnClickOutside: {
            description: 'If true, the modal will close when the outside is clicked.',
            table: {
                category: 'General',
                type: {
                    summary: 'true'
                }
            },
            type: 'boolean'
        },
        unmountOnExit: {
            description: 'Unmount container (remove it from the DOM) when they are no longer visible.',
            table: {
                category: 'General',
                type: {
                    summary: 'false'
                }
            },
            type: 'boolean'
        },
        closeOnEsc: {
            description: 'Hide the portal by pressing ESC key.',
            table: {
                category: 'General',
                type: {
                    summary: 'true'
                }
            },
            type: 'boolean'
        },
        onEsc: {
            description: 'Callback fired when the escape key is pressed and focus is within modal.',
            table: {
                category: 'General',
                type: {}
            },
            type: 'function'
        },
        onClose: {
            description: 'Callback invoked to close the modal.',
            table: {
                category: 'General',
                type: {}
            },
            type: 'function'
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
        },
        animation: {
            description: 'Enable the animation.',
            table: {
                category: 'Animation',
                type: {
                    summary: 'false'
                }
            },
            type: 'boolean'
        },
        animationName: {
            description: 'Select the animation to animate the opening/closing of the dialog.',
            table: {
                category: 'Animation',
                type: {
                    summary:
                        'fadeIn | fadeInDown | fadeInUp | fadeInLeft | fadeInRight | slideInDown | slideInUp | slideInLeft | slideInRight'
                }
            },
            type: 'string'
        },
        animationDuration: {
            description: 'Set the duration time to animate the opening/closing of the dialog.',
            table: {
                category: 'Animation',
                type: {
                    summary: 300
                }
            },
            type: 'number'
        }
    }
} as ComponentMeta<any>

export const Default: React.FC = () => {
    const [isPayment, setIsPayment] = React.useState(false)

    function closePaymentModal() {
        setIsPayment(false)
    }

    function openPaymentModal() {
        setIsPayment(true)
    }

    const [isDeactivate, setDeactivate] = React.useState(false)

    function onCloseDeactivateModal() {
        setDeactivate(false)
    }

    function onDeactivateModal() {
        setDeactivate(true)
    }

    return (
        <div className="container-box">
            <Button variant="primary" size="lg" type="button" onClick={openPaymentModal}>
                Open Dialog
            </Button>
            <br />
            <br />
            <Button variant="secondary" size="lg" type="button" onClick={onDeactivateModal}>
                Open Deactivate Account
            </Button>
            <Modal as={'div'} open={isPayment} onClose={closePaymentModal} closeOnEsc>
                <Modal.Header className="mb-16">
                    <h3>Payment successful</h3>
                </Modal.Header>
                <Modal.Body className="mb-24">
                    <p>Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="button" onClick={closePaymentModal}>
                        Got it, thanks!
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal as={'div'} open={isDeactivate} onClose={onCloseDeactivateModal} showClose>
                <Modal.Header className="mb-16">
                    <h2>Deactivate account</h2>
                </Modal.Header>
                <Modal.Body className="mb-24">
                    <p>
                        Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot
                        be undone.
                    </p>
                </Modal.Body>
                <Modal.Footer className="text-right">
                    <Button type="button" variant="primary" className="mr-16" onClick={onCloseDeactivateModal}>
                        Cancel
                    </Button>
                    <Button type="submit" variant="secondary">
                        Deactivate
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export const Transitions: React.FC = () => {
    const [open, setOpen] = React.useState<boolean>(false)
    const [animation, setAnimation] = React.useState<AnimationName>('fadeIn')

    function onCloseModal() {
        setOpen(false)
    }

    function openModal(animationName: AnimationName) {
        setAnimation(animationName)
        setTimeout(() => {
            setOpen(true)
        }, 100)
    }

    return (
        <div className="container-box">
            <Button variant="secondary" type="button" onClick={() => openModal('fadeIn')}>
                fadeIn
            </Button>
            <br />
            <br />
            <Button variant="secondary" type="button" onClick={() => openModal('fadeInUp')}>
                fadeInUp
            </Button>
            <br />
            <br />
            <Button variant="secondary" type="button" onClick={() => openModal('fadeInDown')}>
                fadeInDown
            </Button>
            <br />
            <br />
            <Button variant="secondary" type="button" onClick={() => openModal('fadeInLeft')}>
                fadeInLeft
            </Button>
            <br />
            <br />
            <Button variant="secondary" type="button" onClick={() => openModal('fadeInRight')}>
                fadeInRight
            </Button>
            <br />
            <br />
            <Button variant="secondary" type="button" onClick={() => openModal('slideInUp')}>
                slideInUp
            </Button>
            <br />
            <br />
            <Button variant="secondary" type="button" onClick={() => openModal('slideInDown')}>
                slideInDown
            </Button>
            <br />
            <br />
            <Button variant="secondary" type="button" onClick={() => openModal('slideInLeft')}>
                slideInLeft
            </Button>
            <br />
            <br />
            <Button variant="secondary" type="button" onClick={() => openModal('slideInRight')}>
                slideInRight
            </Button>
            <Modal as={'div'} open={open} onClose={onCloseModal} animation animationName={animation} closeOnEsc>
                <Modal.Header className="mb-16">
                    <h3>Payment successful</h3>
                </Modal.Header>
                <Modal.Body className="mb-24">
                    <p>Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="button" onClick={onCloseModal}>
                        Got it, thanks!
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export const UnmountOnExit: React.FC = () => {
    const [open, setOpen] = React.useState<boolean>(false)
    function onCloseModal() {
        setOpen(false)
    }

    function onOpenModal() {
        setOpen(true)
    }

    return (
        <div className="container-box">
            <Button variant="secondary" type="button" onClick={onOpenModal}>
                Open Modal
            </Button>
            <br />
            <br />
            <Modal as={'div'} open={open} onClose={onCloseModal} unmountOnExit closeOnEsc animation animationName="fadeIn">
                <Modal.Header className="mb-16">
                    <h3>Payment successful</h3>
                </Modal.Header>
                <Modal.Body className="mb-24">
                    <p>Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="button" onClick={onCloseModal}>
                        Got it, thanks!
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
